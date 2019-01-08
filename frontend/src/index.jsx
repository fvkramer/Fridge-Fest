import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';

import Root from './react_redux/components/root';
import configureStore from './store/store';
import { setAuthToken } from './react_redux/util/session_api_util';
import { logout } from './react_redux/actions/session_actions';

// import { isRoundOver } from './game/util/util';

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

  window.store = store;

  // testing
  window.getState = store.getState;

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'),
  );
});
