import { Physics, Sprite } from '../class_util';

const milkshakeSprite = new Image();
milkshakeSprite.src = '';

const createMilkshake = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'milkshake',
    physics: new Physics(x, y),
    sprite: new Sprite(milkshakeSprite, 128, 384, 1, 3),
    speed: 0,
    speedOffset: 4,
  },
});

export default createMilkshake;
