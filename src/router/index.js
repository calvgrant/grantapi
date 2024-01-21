const express = require("express");
const textController = require("../controller/textController.js");
const images = require("../controller/images.js");
const router = express.Router();

router.get("/jokereceh", textController.randomTextJoke);

router.get("/gay", images.gay);

module.exports = router;