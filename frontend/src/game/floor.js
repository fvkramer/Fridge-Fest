import { Physics, Sprite } from './class_util';

const floor = new Image();
floor.src = '/game/floor_textured.png';

const createFloor = id => ({
  [id]: {
    id,
    type: 'floor',
    physics: new Physics(0, 0),
    sprite: new Sprite(floor, 2000, 2000, 1, 1),
    speed: 0,
    // speedOffset: 2,
  },
});

export default createFloor;
