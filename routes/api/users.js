const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const secretOrKey = require('../../config/keys').secretOrKey;

router.get("/test", (req, res) => res.json({msg: "User has entered the game"}))

router.post("/register", (req, res) => {
  User.findOne({username: req.body.username})
    .then( user => {
      if (user) {
        return res.status(400).json({username: "Username taken"})
      } else {
        newUser = new User({
          username: req.body.username,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          })
        })
      }
    })
})

router.post("/login", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  User.findOne({username})
    .then( user => {
      if (!user) {
        return res.status(404).json({username: "Incorrect username"});
      } else {

        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) {
              return res.status(404).json({password: "Incorrect password"});
            } else {
              
              const payload = {id: user.id, username: user.username}

              jwt.sign(
                payload,
                secretOrKey,
                {expiresIn: 3600},
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token 
                  });
                }
              )
              
            }
          })
      }
    })
})


module.exports = router;