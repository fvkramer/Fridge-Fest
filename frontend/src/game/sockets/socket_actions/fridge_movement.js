import { fridgeStaticSprite, fridgeMoveSprite } from '../../fridge';

export const handleKeyDown = (key, player) => {
  if (!player) return;

  const { sprite, physics, speed } = player;
  sprite.isMove = true;
  sprite.updateSprite(fridgeMoveSprite);

  if (key === 'a') {
    sprite.isMoveLeft = true;
    physics.dLeft = speed;
  }
  if (key === 'd') {
    sprite.isMoveLeft = false;
    physics.dRight = speed;
  }
  if (key === 'w') {
    physics.dUp = speed;
  }
  if (key === 's') {
    physics.dDown = speed;
  }

  // player 2
  if (key === 'j') {
    sprite.isMoveLeft = true;
    physics.dLeft = speed;
  }
  if (key === 'l') {
    sprite.isMoveLeft = false;
    physics.dRight = speed;
  }
  if (key === 'i') {
    physics.dUp = speed;
  }
  if (key === 'k') {
    physics.dDown = speed;
  }

  // player 3

  if (key === 'ArrowLeft') {
    sprite.isMoveLeft = true;
    physics.dLeft = speed;
  }
  if (key === 'ArrowRight') {
    sprite.isMoveLeft = false;
    physics.dRight = speed;
  }
  if (key === 'ArrowUp') {
    physics.dUp = speed;
  }
  if (key === 'ArrowDown') {
    physics.dDown = speed;
  }
};

export const handleKeyUp = (key, player) => {
  if (!player) return;

  const { physics, sprite } = player;

  if (key === 'a') {
    physics.dLeft = 0;
  }
  if (key === 'd') {
    physics.dRight = 0;
  }
  if (key === 'w') {
    physics.dUp = 0;
  }
  if (key === 's') {
    physics.dDown = 0;
  }


  // if (key === 'j') {
  //   physics.dLeft = 0;
  // }
  // if (key === 'l') {
  //   physics.dRight = 0;
  // }
  // if (key === 'i') {
  //   physics.dUp = 0;
  // }
  // if (key === 'k') {
  //   physics.dDown = 0;
  // }


  // if (key === 'ArrowLeft') {
  //   physics.dLeft = 0;
  // }
  // if (key === 'ArrowRight') {
  //   physics.dRight = 0;
  // }
  // if (key === 'ArrowUp') {
  //   physics.dUp = 0; d;
  // }
  // if (key === 'ArrowDown') {
  //   physics.dDown = 0;
  // }

  if (physics.dX() === 0 && physics.dY() === 0) {
    sprite.isMove = false;
    sprite.updateSprite(fridgeStaticSprite);
  }
};
