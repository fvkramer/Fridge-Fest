const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
