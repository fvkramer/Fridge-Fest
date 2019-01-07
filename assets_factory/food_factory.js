const { makeXY } = require('./asset_factory_util');

const instantRamen = [];
for (let i = 0; i < 5; i += 1) {
  instantRamen.push({
    id: `food-ramen-${i}`,
    x: makeXY().x,
    y: makeXY().y,
  });
}
const pizza = [];
for (let i = 0; i < 20; i += 1) {
  pizza.push({
    id: `food-pizza-${i}`,
    x: makeXY().x,
    y: makeXY().y,
  });
}
const donut = [];
for (let i = 0; i < 15; i += 1) {
  donut.push({
    id: `food-donut-${i}`,
    x: makeXY().x,
    y: makeXY().y,
  });
}
const milkshake = [];
for (let i = 0; i < 10; i += 1) {
  milkshake.push({
    id: `food-milkshake-${i}`,
    x: makeXY().x,
    y: makeXY().y,
  });
}
const snicker = [];
for (let i = 0; i < 10; i += 1) {
  snicker.push({
    id: `food-snicker-${i}`,
    x: makeXY().x,
    y: makeXY().y,
  });
}

module.exports = {
  instantRamen,
  pizza,
  donut,
  snicker,
  milkshake,
};
