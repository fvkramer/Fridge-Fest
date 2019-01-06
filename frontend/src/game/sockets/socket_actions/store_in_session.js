const storeInSession = (store) => {
  const { fridges } = store.getState().game;
  const payload = {};

  Object.values(fridges).forEach((fridge) => {
    payload[fridge.id] = fridge.instantRamen + fridge.donut + fridge.pizza + fridge.milkshake + fridge.snicker;
  });

  store.dispatch({ type: 'ROUND_OVER', payload });
};

export default storeInSession;
