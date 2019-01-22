import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { func, bool, string } from 'prop-types';
import { AuthRoute } from '../../util/route_util';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

import './main_page.scss';

import { setupGameSockets } from '../../../game/sockets/sockets';

import logo from './logo.svg';

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
          {/* <Link className="main-page-link" to="/lobby">Lobby</Link> */}
          <Link className="main-page-link" to="/lobby"><button onClick={this.handleLobby}>Lobby</button></Link>
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

  handleLobby(e) {
    setupGameSockets(window.store);
  }

  handleDemo(e) {
    setupGameSockets(window.store);
    window.startGame();
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

          <div className="detail-header">
            <div className="instructions" />

            <Link to="/game"><button className="demo-button" onClick={this.handleDemo}>Demo!</button></Link>

          </div>

          <div className="details-div">
            <h2>What is Fridge Fest?</h2>
            <p>
Fridge Fest is an all out multiplayer game in which your objective is to help your fridge collect as much food as possible.
              The first fridge to collect the required amount of food each round wins that round, and each fridge is assigned points based
              on the kind and how much was collected. After 5 rounds, the points are tallied and a winner is declared.
            </p>

            <h2>The Fridge</h2>
            <p>
The fridge you control is mounted on treads, wearing a Hidden Leaf Village headband, and has a penchant for running with its
              arms flailing behind. It will also keep your food nice and cool.
            </p>
            <div className="fridge" />


            <h2>The Food</h2>
            <p>There are 5 varieties of food to collect. The amounts of each food you must collect vary, and can be kept track of using the Food Collection Board.</p>

            <div className="food-div">
              <div className="food main-pizza" />
              <div className="food main-donut" />
              <div className="food main-ramen" />
              <div className="food main-milkshake" />
              <div className="food main-chocolate" />
            </div>

            <h2>The Powerups</h2>
            <p>Your fridge can use 4 different powers during each round to either aid yourself or hinder your opponents.</p>

            <div className="powerup-div">
              <div className="main-fast" />
              <div className="main-teleport" />
              <div className="main-slow" />
              <div className="main-lightning" />
            </div>

            <h3>Best of luck in the Fridge Fest!</h3>
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
