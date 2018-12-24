const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");

const users = require('./routes/api/users');

const app = express();
const port = process.env.PORT || 5000;
mongoose
  .connect( db, { useNewUrlParser: true } )
  .then( () => console.log("Successfully connected to mongoDB"))
  .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Fridge Fest is Live!"));
app.use('/api/users', users);

app.listen(port, () => console.log(`Server is running on port ${port}`));