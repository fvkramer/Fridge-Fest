const setupEmitters = (socket) => {
  document.addEventListener('keydown', ({ key, repeat }) => {
    if (repeat) return;

    const fridgeId = socket.id;
    socket.emit('keydown', { key, fridgeId });
  });
  document.addEventListener('keyup', ({ key, repeat }) => {
    if (repeat) return;

    const fridgeId = socket.id;
    socket.emit('keyup', { key, fridgeId });
  });
};


export default setupEmitters;
