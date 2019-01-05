import React, { Component } from 'react';
import Abilities from './gameOverlay/abilities';
import FoodPyramid from './gameOverlay/foodPyramid';
import '../../assets/css/overlay.css';

// const HEIGHT = `${window.innerHeight}px`;
// const WIDTH = `${window.innerWidth}px`;

export default class Canvas extends Component {
  componentDidMount() {}

  render() {
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
