import { connect } from 'react-redux';
import React, { Component } from 'react';
import Abilities from './gameOverlay/abilities';
import FoodPyramid from './gameOverlay/foodPyramid';
import '../../assets/css/overlay.css';

// const HEIGHT = `${window.innerHeight}px`;
// const WIDTH = `${window.innerWidth}px`;

class Canvas extends Component {
  componentDidMount() {}


  render() {
    const { isRoundOver } = this.props;
    if (isRoundOver) return null;

    return (
      <div id="canvas-container">
        <canvas
          id="canvas"
          height="800px"
          width="800px"
          style={{ border: '1px solid black' }}
        />
        <Abilities />
        <FoodPyramid />
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  isRoundOver: game.isRoundOver,
});

export default connect(mapStateToProps, null)(Canvas);
