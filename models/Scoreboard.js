const mongoose = require('mongoose');

const { Schema } = mongoose;

const ScoreboardSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const Scoreboard = mongoose.model('scoreboard', ScoreboardSchema);
module.exports = Scoreboard;
