import { Physics, Sprite } from '../class_util';

const wall = new Image();
wall.src = '';

const createWall = ({
  id, x, y, height, width,
}) => ({
  [id]: {
    id,
    type: 'wall',
    physics: new Physics(x, y),
    sprite: new Sprite(wall, height, width, 1, 1),
    speed: 0,
  },
});

export default createWall;
