const walls = require('./wall_factory');

const randomFromRange = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const isCollision = (asset1, asset2) => {
  if (
    asset1.x < asset2.x + asset2.width
    && asset1.x + asset1.width > asset2.x
    && asset1.y < asset2.y + asset2.height
    && asset1.y + asset1.height > asset2.y
  ) return true;

  return false;
};

const makeXY = () => {
  let x = randomFromRange(0, 2000);
  let y = randomFromRange(0, 2000);

  const mockAsset = {
    x,
    y,
    width: 156, // width && height of the largest asset(i.e. fridge)
    height: 190,
  };

  for (let i = 0; i < walls.length; i += 1) {
    while (isCollision(mockAsset, walls[i])) {
      x = randomFromRange(0, 2000);
      y = randomFromRange(0, 2000);
    }
  }

  return { x, y };
};

module.exports = {
  makeXY,
  randomFromRange,
};
