const randomFromRange = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

let fridgeIds = [];

const instantRamen = [];
for (let i = 0; i < 5; i += 1) {
  instantRamen.push({
    id: `food-ramen-${i}`,
    x: randomFromRange(0, 1000),
    y: randomFromRange(0, 1000),
  });
}
const pizza = [];
for (let i = 0; i < 20; i += 1) {
  pizza.push({
    id: `food-pizza-${i}`,
    x: randomFromRange(0, 500),
    y: randomFromRange(0, 500),
  });
}
const donut = [];
for (let i = 0; i < 15; i += 1) {
  donut.push({
    id: `food-donut-${i}`,
    x: randomFromRange(0, 1000),
    y: randomFromRange(0, 1000),
  });
}

const slow = [];
for (let i = 0; i < 10; i += 1) {
  slow.push({
    id: `skills-slow-${i}`,
    x: randomFromRange(0, 1000),
    y: randomFromRange(0, 1000),
  });
}

const fast = [];
for (let i = 0; i < 10; i += 1) {
  fast.push({
    id: `skills-fast-${i}`,
    x: randomFromRange(0, 1000),
    y: randomFromRange(0, 1000),
  });
}

const teleport = [];
for (let i = 0; i < 10; i += 1) {
  teleport.push({
    id: `skills-teleport-${i}`,
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

    socket.on('startGame', () => io.sockets.emit('startGame', {
      fridgeIds,
      instantRamen,
      pizza,
      donut,
      slow,
      fast,
      teleport,
    }));

    socket.on('keydown', ({ key }) => {
      if (key === '1') {
        io.sockets.emit('activateSkill', { fridgeId: socket.id, fridgeIds });
      } else {
        io.sockets.emit('keydown', { key, fridgeId: socket.id });
      }
    });
    socket.on('keyup', ({ key }) => {
      io.sockets.emit('keyup', { key, fridgeId: socket.id });
    });

    socket.on('collisionDetected', (data) => {
      io.sockets.emit('resolveCollision', data);
    });
  })
);

module.exports = setupSockets;
