import { isCollided } from './util/util';

export default class GameCanvas {
  constructor(store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
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

    this.ctx.drawImage(
      sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
      physics.x, physics.y, sprite.width, sprite.height,
    );

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

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < assets.length; i += 1) {
          this.drawAsset(assets[i], assets);
        }
      }
    };

    animate();
  }
}
