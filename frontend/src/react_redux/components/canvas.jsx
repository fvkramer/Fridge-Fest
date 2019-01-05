import React, { Component } from 'react';

// const HEIGHT = `${window.innerHeight}px`;
// const WIDTH = `${window.innerWidth}px`;

export default class Canvas extends Component {
  render() {
    return (
      <canvas
        id="canvas"
        height="800px"
        width="800px"
        style={{ border: '1px solid black' }}
      />
    );
  }
}
