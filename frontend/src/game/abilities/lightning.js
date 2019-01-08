import { Physics, Sprite } from '../class_util';

const lightningSprite = new Image();
lightningSprite.src = '/game/Lightning.png';

const createLightning = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'lightning',
    physics: new Physics(x, y),
    sprite: new Sprite(lightningSprite, 123, 70, 1, 1),
    speed: 0,
    speedOffset: 15,
  },
});

export default createLightning;
