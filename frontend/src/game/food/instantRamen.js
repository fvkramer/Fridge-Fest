import { Physics, Sprite } from '../class_util';

const instantRamenSprite = new Image();
instantRamenSprite.src = 'https://www.dropbox.com/s/pmamf3byv1emcpe/instant_ramen.png?dl=1';
instantRamenSprite.height = 100;
instantRamenSprite.width = 100;

const createInstantRamen = id => ({
  [id]: {
    id,
    physics: new Physics(100, 100),
    sprite: new Sprite(instantRamenSprite, 100, 100, 1, 1),
    speed: 0,
    speedOffset: 5,
  },
});

export default createInstantRamen;
