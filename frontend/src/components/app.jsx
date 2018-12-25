import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import MainPageContainer from './main/main_page_container';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </>
);

export default App;
