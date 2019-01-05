import { Physics, Sprite } from '../class_util';

const teleportSprite = new Image();
teleportSprite.src = '/game/Teleport.png';

const createTeleport = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'teleport',
    physics: new Physics(x, y),
    sprite: new Sprite(teleportSprite, 100, 300, 1, 3),
    speed: 0,
    speedOffset: 5,
  },
});

export default createTeleport;
