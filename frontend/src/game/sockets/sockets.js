import io from 'socket.io-client';

import setupReceivers from './receivers';
import setupEmitters from './emitters';

const socket = io('localhost:5000');

export const setupGameSockets = (store) => {
  setupReceivers(socket, store);
  setupEmitters(socket);
};


// Manual Emmitters
export const startGame = () => {
  socket.emit('startGame');
};
window.startGame = startGame;
