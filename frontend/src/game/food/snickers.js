import { Physics, Sprite } from '../class_util';

const snickerSprite = new Image();
snickerSprite.src = '';

const createSnicker = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'milkshake',
    physics: new Physics(x, y),
    sprite: new Sprite(snickerSprite, 128, 384, 1, 3),
    speed: 0,
    speedOffset: 3,
  },
});

export default createSnicker;
