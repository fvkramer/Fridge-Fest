const activateSkill = (store, fridge, fridgeIds) => {
  const otherFridgeIds = fridgeIds.filter(id => id !== fridge.id);
  const { skill } = fridge;

  store.dispatch({ type: 'USE_SKILL', fridgeId: fridge.id });

  if (skill.type === 'slow' || skill.type === 'lightning') {
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
  } else {
    switch (skill.type) {
      case 'teleport': {
        const { physics, sprite } = fridge;

        window.positionX = skill.positionX;
        window.positionY = skill.positionY;

        sprite.isTeleport = true;
        physics.isTeleport = true;

        break;
      }
      case 'fast':
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
          }), 5000,
        );
        break;
      default:
    }
  }
};


export default activateSkill;
