const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const { secretOrKey } = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const User = require('../../models/User');

const router = express.Router();

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
    return;
  }

  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        res.status(400).json({ username: 'Username taken' });
        return;
      }

      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (bcryptErr, hash) => {
          if (bcryptErr) throw bcryptErr;
          newUser.password = hash;
          newUser.save()
            .then((savedUser) => {
              const payload = { id: savedUser.id, username: savedUser.username };

              jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (jwtErr, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`,
                });
              });
            })
            .catch(anyErr => console.log(anyErr));
        });
      });
    });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
    return;
  }

  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.status(404).json({ username: 'Incorrect username' });
        return;
      }

      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            res.status(404).json({ password: 'Incorrect password' });
            return;
          }

          const payload = { id: user.id, username: user.username };

          jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          });
        });
    });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
  });
});


module.exports = router;
