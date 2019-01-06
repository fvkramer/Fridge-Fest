const activateSkill = (store, fridge, fridgeIds) => {
  const otherFridgeIds = fridgeIds.filter(id => id !== fridge.id);
  const { skill } = fridge;

  store.dispatch({ type: 'USE_SKILL', fridgeId: fridge.id });

  if (skill.type === 'fast') {
    store.dispatch({
      type: 'UPDATE_SPEED',
      speedOffset: skill.speedOffset,
      fridgeId: fridge.id,
    });

    window.setTimeout(
      () => store.dispatch({
        type: 'UPDATE_SPEED',
        speedOffset: skill.speedOffset,
        fridgeId: fridge.id,
      }),
      5000,
    );
  } else {
    for (let i = 0; i < otherFridgeIds.length; i += 1) {
      if (skill.type === 'slow') {
        store.dispatch({
          type: 'UPDATE_SPEED',
          speedOffset: skill.speedOffset,
          fridgeId: otherFridgeIds[i],
        });

        window.setTimeout(
          () => store.dispatch({
            type: 'UPDATE_SPEED',
            speedOffset: -skill.speedOffset,
            fridgeId: otherFridgeIds,
          }),
          5000,
        );
      }
    }
  }
};

export default activateSkill;
