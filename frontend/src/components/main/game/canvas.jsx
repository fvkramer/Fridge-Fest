import React, { Component } from 'react';
import io from "socket.io-client";

export default class canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const socket = io("http://localhost:5000");
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 900, 900);
    ctx.font = "40px Helvetica";
    ctx.fillText("Test", 200, 200);
  }

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

