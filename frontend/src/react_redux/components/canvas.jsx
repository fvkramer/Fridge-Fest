import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bool } from 'prop-types';
import { Redirect } from 'react-router-dom';

import Abilities from './gameOverlay/abilities';
import FoodPyramid from './gameOverlay/foodPyramid';
import Modal from './modal/modal';

// css
import '../../assets/css/overlay.scss';
import '../../assets/css/reset.scss';
import '../../assets/css/canvas.scss';
import '../../assets/css/abilities.scss';
import '../../assets/css/modal.scss';

class Canvas extends Component {
  componentDidMount() {}

  render() {
    if (!window.socket) {
      return <Redirect to="/" />;
    }
    const { isRoundOver } = this.props;
    if (isRoundOver) {
      if (window.game) window.game = undefined;
      delete window.game;
      if (window.ctx) window.ctx = undefined;
      delete window.ctx;
      if (window.canvas) window.canvas = undefined;
      delete window.canvas;

      Object.keys(window.myTimeOuts).forEach((key) => {
        window.clearTimeout(window.myTimeOuts[key]);
      });

      return null;
    }
    return (
      <div className="outer">
        <Modal />
        <div className="abilities-div">
          <Abilities />
        </div>

        <div className="canvas-container inner">

          <canvas
            className="main-canvas"
            id="canvas"
            height="600px"
            width="800px"
          />
        </div>

        <div className="pyramid-div">
          <div className="pyramid-header">
            <p className="pyramid-text">Food Collected</p>
          </div>
          <FoodPyramid />
        </div>

        <audio src="/game/fridge-fest-loop.mp3" />
      </div>
    );
  }
}

Canvas.propTypes = {
  isRoundOver: bool.isRequired,
};

const mapStateToProps = ({ game }) => ({
  isRoundOver: game.isRoundOver,
});

export default connect(mapStateToProps, null)(Canvas);
