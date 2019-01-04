import React, { Component } from 'react';

export default class Canvas extends Component {
  render() {
    return (
      <canvas
        id="canvas"
        height="500px"
        width="500px"
        style={{ border: '1px solid black' }}
      />
    );
  }
}
