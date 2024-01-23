const express = require("express");
const textController = require("../controller/textController.js");
const RandomPap = require("../controller/papkitsu.js");
const RandomGombal = require("../controller/gombal.js");
const RandomQuoteid = require("../controller/quoteid.js");
const router = express.Router();

router.get("/jokereceh", textController.randomTextJoke);
router.get("/papkitsu", RandomPap.randomPap);
router.get("/gombal", RandomGombal.randomGombal);
router.get("/quoteid", RandomQuoteid.randomQuoteid);

module.exports = router;  