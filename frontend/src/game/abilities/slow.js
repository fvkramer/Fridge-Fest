import { Physics, Sprite } from '../class_util';

const slowSprite = new Image();
slowSprite.src = '';

const createSlow = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'slow',
    physics: new Physics(x, y),
    sprite: new Sprite(slowSprite, 128, 384, 1, 3),
    speed: 0,
    speedOffset: 5,
  },
});

export default createSlow;
