import { isCollided } from './util/util';

export default class GameCanvas {
  constructor(store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.totalOffsetX = 0;
    this.totalOffsetY = 0;
  }

  static getAllAssets({
    fridges, food, skills, crates,
  }) {
    return [
      ...Object.values(fridges),
      ...Object.values(food),
      ...Object.values(skills),
      ...Object.values(crates),
    ];
  }

  drawAsset(asset, allAssets) {
    if (!asset) return;

    const { physics, sprite, type } = asset;
    if (type === 'fridge') {
      this.ctx.save();
      if (sprite.isMove) {
        this.totalOffsetX += physics.dX();
        this.totalOffsetY += physics.dY();
        this.ctx.translate(physics.dX(), physics.dY());

        this.ctx.drawImage(
          sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
          20 - this.totalOffsetX, 20 - this.totalOffsetY, sprite.width, sprite.height,
        // physics.x, physics.y, sprite.width, sprite.height,
        );

        // physics.updatePos()
        // this.ctx.restore();
      } else {
        this.ctx.drawImage(
          sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
          20 - this.totalOffsetX, 20 - this.totalOffsetY, sprite.width, sprite.height,
        // physics.x, physics.y, sprite.width, sprite.height,
        );
        // this.ctx.restore();
      }

      // this.ctx.restore();
    } else {
      this.ctx.drawImage(
        sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
        physics.x - 2 * this.totalOffsetX, physics.y - 2 * this.totalOffsetY, sprite.width, sprite.height,
      );
    }

    for (let i = 0; i < allAssets.length; i += 1) {
      if (type === 'fridge' && type !== allAssets[i].type) {
        if (isCollided(asset, allAssets[i])) {
          console.log('collided');
          // resolveCollision(asset, allAssets[i]);
        }
      }
    }


    physics.updatePos();
    sprite.updateFrame();
  }

  draw(fps) {
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    const animate = () => {
      const assets = GameCanvas.getAllAssets(this.store.getState().game);

      requestAnimationFrame(animate);

      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        this.ctx.clearRect(0 - this.totalOffsetX, 0 - this.totalOffsetY, this.canvas.width, this.canvas.height);

        for (let i = 0; i < assets.length; i += 1) {
          this.drawAsset(assets[i], assets);
        }
      }
    };

    animate();
  }
}
