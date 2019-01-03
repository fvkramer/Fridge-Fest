import handleStartGame from './socket_actions/start_game';
import { handleKeyDown, handleKeyUp } from './socket_actions/fridge_movement';

const setupReceivers = (socket, store) => {
  socket.on('startGame', (data) => {
    handleStartGame(store, data);
  });

  socket.on('removeFridge', (fridgeId) => {
    store.dispatch({ type: 'REMOVE_FRIDGE', fridgeId });
  });

  // Fridge movement
  const getFridgeById = fridgeId => store.getState().game.fridges[fridgeId];

  socket.on('keydown', ({ key, fridgeId }) => {
    const player = getFridgeById(fridgeId);
    handleKeyDown(key, player);
  });

  socket.on('keyup', ({ key, fridgeId }) => {
    const player = getFridgeById(fridgeId);
    handleKeyUp(key, player);
  });
  // Fridge movement ends
};

export default setupReceivers;
