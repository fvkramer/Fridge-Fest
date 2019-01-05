const setupEmitters = (socket) => {
  document.addEventListener('keydown', ({ key, repeat }) => {
    if (repeat) return;

    socket.emit('keydown', { key });
  });
  document.addEventListener('keyup', ({ key, repeat }) => {
    if (repeat) return;

    socket.emit('keyup', { key });
  });
};


export default setupEmitters;
