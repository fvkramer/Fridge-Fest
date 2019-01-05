const activateSkill = (store, fridge, fridgeIds) => {
  const otherFridgeIds = fridgeIds.filter(id => id !== fridge.id);
  const { skill } = fridge;

  for (let i = 0; i < otherFridgeIds.length; i += 1) {
    if (skill.type === 'slow') {
      store.dispatch({
        type: 'UPDATE_SPEED',
        speedOffset: skill.speedOffset,
        fridgeId: otherFridgeIds[i],
      });
    }
  }
};

export default activateSkill;
