import React, { Component } from 'react';

export default class canvas extends Component {
 
  render() {
    return (
      <canvas ref="canvas"
        height="900px"
        width="900px"
        style={{border: "1px solid black"}}
      ></canvas>
    )
  }
}


