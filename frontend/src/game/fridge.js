import { Physics, Sprite } from './class_util';

const fridgeStatic = new Image();
// fridgeStatic.src = '../assets/game/fridge_static.png';
// fridgeStatic.src = 'https://www.dropbox.com/s/8nww33urctzwz1y/Front%20Facing%20Fridge%20Sprite%20Stationary.png?dl=1';
fridgeStatic.src = '/game/fridge_static.png';
// fridgeStatic.src = '/game/zfridge.png';

const fridgeMove = new Image();
fridgeMove.src = 'game/fridge_move.png';
// fridgeMove.src = 'https://www.dropbox.com/s/gt3v21a61chjhw6/Front%20Facing%20Fridge%20Sprite%20Naruto%20Run.png?dl=1';
// fridgeStatic.src = '../../../assets/game/fridge_move.png';

export const fridgeStaticSprite = {
  image: fridgeStatic,
  sheetHeight: 380,
  sheetWidth: 156,
  rows: 2,
  frameCount: 1,
};

export const fridgeMoveSprite = {
  image: fridgeMove,
  sheetHeight: 384,
  sheetWidth: 864,
  rows: 2,
  frameCount: 4,
};

const createFridge = id => ({
  [id]: {
    id,
    type: 'fridge',
    physics: new Physics(150, 150),
    sprite: new Sprite(fridgeStatic, 380, 156, 2, 1),
    speed: 20,
    skill: {},
    instantRamen: 0,
    milkshake: 0,
    snicker: 0,
    donut: 0,
    pizza: 0,
    points: 0,
  },
});

export default createFridge;
