export const storeInSession = (store) => {
  window.cancelAnimationFrame(window.test);
  delete window.test;

  const { fridges } = store.getState().game;
  const payload = {};

  Object.values(fridges).forEach((fridge) => {
    const ramenPoints = fridge.instantRamen >= 1 ? 1 : fridge.instantRamen;
    const pizzaPoints = fridge.pizza >= 1 ? 1 : fridge.pizza;
    const donutPoints = fridge.donut >= 1 ? 1 : fridge.donut;
    const milkshakePoints = fridge.milkshake >= 1 ? 1 : fridge.milkshake;
    const snickerPoints = fridge.snicker >= 1 ? 1 : fridge.snicker;

    payload[fridge.id] = ramenPoints + pizzaPoints + donutPoints + milkshakePoints + snickerPoints;
  });

  store.dispatch({ type: 'ROUND_OVER', payload });
  store.dispatch({ type: 'OPEN_MODAL', modal: 'roundEnd' });
  store.dispatch({ type: 'CLEAR_GAME' });
  window.setTimeout(() => store.dispatch({ type: 'NEW_ROUND' }), 5000);
};

export const gameOver = (store) => {
  window.cancelAnimationFrame(window.test);
  delete window.test;

  const { fridges } = store.getState().game;
  const payload = {};

  Object.values(fridges).forEach((fridge) => {
    const ramenPoints = fridge.instantRamen >= 1 ? 1 : fridge.instantRamen;
    const pizzaPoints = fridge.pizza >= 1 ? 1 : fridge.pizza;
    const donutPoints = fridge.donut >= 1 ? 1 : fridge.donut;
    const milkshakePoints = fridge.milkshake >= 1 ? 1 : fridge.milkshake;
    const snickerPoints = fridge.snicker >= 1 ? 1 : fridge.snicker;

    payload[fridge.id] = ramenPoints + pizzaPoints + donutPoints + milkshakePoints + snickerPoints;
  });

  // store.dispatch({ type: 'ROUND_OVER', payload });
  store.dispatch({ type: 'GAME_OVER', payload });
  store.dispatch({ type: 'OPEN_MODAL', modal: 'gameEnd' });
  store.dispatch({ type: 'CLEAR_GAME' });
};
