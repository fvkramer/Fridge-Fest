class Physics {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
  }

  updatePos() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

class Sprite {
  constructor(image, sheetHeight, sheetWidth, rows, frameCount) {
    this.image = image;
    this.height = sheetHeight / rows;
    this.width = sheetWidth / frameCount;
    this.frameCount = frameCount;
    this.currentFrame = 0;
    this.isMoveLeft = false;
    this.isStop = true;
  }

  srcX() {
    return this.currentFrame * this.width;
  }

  srcY() {
    return this.isMoveLeft ? this.height : 0;
  }

  updateSprite(image, sheetHeight, sheetWidth, rows) {
    this.image = image;
    this.height = sheetHeight / rows;
    this.width = sheetWidth / frameCount;
  }

  updateFrame() {
    if (this.isStop) {
      this.updateSprite();
    } else {
      this.updateSprite();
    }

    this.currentFrame = (this.currentFrame + 1) % this.frameCount;
  }
}


module.exports = {
  Physics, 
  Sprite
}

