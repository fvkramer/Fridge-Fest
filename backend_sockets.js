
const makeBackground = require('./assets_factory/background_factory');
const makeWalls = require('./assets_factory/wall_factory');
const makeFood = require('./assets_factory/food_factory');
const makeSkills = require('./assets_factory/skill_factory');

// ======================================================================= //
let fridgeIds = [];
const {
  instantRamen, pizza, donut, milkshake, snicker,
} = makeFood();

const setupSockets = io => (
  io.on('connection', (socket) => {
    fridgeIds.push(socket.id);
    console.log(`${socket.id}has connected`);

    io.sockets.emit('receive player', socket.id);

    socket.on('disconnect', () => {
      console.log('User has disconnected');
      fridgeIds = fridgeIds.filter(id => id !== socket.id);

      io.sockets.emit('removeFridge', socket.id);
    });

    socket.on('startGame', () => {
      const {
        instantRamen, pizza, donut, milkshake, snicker,
      } = makeFood();
      const { fast, slow, teleport } = makeSkills();
      const floor = makeBackground();
      const walls = makeWalls();

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
    });

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

    socket.on('gameOver', () => {
      io.sockets.emit('gameOver');
    });

    socket.on('roundOver', () => {
      io.sockets.emit('roundOver');
      socket.emit('startGameIn10s');
    });
  })
);

module.exports = setupSockets;
