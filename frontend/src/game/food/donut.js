import { Physics, Sprite } from '../class_util';

const donutSprite = new Image();
donutSprite.src = '';

const createDonut = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'donut',
    physics: new Physics(x, y),
    sprite: new Sprite(donutSprite, 128, 384, 1, 3),
    speed: 0,
    speedOffset: 2,
  },
});

export default createDonut;
