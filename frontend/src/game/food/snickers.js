import { Physics, Sprite } from '../class_util';

const snickerSprite = new Image();
snickerSprite.src = '/game/Candy_Bar.png';

const createSnicker = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'snicker',
    physics: new Physics(x, y),
    sprite: new Sprite(snickerSprite, 128, 384, 1, 1),
    speed: 0,
    speedOffset: 3,
  },
});

export default createSnicker;
