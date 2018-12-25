import React from 'react';
import { Link } from 'react-router-dom';
import { func, bool } from 'prop-types';

import logo from './logo.svg';
import './main_page.css';

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
        <Link className="main-page-link" to="/login">Login</Link>
        <Link className="main-page-link" to="/signup">Signup</Link>
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
      <div className="main-page">
        <header className="main-page-header">
          <img src={logo} className="main-page-logo" alt="logo" />
          <p>Fridge Fest</p>

          {this.getLinks()}
        </header>
      </div>
    );
  }
}

MainPage.propTypes = {
  logout: func.isRequired,
  loggedIn: bool.isRequired,
};

export default MainPage;
