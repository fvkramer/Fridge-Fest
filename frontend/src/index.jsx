import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';

import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import io from 'socket.io-client';
import Game from './game/game';

import './index.css';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  const { jwtToken } = localStorage;
  if (jwtToken) {
    setAuthToken(jwtToken);

    const decodedUser = jwtDecode(jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore();
  }

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'),
  );
  
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  var socket = io("localhost:5000");
  const game = new Game(ctx, socket);
  game.start(ctx);

});
