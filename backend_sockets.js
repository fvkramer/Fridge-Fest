let fridgeIds = [];
const instantRamenIds = [1];

const setupSockets = io => (
  io.on('connection', (socket) => {
    fridgeIds.push(socket.id);
    console.log(`${socket.id}has connected`);

    socket.on('disconnect', () => {
      console.log('User has disconnected');
      fridgeIds = fridgeIds.filter(id => id !== socket.id);

      io.sockets.emit('removeFridge', socket.id);
    });

    socket.on('startGame', () => io.sockets.emit('startGame', { fridgeIds, instantRamenIds }));

    socket.on('keydown', (data) => {
      io.sockets.emit('keydown', data);
    });
    socket.on('keyup', (data) => {
      io.sockets.emit('keyup', data);
    });

    socket.on('resolveCollision', (data) => {
      io.sockets.emit('resolveCollision', data);
    });
  })
);

module.exports = setupSockets;
