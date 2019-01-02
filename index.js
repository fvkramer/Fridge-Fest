const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();
const httpServer = require("http").Server(app)
const io = require("socket.io")(httpServer);

io.on('connection', socket => {
  console.log("User has connected");
  console.log(`id: ${socket.id}`);
  socket.on('disconnect', () => {
    console.log("User has disconnected");
  })
})

const port = process.env.PORT || 5000;
httpServer.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
  .connect( db, { useNewUrlParser: true } )
  .then( () => console.log("Successfully connected to mongoDB"))
  .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Fridge Fest is Live!"));
app.use(passport.initialize());
require('./config/passport')(passport);
app.use('/api/users', users);
