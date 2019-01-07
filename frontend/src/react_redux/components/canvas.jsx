import { connect } from 'react-redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Abilities from './gameOverlay/abilities';
import FoodPyramid from './gameOverlay/foodPyramid';
import Modal from './modal/modal';

// css
import '../../assets/css/overlay.scss';
import '../../assets/css/reset.scss';
import '../../assets/css/canvas.scss';
// import { debug } from 'util';

// const msp = state => ({
//   update: state.game.roundsCompleted,
// });

// const HEIGHT = `${window.innerHeight}px`;
// const WIDTH = `${window.innerWidth}px`;


class Canvas extends Component {
  componentDidMount() {}

  render() {
    const { isRoundOver } = this.props;
    if (isRoundOver) return null;

    return (
      <div className="canvas-container outer">
        <canvas
          className="main-canvas"
          id="canvas"
          height="800px"
          width="800px"
        />
        <Abilities />
        <FoodPyramid />
        <Modal />
      </div>
    );
  }
}


const mapStateToProps = ({ game }) => ({
  isRoundOver: game.isRoundOver,
});

export default connect(mapStateToProps, null)(Canvas);

