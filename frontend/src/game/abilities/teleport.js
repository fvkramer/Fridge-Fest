import { Physics, Sprite } from '../class_util';
// import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../class_util';


const teleportSprite = new Image();
teleportSprite.src = '/game/Teleport.png';

const createTeleport = ({
  id, x, y, toX, toY,
}) => ({
  [id]: {
    id,
    type: 'teleport',
    physics: new Physics(x, y),
    sprite: new Sprite(teleportSprite, 80, 320, 1, 4),
    positionX: toX,
    positionY: toY,
  },
});

export default createTeleport;
