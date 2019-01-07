const walls = require('./assets_factory/wall_factory');
const { slow, fast, teleport } = require('./assets_factory/skill_factory');
const {
  makeFood,
} = require('./assets_factory/food_factory');

const floor = { id: 'background-floor' };

// ======================================================================= //
let fridgeIds = [];
const {
  instantRamen, pizza, donut, milkshake, snicker,
} = makeFood();

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

    socket.on('chat message', (data) => {
      io.sockets.emit('chat message', data);
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
