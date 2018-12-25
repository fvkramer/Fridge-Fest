import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import MainPageContainer from './main/main_page_container';

const App = () => (
  <>
    <Switch>
      <AuthRoute path="/" component={MainPageContainer} />
    </Switch>
  </>
);

export default App;
