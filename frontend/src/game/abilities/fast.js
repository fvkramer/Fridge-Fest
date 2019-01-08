import { Physics, Sprite } from '../class_util';

const fastSprite = new Image();
fastSprite.src = '/game/Fast.png';

const createFast = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'fast',
    physics: new Physics(x, y),
    sprite: new Sprite(fastSprite, 45, 212, 1, 4),
    speed: 0,
    speedOffset: -5,
  },
});

export default createFast;
