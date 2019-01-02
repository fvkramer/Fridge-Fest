import React, { Component } from 'react';
import Fridge from "../game/fridge";
import io from "socket.io-client";


export default class canvas extends Component {
  constructor() {
    super() 

    this.state = {
      SOCKET_LIST: [],
      PLAYER_LIST: []
    }
  }

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
   
    const player = new Fridge(1);
    const img = player.image;
    
    img.onload = () => {
      ctx.drawImage(img, player.x, player.y);
    }
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



