const { makeXY } = require('./asset_factory_util');

const slow = [];
for (let i = 0; i < 10; i += 1) {
  slow.push({
    id: `skills-slow-${i}`,
    x: makeXY().x,
    y: makeXY().y,
  });
}
const fast = [];
for (let i = 0; i < 10; i += 1) {
  fast.push({
    id: `skills-fast-${i}`,
    x: makeXY().x,
    y: makeXY().y,
  });
}
const teleport = [];
for (let i = 0; i < 10; i += 1) {
  teleport.push({
    id: `skills-teleport-${i}`,
    x: makeXY().x,
    y: makeXY().y,
    toX: makeXY().x,
    toY: makeXY().y,
  });
}

module.exports = {
  slow,
  fast,
  teleport,
};
