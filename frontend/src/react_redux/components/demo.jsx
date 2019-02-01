import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setupGameSockets } from '../../game/sockets/sockets';

import '../../assets/css/demo.scss';

export default class Demo extends Component {
  handleGame(e) {
    setupGameSockets(window.store);
    window.startGame();
  }

  render() {
    return (
      <div className="demo-div">

        <h1 className="demo-title">Demo Video</h1>

        <iframe className="vid" width="645" height="400" src="https://www.youtube.com/embed/UXHIhfwP4Iw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

        <div className="options">
          <Link to="/"><button className="home-button">Home</button></Link>
          <Link to="/game"><button className="home-button" onClick={this.handleGame}>Play</button></Link>
        </div>

      </div>
    );
  }
}
