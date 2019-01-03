import React, { Component } from 'react';

export default class Canvas extends Component {
  render() {
    return (
      <canvas
        id="canvas"
        height="900px"
        width="900px"
        style={{ border: '1px solid black' }}
      />
    );
  }
}
