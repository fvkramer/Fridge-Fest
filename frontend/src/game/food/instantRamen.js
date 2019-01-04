import { Physics, Sprite } from '../class_util';

const instantRamenSprite = new Image();
instantRamenSprite.src = 'https://www.dropbox.com/s/ipbssyca0v5fv45/Ramen%20%282%29.png?dl=1';

const createInstantRamen = id => ({
  [id]: {
    id,
    physics: new Physics(300, 20),
    sprite: new Sprite(instantRamenSprite, 100, 300, 1, 3),
    speed: 0,
    speedOffset: 5,
  },
});

export default createInstantRamen;
