import { Physics, Sprite } from '../class_util';

const instantRamenSprite = new Image();
instantRamenSprite.src = '/game/Ramen.png';

const createInstantRamen = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'instantRamen',
    physics: new Physics(x, y),
    sprite: new Sprite(instantRamenSprite, 70, 162, 1, 3),
    speed: 0,
    speedOffset: 5,
  },
});

export default createInstantRamen;
