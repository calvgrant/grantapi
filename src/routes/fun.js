const { Router } = require("express");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const route = Router();
const papkitsu = require("../assets/json/papkitsu.json");
const roast = require("../assets/json/roast.json");
const gombal = require("../assets/json/gombal.json");
const yomama = require("../assets/json/yomama.json");


 route.get("/papkitsu", (req, res) => {
  return res.json({
    pap: papkitsu[Math.floor(Math.random() * papkitsu.length)],
  });
});


route.get("/roast", (req, res) => {
  return res.json({
    roast: roast[Math.floor(Math.random() * roast.length)],
  });
});


route.get("/gombal", (req, res) => {
  return res.json({
    kata: gombal[Math.floor(Math.random() * gombal.length)],
  });
});


route.get("/yomama", (req, res) => {
  return res.json({
    yomama: yomama[Math.floor(Math.random() * yomama.length)],
  });
});

     
module.exports = {
  endpoint: "/fun",
  router: route,
};
