const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const secretOrKey = require('../../config/keys').secretOrKey;
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/test', (req, res) => res.json({ msg: 'User has entered the game' }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email,
  });
});

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        return res.status(400).json({ username: 'Username taken' });
      }
      newUser = new User({
        username: req.body.username,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { username } = req.body;
  const { password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ username: 'Incorrect username' });
      }
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res.status(404).json({ password: 'Incorrect password' });
          }
          const payload = { id: user.id, username: user.username };

          jwt.sign(
            payload,
            secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`,
              });
            },
          );
        });
    });
});


module.exports = router;
