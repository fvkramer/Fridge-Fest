import { isCollided, isRoundOver } from './util/util';

export default class GameCanvas {
  constructor(socket, store, canvas, ctx) {
    this.socket = socket;
    this.playerId = socket.id;
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.totalOffsetX = 0;
    this.totalOffsetY = 0;
  }

  static getAllAssets({
    fridges, food, skills, crates, background,
  }) {
    return [
      ...Object.values(background),
      ...Object.values(fridges),
      ...Object.values(food),
      ...Object.values(skills),
      ...Object.values(crates),
    ];
  }

  checkCollision(fridge, allAssets) {
    for (let i = 0; i < allAssets.length; i += 1) {
      if (allAssets[i].type !== 'fridge') {
        if (isCollided(fridge, allAssets[i])) {
          this.socket.emit(
            'collisionDetected',
            { fridgeId: fridge.id, assetId: allAssets[i].id },
          );
        }
      }
    }
    if (isRoundOver(this.store, this.socket.id)) {
      // cancelAnimationFrame(window.animationId);
      this.socket.emit('roundOver');
    }
  }

  drawAsset(asset) {
    if (!asset) return;

    const { physics, sprite, type } = asset;

    if (type === 'fridge' && asset.id === this.playerId) {
      if (sprite.isMove || sprite.isTeleport) {
        sprite.isTeleport = false;

        this.totalOffsetX += physics.dX();
        this.totalOffsetY += physics.dY();
        this.ctx.translate(physics.dX(), physics.dY());
      }

      this.ctx.drawImage(
        sprite.image, sprite.srcX(), sprite.srcY(), sprite.width, sprite.height,
        150 - 1 * this.totalOffsetX, 150 - 1 * this.totalOffsetY, sprite.width, sprite.height,
      );
    } else {
      this.ctx.drawImage(
        sprite.image, sprite.srcX(), sprite.srcY(),
        sprite.width, sprite.height,
        physics.x - 2 * this.totalOffsetX, physics.y - 2 * this.totalOffsetY,
        sprite.width, sprite.height,
      );
    }

    physics.updatePos();
    sprite.updateFrame();
  }

  draw(fps) {
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    const animate = () => {
      const assets = GameCanvas.getAllAssets(this.store.getState().game);

      const animationId = requestAnimationFrame(animate);
      window.animationId = animationId;


      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        this.ctx.clearRect(
          0 - this.totalOffsetX, 0 - this.totalOffsetY,
          this.canvas.width, this.canvas.height,
        );

        for (let i = 0; i < assets.length; i += 1) {
          this.drawAsset(assets[i]);
          if (assets[i].type === 'fridge') this.checkCollision(assets[i], assets);
        }
      }
    };

    animate();
  }
}
