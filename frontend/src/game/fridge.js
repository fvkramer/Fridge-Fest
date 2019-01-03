import { Physics, Sprite } from './class_util';

const fridgeSprite = new Image();
fridgeSprite.src = 'https://www.dropbox.com/s/lkt2o9b9kkfdd70/fridge.png?dl=1';

const createFridge = id => ({
  [id]: {
    id,
    physics: new Physics(20, 20),
    sprite: new Sprite(fridgeSprite, 128, 384, 1, 3),
    speed: 20,
    instantRamen: 0,
    milkShake: 0,
    snicker: 0,
    donut: 0,
    pizza: 0,
  },
});

export default createFridge;
