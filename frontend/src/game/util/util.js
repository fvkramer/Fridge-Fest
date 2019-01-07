
export const isCollided = (asset1, asset2) => {
  if (
    asset1.physics.x < asset2.physics.x + asset2.sprite.width
    && asset1.physics.x + asset1.sprite.width > asset2.physics.x
    && asset1.physics.y < asset2.physics.y + asset2.sprite.height
    && asset1.physics.y + asset1.sprite.height > asset2.physics.y
  ) return true;

  return false;
};

export const randomFromRange = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

export const isRoundOver = (store, socketId) => {
  const state = store.getState();
  const fridge = state.game.fridges[socketId];

  const iRCount = fridge.instantRamen;
  const donutCount = fridge.donut;
  const pizzaCount = fridge.pizza;
  const milkshakeCount = fridge.milkshake;
  const snickerCount = fridge.snicker;

  if (iRCount >= 1 && donutCount >= 1 && pizzaCount >= 1 && milkshakeCount >= 1 && snickerCount >= 1) {
    return true;
  }

  return false;
};
