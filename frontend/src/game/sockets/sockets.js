import io from 'socket.io-client';

import setupReceivers from './receivers';
import setupEmitters from './emitters';

export const setupGameSockets = (store) => {
  const socket = io(window.location.hostname);
  // const socket = io('localhost:5000');
  window.socket = socket;
  setupReceivers(socket, store);
  setupEmitters(socket);
};

// Manual Emmitters
export const startGame = () => {
  window.socket.emit('startGame');
};
window.startGame = startGame;
