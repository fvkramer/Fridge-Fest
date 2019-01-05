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
