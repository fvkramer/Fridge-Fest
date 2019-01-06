const activateSkill = (store, fridge, fridgeIds) => {
  const otherFridgeIds = fridgeIds.filter(id => id !== fridge.id);
  const { skill } = fridge;

  if (skill.type === 'slow' || skill.type === 'lightning') {
    for (let i = 0; i < otherFridgeIds.length; i += 1) {
      if (skill.type === 'slow') {
        store.dispatch({
          type: 'UPDATE_SPEED',
          speedOffset: skill.speedOffset,
          fridgeId: otherFridgeIds[i],
        });
      }
    }
  } else {
    switch (skill.type) {
      case 'teleport':
        fridge.physics.x = skill.positionX;
        fridge.physics.y = skill.positionY;
        fridge.sprite.isTeleport = true;
        // store.dispatch({
        //   type: 'UPDATE_POSITION',
        //   newX: skill.positionX,
        //   newY: skill.positionY,
        //   fridgeId: fridge.id,
        // });
        break;
      case 'fast':
        break;
      default:
    }
  }
};

export default activateSkill;
