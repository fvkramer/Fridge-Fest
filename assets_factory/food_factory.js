const randomFromRange = require('./asset_factory_util');

const instantRamen = [];
for (let i = 0; i < 5; i += 1) {
  instantRamen.push({
    id: `food-ramen-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}
const pizza = [];
for (let i = 0; i < 20; i += 1) {
  pizza.push({
    id: `food-pizza-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}
const donut = [];
for (let i = 0; i < 15; i += 1) {
  donut.push({
    id: `food-donut-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

const milkshake = [];
for (let i = 0; i < 10; i += 1) {
  milkshake.push({
    id: `food-milkshake-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

const snicker = [];
for (let i = 0; i < 10; i += 1) {
  snicker.push({
    id: `food-snicker-${i}`,
    x: randomFromRange(0, 2000),
    y: randomFromRange(0, 2000),
  });
}

module.exports = {
  instantRamen,
  pizza,
  donut,
  snicker,
  milkshake,
};
