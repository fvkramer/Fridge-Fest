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
    sprite: new Sprite(teleportSprite, 100, 300, 1, 1),
    // positionX: Math.floor(Math.random() * CANVAS_WIDTH),
    // positionY: Math.floor(Math.random() * CANVAS_HEIGHT),
    positionX: toX,
    positionY: toY,
  },
});

export default createTeleport;
