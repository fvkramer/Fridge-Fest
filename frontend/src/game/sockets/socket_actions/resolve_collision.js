const FOOD = ['instantRamen', 'pizza', 'milkshake', 'donut', 'snicker'];

const isEatTooMuch = (fridge) => {
  const {
    speed, instantRamen, milkshake, snicker, donut, pizza,
  } = fridge;

  if ((
    instantRamen >= 5
    || milkshake >= 10
    || snicker >= 15
    || donut >= 20
    || pizza >= 25
  ) && (speed > 5)) return true;

  return false;
};

const handleCollision = (store, fridge, asset) => {
  store.dispatch({ type: 'REMOVE_FOOD', foodId: asset.id });

  if (FOOD.includes(asset.type)) {
    store.dispatch({ type: 'INCREASE_COUNT', fridgeId: fridge.id, foodType: asset.type });
  }

  if (asset.type === 'slow') {
    const skill = {
      type: 'slow',
      speedOffset: asset.speedOffset,
    };
    store.dispatch({ type: 'RECEIVE_SKILL', fridgeId: fridge.id, skill });
  }

  if (isEatTooMuch(fridge)) {
    store.dispatch({ type: 'UPDATE_SPEED', fridgeId: fridge.id, speedOffset: asset.speedOffset });

    window.setTimeout(
      () => store.dispatch({ type: 'UPDATE_SPEED', fridgeId: fridge.id, speedOffset: -asset.speedOffset }),
      5000,
    );
  }

  // Add timer to react component //
};

export default handleCollision;
