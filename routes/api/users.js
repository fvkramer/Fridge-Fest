const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({msg: "User has entered the game"}))

module.exports = router;