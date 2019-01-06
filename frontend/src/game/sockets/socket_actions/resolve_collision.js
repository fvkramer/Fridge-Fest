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
  if (FOOD.includes(asset.type)) {
    store.dispatch({ type: 'REMOVE_FOOD', foodId: asset.id });
    store.dispatch({ type: 'INCREASE_COUNT', fridgeId: fridge.id, foodType: asset.type });
  }

  if (asset.type === 'slow' || asset.type === 'fast') {
    store.dispatch({ type: 'REMOVE_SKILL', skillId: asset.id });
    const skill = {
      type: asset.type,
      speedOffset: asset.speedOffset,
    };
    store.dispatch({ type: 'PICKUP_SKILL', fridgeId: fridge.id, skill });
  }

  if (asset.type === 'teleport') {
    store.dispatch({ type: 'REMOVE_SKILL', skillId: asset.id });
    const skill = {
      type: 'teleport',
      positionX: asset.positionX,
      positionY: asset.positionY,
      src: '/game/Teleport.png',
    };
    store.dispatch({ type: 'PICKUP_SKILL', fridgeId: fridge.id, skill });
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
