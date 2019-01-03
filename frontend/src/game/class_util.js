export class Physics {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dLeft = 0;
    this.dRight = 0;
    this.dUp = 0;
    this.dDown = 0;
  }

  dX() {
    return -this.dLeft + this.dRight;
  }

  dY() {
    return -this.dUp + this.dDown;
  }

  updatePos() {
    this.x += this.dX();
    this.y += this.dY();
  }
}

export class Sprite {
  constructor(image, sheetHeight, sheetWidth, rows, frameCount) {
    this.image = image;
    this.height = sheetHeight / rows;
    this.width = sheetWidth / frameCount;
    this.frameCount = frameCount;
    this.currentFrame = 0;
    this.isMoveLeft = false;
    // this.isStop = true;
  }

  srcX() {
    return this.currentFrame * this.width;
  }

  srcY() {
    return this.isMoveLeft ? this.height : 0;
  }

  updateSprite(newSprite) {
    const {
      image, sheetHeight, sheetWidth, rows, frameCount,
    } = newSprite;

    this.image = image;
    this.height = sheetHeight / rows;
    this.width = sheetWidth / frameCount;
    this.frameCount = frameCount;
  }

  updateFrame() {
    this.currentFrame = (this.currentFrame + 1) % this.frameCount;
  }
}
