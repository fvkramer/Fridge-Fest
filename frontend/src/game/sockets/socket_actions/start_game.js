import createFridge from '../../fridge';
import GameCanvas from '../../game_canvas';
import createInstantRamen from '../../food/instantRamen';

const handleStartGame = (store, { fridgeIds, instantRamenIds }) => {
  for (let i = 0; i < instantRamenIds.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_INSTANT_RAMEN', food: createInstantRamen(instantRamenIds[i]) });
  }
  for (let i = 0; i < fridgeIds.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FRIDGE', fridge: createFridge(fridgeIds[i]) });
  }

  window.setTimeout(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const game = new GameCanvas(store, canvas, ctx);

    game.draw(10);
  }, 1000);
};

export default handleStartGame;
