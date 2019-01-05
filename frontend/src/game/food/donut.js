import { Physics, Sprite } from '../class_util';

const donutSprite = new Image();
donutSprite.src = '';

const createDonut = id => ({
  [id]: {
    id,
    type: 'donut',
    physics: new Physics(20, 20),
    sprite: new Sprite(donutSprite, 128, 384, 1, 3),
    speed: 0,
    speedOffset: 2,
  },
});

export default createDonut;
