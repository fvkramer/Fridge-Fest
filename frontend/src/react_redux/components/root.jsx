import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { instanceOf } from 'prop-types';

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

Root.propTypes = {
  store: instanceOf(Object).isRequired,
};

export default Root;
