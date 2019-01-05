const randomFromRange = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

let fridgeIds = [];

const instantRamen = [];
for (let i = 0; i < 10; i += 1) {
  instantRamen.push({
    id: `ramen-${i}`,
    x: randomFromRange(0, 1000),
    y: randomFromRange(0, 1000),
  });
}

const setupSockets = io => (
  io.on('connection', (socket) => {
    fridgeIds.push(socket.id);
    console.log(`${socket.id}has connected`);

    socket.on('disconnect', () => {
      console.log('User has disconnected');
      fridgeIds = fridgeIds.filter(id => id !== socket.id);

      io.sockets.emit('removeFridge', socket.id);
    });

    socket.on('startGame', () => io.sockets.emit('startGame', { fridgeIds, instantRamen }));

    socket.on('keydown', ({ key, fridgeId }) => {
      if (key === '1') {
        io.sockets.emit('activateSkill', { fridgeId, fridgeIds });
      } else {
        io.sockets.emit('keydown', { key, fridgeId });
      }
    });
    socket.on('keyup', ({ key, fridgeId }) => {
      io.sockets.emit('keyup', { key, fridgeId });
    });

    // socket.on('massSlow', (data) => {
    //   socket.broadcast.emit('massSlow', data);
    // });

    socket.on('collisionDetected', (data) => {
      io.sockets.emit('resolveCollision', data);
    });
  })
);

module.exports = setupSockets;
