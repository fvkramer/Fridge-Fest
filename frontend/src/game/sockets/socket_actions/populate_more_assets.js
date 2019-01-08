import createFridge from '../../fridge';
import createInstantRamen from '../../food/instantRamen';
import createPizza from '../../food/pizza';
import createDonut from '../../food/donut';
import createMilkshake from '../../food/milkShake';
import createSnicker from '../../food/snickers';
import createSlow from '../../abilities/slow';
import createFast from '../../abilities/fast';
import createTeleport from '../../abilities/teleport';
import createLightning from '../../abilities/lightning';

const populateMoreAssets = (socket, store, {
  instantRamen,
  milkshake, snicker, slow,
  fast, pizza, donut,
  teleport, lightning,
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
};

export default populateMoreAssets;
