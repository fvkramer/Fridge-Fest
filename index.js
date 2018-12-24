const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;

const app = express();
const port = process.env.PORT || 5000;
mongoose
  .connect( db, { useNewUrlParser: true } )
  .then( () => console.log("Successfully connected to mongoDB"))
  .catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hello world!"));

app.listen(port, () => console.log(`Server is running on port ${port}`));