import { Physics, Sprite } from '../class_util';

const donutSprite = new Image();
donutSprite.src = '';

const createDonut = id => ({
  [id]: {
    id,
    physics: new Physics(20, 20),
    sprite: new Sprite(donutSprite, 128, 384, 1, 3),
    points: 500,
    speed: 0,
  },
});

export default createDonut;
