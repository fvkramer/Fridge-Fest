import createFridge from '../../fridge';
import GameCanvas from '../../game_canvas';
import createInstantRamen from '../../food/instantRamen';
import createPizza from '../../food/pizza';
import createDonut from '../../food/donut';
import createMilkshake from '../../food/milkShake';
import createSnicker from '../../food/snickers';
import createSlow from '../../abilities/slow';
import createFast from '../../abilities/fast';
import createTeleport from '../../abilities/teleport';
import createFloor from '../../background/floor';
import createWall from '../../background/walls';
import createLightning from '../../abilities/lightning';

const handleStartGame = (socket, store, {
  fridgeIds, instantRamen,
  milkshake, snicker, slow,
  fast, pizza, donut,
  teleport, lightning,
  floor, walls,
}) => {
  for (let i = 0; i < instantRamen.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FOOD', food: createInstantRamen(instantRamen[i]) });
  }
  for (let i = 0; i < pizza.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FOOD', food: createPizza(pizza[i]) });
  }
  for (let i = 0; i < donut.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FOOD', food: createDonut(donut[i]) });
  }
  for (let i = 0; i < milkshake.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FOOD', food: createMilkshake(milkshake[i]) });
  }
  for (let i = 0; i < snicker.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FOOD', food: createSnicker(snicker[i]) });
  }
  for (let j = 0; j < fridgeIds.length; j += 1) {
    // const positions = [[300, 300], [1700, 300], [1700, 1700], [300, 1700]];

    store.dispatch({ type: 'RECEIVE_FRIDGE', fridge: createFridge(fridgeIds[j], j) });
  }
  for (let i = 0; i < slow.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_SKILL', skill: createSlow(slow[i]) });
  }
  for (let i = 0; i < fast.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_SKILL', skill: createFast(fast[i]) });
  }
  for (let i = 0; i < teleport.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_SKILL', skill: createTeleport(teleport[i]) });
  }
  for (let i = 0; i < lightning.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_SKILL', skill: createLightning(lightning[i]) });
  }


  store.dispatch({ type: 'RECEIVE_BACKGROUND', background: createFloor(floor.id) });
  for (let i = 0; i < walls.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_BACKGROUND', background: createWall(walls[i]) });
  }

  window.setTimeout(() => {
    // if (window.game) window.game = undefined;
    // delete window.game;
    // if (window.ctx) window.ctx = undefined;
    // delete window.ctx;
    // if (window.canvas) window.canvas = undefined;
    // delete window.canvas;

    window.canvas = document.getElementById('canvas');
    window.ctx = window.canvas.getContext('2d');
    window.game = new GameCanvas(socket, store, window.canvas, window.ctx);
    window.game.draw(10);
    document.querySelector('audio').play();
  }, 1000);
};

export default handleStartGame;
