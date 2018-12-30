import io from "socket.io-client";

export default class Fridge {
  constructor(id) {
    const socket = io("http://localhost:5000");
    this.x = 250;
    this.y = 250;
    this.id = id;
    this.image = new Image();
    this.image.src = require('../assets/images/fridge.png');
    this.image.width = "200";
    this.image.height = "200";
    this.pressingRight = false;
    this.pressingLeft = false;
    this.pressingUp = false;
    this.pressingDown = false;
    this.maxSpd = 10;

    this.updatePosition = this.updatePosition.bind(this);
  }

  updatePosition() {
    if (this.pressingRight) {
      this.x += this.maxSpd;
    }
    if (this.pressingLeft) {
      this.x -= this.maxSpd;
    }
    if (this.pressingUp) {
      this.y -= this.maxSpd;
    }
    if (this.pressingDown) {
      this.y += this.maxSpd;
    }
  }
}