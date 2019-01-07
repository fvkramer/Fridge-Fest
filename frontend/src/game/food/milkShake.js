import { Physics, Sprite } from '../class_util';

const milkshakeSprite = new Image();
// milkshakeSprite.src = '/game/Pizza.png';
milkshakeSprite.src = '/game/Milkshake.png';
// milkshakeSprite.src = 'https://pngtree.com/freepng/milkshake_839066/preview-png.html';

const createMilkshake = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'milkshake',
    physics: new Physics(x, y),
    sprite: new Sprite(milkshakeSprite, 106, 50, 1, 1),
    speed: 0,
    speedOffset: 4,
  },
});

export default createMilkshake;
