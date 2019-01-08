const setupEmitters = (socket, store) => {
  document.addEventListener('keydown', ({ key, repeat }) => {
    if (repeat) return;

    socket.emit('keydown', { key });
  });
  document.addEventListener('keyup', ({ key, repeat }) => {
    if (repeat) return;

    socket.emit('keyup', { key });
  });

  store.subscribe(() => {
    const foodCount = Object.keys(store.getState().game.food).length;
    const skillCount = Object.keys(store.getState().game.skills).length;
    const totalCount = foodCount + skillCount;

    window.myTimeOuts[Date.now()] = window.setTimeout(() => {
      const foodCount2 = Object.keys(store.getState().game.food).length;
      const skillCount2 = Object.keys(store.getState().game.skills).length;
      const totalCount2 = foodCount2 + skillCount2;

      if (totalCount2 === totalCount && totalCount2 < 10 && totalCount2 !== 0) {
        socket.emit('needMoreAssets');
      }
    });
  }, 1000);
};

export default setupEmitters;
