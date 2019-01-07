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

const handleStartGame = (socket, store, {
  fridgeIds, instantRamen, milkshake, snicker, slow, fast, pizza, donut, teleport, floor, walls,
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
  for (let i = 0; i < fridgeIds.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_FRIDGE', fridge: createFridge(fridgeIds[i]) });
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
  store.dispatch({ type: 'RECEIVE_BACKGROUND', background: createFloor(floor.id) });
  for (let i = 0; i < walls.length; i += 1) {
    store.dispatch({ type: 'RECEIVE_BACKGROUND', background: createWall(walls[i]) });
  }

  // const gameRunning = false;
  let canvas;
  let ctx;
  let game;

  window.setTimeout(() => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    game = new GameCanvas(socket, store, canvas, ctx);
    game.draw(10);
  }, 0);

  // if (!gameRunning) {
  //   gameRunning = true;
  //   window.setTimeout(() => {
  //     canvas = document.getElementById('canvas');
  //     ctx = canvas.getContext('2d');
  //     game = new GameCanvas(socket, store, canvas, ctx);
  //     game.draw(10);
  //   }, 0);
  // }
};

export default handleStartGame;
