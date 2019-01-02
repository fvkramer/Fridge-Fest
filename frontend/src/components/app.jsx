import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Canvas from './canvas';
import Lobby from './main/lobby';

import MainPageContainer from './main/main_page_container';

const App = () => (
  <>
    <Switch>
      <Route path="/game" component={Canvas} />
      <Route path="/lobby" component={Lobby} />
      <AuthRoute path="/" component={MainPageContainer} />
    </Switch>
  </>
);

export default App;
