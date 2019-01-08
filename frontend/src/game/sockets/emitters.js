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

    if (foodCount + skillCount === 0) {
      socket.emit('needMoreAssets');
    }
  });
};

export default setupEmitters;
