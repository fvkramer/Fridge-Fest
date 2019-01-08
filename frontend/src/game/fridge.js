import { Physics, Sprite } from './class_util';

const fridgeStatic = new Image();
fridgeStatic.src = '/game/fridge_static.png';
// fridgeStatic.src = '/game/pikachu-standing.png';

const fridgeMove = new Image();
fridgeMove.src = 'game/fridge_move.png';
// fridgeMove.src = '/game/pikachu-running.png';


export const fridgeStaticSprite = {
  image: fridgeStatic,
  // sheetHeight: 380,
  // sheetWidth: 156,
  sheetHeight: 138,
  sheetWidth: 57,
  // rows: 2,
  // frameCount: 1,
  rows: 2,
  frameCount: 1,
};

export const fridgeMoveSprite = {
  image: fridgeMove,
  // sheetHeight: 128,
  // sheetWidth: 384,
  sheetHeight: 144,
  sheetWidth: 324,
  rows: 2,
  frameCount: 4,
};

const createFridge = id => ({
  [id]: {
    id,
    type: 'fridge',
    physics: new Physics(300, 300),
    sprite: new Sprite(fridgeStatic, 138, 57, 2, 1),
    // sprite: new Sprite(fridgeStatic, 96, 161, 2, 4),
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
