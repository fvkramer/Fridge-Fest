import handleStartGame from './socket_actions/start_game';
import { handleKeyDown, handleKeyUp } from './socket_actions/fridge_movement';
import handleCollision from './socket_actions/resolve_collision';

const setupReceivers = (socket, store) => {
  socket.on('startGame', (data) => {
    handleStartGame(store, data);
  });

  socket.on('removeFridge', (fridgeId) => {
    store.dispatch({ type: 'REMOVE_FRIDGE', fridgeId });
  });

  // utils
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

  socket.on('resolveCollision', ({ fridgeId, assetId, assetType }) => {
    const fridge = getFridgeById(fridgeId);
    const asset = getAssetById(assetId, assetType);

    handleCollision(store, fridge, asset);
  });
};

export default setupReceivers;
