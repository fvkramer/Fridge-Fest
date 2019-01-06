import { Physics, Sprite } from '../class_util';

const slowSprite = new Image();
slowSprite.src = '/game/Slow.png';

const createSlow = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'slow',
    physics: new Physics(x, y),
    sprite: new Sprite(slowSprite, 128, 512, 1, 4),
    speed: 0,
    speedOffset: 5,
  },
});

export default createSlow;
