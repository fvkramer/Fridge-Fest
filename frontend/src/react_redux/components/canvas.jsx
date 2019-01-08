import { connect } from 'react-redux';
import React, { Component } from 'react';
import Abilities from './gameOverlay/abilities';
import FoodPyramid from './gameOverlay/foodPyramid';
import Modal from './modal/modal';

// css
import '../../assets/css/overlay.scss';
import '../../assets/css/reset.scss';
import '../../assets/css/canvas.scss';
import '../../assets/css/abilities.scss';

// import { debug } from 'util';

// const msp = state => ({
//   update: state.game.roundsCompleted,
// });

// const HEIGHT = `${window.innerHeight}px`;
// const WIDTH = `${window.innerWidth}px`;


class Canvas extends Component {
  componentWillUnmount() {
    if (window.game) window.game = undefined;
    delete window.game;
    if (window.ctx) window.ctx = undefined;
    delete window.ctx;
    if (window.canvas) window.canvas = undefined;
    delete window.canvas;
  }

  render() {
    const { isRoundOver } = this.props;
    if (isRoundOver) return null;

    return (
      <div className="outer">

        <div className="abilities-div">
          <Abilities />
        </div>

        <div className="canvas-container inner">

          <canvas
            className="main-canvas"
            id="canvas"
            height="800px"
            width="800px"
          />
        </div>

        <div className="pyramid-div">
          <FoodPyramid />
        </div>

        <Modal />
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  isRoundOver: game.isRoundOver,
});

export default connect(mapStateToProps, null)(Canvas);
