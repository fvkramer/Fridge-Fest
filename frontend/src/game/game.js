//draw onto canvas 

export default class Game {
  constructor(ctx, socket) {}

  // draw(fps, ctx) {
  //   const allPlayerIds = this.props;

  //   const fpsInterval = 1000 / fps;
  //   let then = performance.now();

  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     const now = performance.now();
  //     const elapsed = now - then;

  //     if (elapsed > fpsInterval) {
  //       then = now - (elapsed % fpsInterval);

  //       ctx.clearRect(0, 0, ctx.width, ctx.height);

  //       for (let i = 0; i < allPlayerIds.length; i += 1) {
  //         drawPlayer(allPlayerIds[i]);
  //       }
  //     }
  //   };

  //   animate();
  // }
}




// constructor() {
//   super()

//   this.state = {
//     socket_list: [],
//     player_list: []
//   }
// }


// componentDidMount() {
//   const canvas = this.refs.canvas;
//   const ctx = canvas.getContext("2d");
//   const socket = io("http://localhost:5000");
//   this.draw(30, ctx)
// }

// draw(ctx) {
//   ctx.clearRect(0, 0, 900, 900);
//   ctx.font = "40px Helvetica";
//   ctx.fillText("Test", 200, 200);

//   const player = new Fridge(1);
//   const img = player.image;

//   img.onload = () => {
//     ctx.drawImage(img, player.x, player.y);
//   }
// }