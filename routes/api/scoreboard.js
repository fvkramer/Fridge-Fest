const express = require('express');

const router = express.Router();
const Scoreboard = require('../../models/Scoreboard');

router.get('/test', (req, res) => res.json({ msg: 'on points api' }));

router.post('/post', (req, res) => {
  res.json(req.body);
});

module.exports = router;
