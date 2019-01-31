import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';
import Canvas from './canvas';
import Lobby from './main/lobby';
import Demo from './demo';

import MainPageContainer from './main/main_page_container';

const App = () => (
  <div className="main">
    <Switch>
      <Route exact path="/lobby" component={Lobby} />
      <Route exact path="/game" component={Canvas} />
      <Route exact path="/demo" component={Demo}
      <Route path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;
