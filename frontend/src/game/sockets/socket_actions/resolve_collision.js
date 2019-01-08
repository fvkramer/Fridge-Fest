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

  if (asset.type === 'slow') {
    store.dispatch({ type: 'REMOVE_SKILL', skillId: asset.id });
    const skill = {
      type: asset.type,
      speedOffset: asset.speedOffset,
      src: '/game/single_slow.png',
    };
    store.dispatch({ type: 'PICKUP_SKILL', fridgeId: fridge.id, skill });
  }

  if (asset.type === 'fast') {
    store.dispatch({ type: 'REMOVE_SKILL', skillId: asset.id });
    const skill = {
      type: asset.type,
      speedOffset: asset.speedOffset,
      src: '/game/single_fast.png',
    };
    store.dispatch({ type: 'PICKUP_SKILL', fridgeId: fridge.id, skill });
  }

  if (asset.type === 'teleport') {
    store.dispatch({ type: 'REMOVE_SKILL', skillId: asset.id });
    const skill = {
      type: 'teleport',
      positionX: asset.positionX,
      positionY: asset.positionY,
      src: '/game/single_teleport.png',
    };
    store.dispatch({ type: 'PICKUP_SKILL', fridgeId: fridge.id, skill });
  }

  if (asset.type === 'lightning') {
    store.dispatch({ type: 'REMOVE_SKILL', skillId: asset.id });
    const skill = {
      type: asset.type,
      speedOffset: asset.speedOffset,
      src: '/game/Lightning.png',
    };
    store.dispatch({ type: 'PICKUP_SKILL', fridgeId: fridge.id, skill });
  }

  if (asset.type === 'wall') {
    const { physics } = fridge;
    physics.dLeft = 0;
    physics.dRight = 0;
    physics.dUp = 0;
    physics.dDown = 0;
  }

  if (isEatTooMuch(fridge)) {
    store.dispatch({ type: 'UPDATE_SPEED', fridgeId: fridge.id, speedOffset: asset.speedOffset });

    // window.setTimeout(() => store.dispatch(
    //   { type: 'UPDATE_SPEED', fridgeId: fridge.id, speedOffset: -asset.speedOffset },
    // ), 5000);
  }
};

export default handleCollision;
