import walls from './assets_factory/wall_factory';

const randomFromRange = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

let fridgeIds = [];

const instantRamen = [];
for (let i = 0; i < 5; i += 1) {
  instantRamen.push({
    id: `food-ramen-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}
const pizza = [];
for (let i = 0; i < 20; i += 1) {
  pizza.push({
    id: `food-pizza-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}
const donut = [];
for (let i = 0; i < 15; i += 1) {
  donut.push({
    id: `food-donut-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

const milkshake = [];
for (let i = 0; i < 10; i += 1) {
  milkshake.push({
    id: `food-milkshake-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

const snicker = [];
for (let i = 0; i < 10; i += 1) {
  snicker.push({
    id: `food-snicker-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

const slow = [];
for (let i = 0; i < 10; i += 1) {
  slow.push({
    id: `skills-slow-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

const fast = [];
for (let i = 0; i < 10; i += 1) {
  fast.push({
    id: `skills-fast-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

const teleport = [];
for (let i = 0; i < 10; i += 1) {
  teleport.push({
    id: `skills-teleport-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
    toX: randomFromRange(0, 2000),
    toY: randomFromRange(0, 2000),
  });
}

const floor = { id: 1 };


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
      milkshake,
      snicker,
      slow,
      fast,
      teleport,
      floor,
      walls,
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

    let roundOver = false;
    socket.on('roundOver', () => {
      if (roundOver === false) {
        roundOver = true;
        io.sockets.emit('roundOver');
        setTimeout(() => {
          io.sockets.emit('startGame', {
            fridgeIds,
            instantRamen,
            pizza,
            donut,
            milkshake,
            snicker,
            slow,
            fast,
            teleport,
            floor,
            walls,
          });
          roundOver = false;
        }, 3000);
      }
    });
  })
);

module.exports = setupSockets;
