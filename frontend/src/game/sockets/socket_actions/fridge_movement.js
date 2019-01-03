import { fridgeStaticSprite, fridgeMoveSprite } from '../../fridge';

export const handleKeyDown = (key, player) => {
  if (!player) return;

  const { sprite, physics, speed } = player;
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

  if (physics.dX() === 0 && physics.dY() === 0) {
    sprite.updateSprite(fridgeStaticSprite);
  }
};
