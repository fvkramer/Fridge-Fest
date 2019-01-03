import { Physics, Sprite } from './class_util';

const fridgeSprite = new Image();
fridgeSprite.src = 'https://www.dropbox.com/s/lkt2o9b9kkfdd70/fridge.png?dl=1';

const createFridge = id => ({
  [id]: {
    id,
    physics: new Physics(20, 20),
    sprite: new Sprite(fridgeSprite, 128, 384, 1, 3),
    speed: 20,
    instantRamenCount: 0,
    milkShakeCount: 0,
    snickerCount: 0,
    donutCount: 0,
    pizzaCount: 0,
  },
});

export default createFridge;
