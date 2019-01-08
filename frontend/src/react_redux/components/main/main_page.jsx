import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { func, bool } from 'prop-types';

import { AuthRoute } from '../../util/route_util';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

import logo from './logo.svg';
import './main_page.scss';

class MainPage extends React.Component {
  constructor() {
    super();

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    const { loggedIn } = this.props;

    if (loggedIn) {
      return (
        <>
          <p>LoggedIn as ...</p>
          <Link className="main-page-link" to="/" onClick={this.logoutUser}>Logout</Link>
        </>
      );
    }
    return (
      <>
        <div className="main-page-link-container">
          <Link className="main-page-link" to="/login">Login</Link>
          <Link className="main-page-link" to="/signup">Signup</Link>
        </div>
      </>
    );
  }

  logoutUser(e) {
    e.preventDefault();

    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <div className="main-div">
        <div className="main-header">
          <header className="main-page-header">

            {this.getLinks()}

            <Switch>
              <AuthRoute exact path="/login" component={LoginFormContainer} />
              <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>
          </header>
        </div>
        <div className="main-page">
            <h1>Fridge Fest</h1>
          
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  logout: func.isRequired,
  loggedIn: bool.isRequired,
};

export default MainPage;
