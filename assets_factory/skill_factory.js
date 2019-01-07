const { randomFromRange, makeXY } = require('./asset_factory_util');

const slow = [];
for (let i = 0; i < 10; i += 1) {
  slow.push({
    id: `skills-slow-${i}`,
    // x: randomFromRange(0, 2000),
    // y: randomFromRange(0, 2000),
    x: makeXY(),
    y: makeXY(),
  });
}
const fast = [];
for (let i = 0; i < 10; i += 1) {
  fast.push({
    id: `skills-fast-${i}`,
    // x: randomFromRange(0, 2000),
    // y: randomFromRange(0, 2000),
    x: makeXY(),
    y: makeXY(),
  });
}
const teleport = [];
for (let i = 0; i < 10; i += 1) {
  teleport.push({
    id: `skills-teleport-${i}`,
    // x: randomFromRange(0, 2000),
    // y: randomFromRange(0, 2000),
    x: makeXY(),
    y: makeXY(),
    toX: randomFromRange(0, 2000),
    toY: randomFromRange(0, 2000),
  });
}

module.exports = {
  slow,
  fast,
  teleport,
};
