const express = require("express");
const textController = require("../controller/textController.js");
const router = express.Router();

router.get("/jokereceh", textController.randomTextJoke);

module.exports = router;