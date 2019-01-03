import createFridge from '../../fridge';
import GameCanvas from '../../game_canvas';

const handleStartGame = (store, fridgeIds) => {
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
