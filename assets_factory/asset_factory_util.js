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
  let x = randomFromRange(100, 1900);
  let y = randomFromRange(100, 1900);

  let mockAsset = {
    x,
    y,
    width: 300, // make sure assets are at least 300px away from walls
    height: 300,
  };

  for (let i = 0; i < walls.length; i += 1) {
    while (isCollision(mockAsset, walls[i])) {
      x = randomFromRange(100, 1900);
      y = randomFromRange(100, 1900);

      mockAsset = {
        x,
        y,
        width: 300,
        height: 300,
      };
    }
  }

  return { x, y };
};

module.exports = {
  makeXY,
  randomFromRange,
};
