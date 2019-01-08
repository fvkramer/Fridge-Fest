import { Physics, Sprite } from '../class_util';

const pizzaSprite = new Image();
pizzaSprite.src = '/game/Pizza.png';

const createPizza = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'pizza',
    physics: new Physics(x, y),
    sprite: new Sprite(pizzaSprite, 53, 53, 1, 1),
    speed: 0,
    speedOffset: 1,
  },
});

export default createPizza;
