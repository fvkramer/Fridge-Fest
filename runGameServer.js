
let playerIds = [];


const runGameServer = (io) => (
  io.on('connection', socket => {

    playerIds.push(socket.id);
    
    console.log("User has connected");
    console.log(`id: ${socket.id}`);

    playerIds.push(socket.id);

    socket.on("startGame", () => io.sockets.emit("startGame", { playerIds }))
    

    socket.on('disconnect', () => {
      console.log("User has disconnected");
    })
  })
)


module.exports = {
  runGameServer
}