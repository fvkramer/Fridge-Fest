import { Physics, Sprite } from '../class_util';

const pizzaSprite = new Image();
pizzaSprite.src = '';

const createPizza = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'pizza',
    physics: new Physics(x, y),
    sprite: new Sprite(pizzaSprite, 128, 384, 1, 3),
    speed: 0,
    speedOffset: 1,
  },
});

export default createPizza;
