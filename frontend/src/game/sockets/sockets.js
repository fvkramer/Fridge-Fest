import io from 'socket.io-client';

import setupReceivers from './receivers';
import setupEmitters from './emitters';


// const socket = io('localhost:5000');
// const socket = io('localhost:5000');
window.socket = socket;
const socket = io(window.location.hostname);


export const setupGameSockets = (store) => {
  setupReceivers(socket, store);
  setupEmitters(socket);
};


// Manual Emmitters
export const startGame = () => {
  socket.emit('startGame');
};
window.startGame = startGame;
