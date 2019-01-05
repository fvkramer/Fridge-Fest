import { Physics, Sprite } from '../class_util';

const slowSprite = new Image();
slowSprite.src = 'https://www.dropbox.com/s/ipbssyca0v5fv45/Ramen%20%282%29.png?dl=1';

const createSlow = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'slow',
    physics: new Physics(x, y),
    sprite: new Sprite(slowSprite, 100, 300, 1, 3),
    speed: 0,
    speedOffset: 5,
  },
});

export default createSlow;
