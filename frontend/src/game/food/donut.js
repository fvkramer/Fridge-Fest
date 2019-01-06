import { Physics, Sprite } from '../class_util';

const donutSprite = new Image();
donutSprite.src = '/game/Donut.png';

const createDonut = ({ id, x, y }) => ({
  [id]: {
    id,
    type: 'donut',
    physics: new Physics(x, y),
    sprite: new Sprite(donutSprite, 64, 64, 1, 1),
    speed: 0,
    speedOffset: 2,
  },
});

export default createDonut;
