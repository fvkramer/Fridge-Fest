import handleStartGame from './socket_actions/start_game';
import { handleKeyDown, handleKeyUp } from './socket_actions/fridge_movement';
import handleCollision from './socket_actions/resolve_collision';
import activateSkill from './socket_actions/activate_skill';
import storeInSession from './socket_actions/store_in_session';

const setupReceivers = (socket, store) => {
  socket.on('startGame', (data) => {
    // debugger;
    handleStartGame(socket, store, data);
  });

  socket.on('receive player', (player) => {
    store.dispatch({ type: 'PLAYER JOINED', player });
  });

  socket.on('chat message', (data) => {
    // test

    // const messages = document.getElementById('messages');
    // const li = document.createElement('li');
    // messages.append(data, li);
    // test
    store.dispatch({ type: 'RECEIVE_MESSAGE', data });
  });

  socket.on('removeFridge', (fridgeId) => {
    store.dispatch({ type: 'REMOVE_FRIDGE', fridgeId });
  });

  // utils
  // debugger;
  const getFridgeById = fridgeId => store.getState().game.fridges[fridgeId];
  const getAssetById = (assetId, assetType) => store.getState().game[assetType][assetId];
  // utils end

  // Fridge movement
  socket.on('keydown', ({ key, fridgeId }) => {
    const player = getFridgeById(fridgeId);
    handleKeyDown(key, player);
  });

  socket.on('keyup', ({ key, fridgeId }) => {
    const player = getFridgeById(fridgeId);
    handleKeyUp(key, player);
  });
  // Fridge movement ends

  socket.on('resolveCollision', ({ fridgeId, assetId }) => {
    const fridge = getFridgeById(fridgeId);

    const assetType = assetId.split('-')[0];
    const asset = getAssetById(assetId, assetType);

    if (!asset) return;

    handleCollision(store, fridge, asset);
  });

  socket.on('activateSkill', ({ fridgeId, fridgeIds }) => {
    const fridge = getFridgeById(fridgeId);
    activateSkill(store, fridge, fridgeIds);
  });

  socket.on('roundOver', () => {
    storeInSession(store);
  });
  socket.on('startGameIn10s', () => {
    setTimeout(() => {
      socket.emit('startGame');
    }, 10000);
  });
};

export default setupReceivers;
