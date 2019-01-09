import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { func, bool, string } from 'prop-types';

import { AuthRoute } from '../../util/route_util';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

import './main_page.scss';

class MainPage extends React.Component {
  constructor() {
    super();

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    const { loggedIn, username } = this.props;

    if (loggedIn) {
      return (
        <div className="main-page-link-container" style={{ width: '100%', marginLeft: '0px' }}>
          <p className="main-page-link" style={{ color: 'white' }}>{`Hello ${username}!`}</p>

          <Link className="main-page-link" to="/">Home</Link>
          <Link className="main-page-link" to="/lobby">Lobby</Link>
          <Link to="/" className="main-page-link" onClick={this.logoutUser}>Logout</Link>
        </div>
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

          <div className="ff-sign">
            <h1 className="fridge-fest-logo">Fridge Fest</h1>
          </div>

          <div className="details-div">
            <h2>What is Fridge Fest?</h2>
            <p>Fridge Fest is an all out multiplayer game in which your objective is to help your fridge collect as much food as possible.</p>
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  username: string.isRequired,
  logout: func.isRequired,
  loggedIn: bool.isRequired,
};

export default MainPage;
