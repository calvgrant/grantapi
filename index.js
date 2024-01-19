const express = require("express");
const glob = require("glob");
const logger = require("morgan");
const path = require("path");
const app = express();
const cors = require("cors");
const config = require("../config");

const BASE_URL = process.env.URL|| '';

const loadFiles = async () => {
  let files = glob.sync("./src/routes/*.js");
  files.forEach((route) => {
    const file = require(`${path.resolve(route)}`);
    app.use(`/${file.endpoint}`, file.router);
  });
};

//ratelimit

//middleware

//routers

app.get('/', (req, res) => {
  return res.status(200).send({
    maintainer: 'Alvin N',
    source: 'not open yet',
    endpoint: {
      hug: `${BASE_URL}/anime/hug`,
      slap: `${BASE_URL}/anime/slap`,
      punch: `${BASE_URL}/anime/punch`,
      roast: `${BASE_URL}/fun/roast`,
      gombal: `${BASE_URL}/fun/gombal , Indonesian rizz words`,
      yomama: `${BASE_URL}/fun/yomama`,
      
    },
  });
});

app.get('/v1', (req, res) => {
  return res.status(200).send({
    maintainer: 'Alvin Nobel',
    source: 'https://github.com/ZarcDev21',
  });
});

//errorhandler


//loadfiles
loadFiles();
app.listen(process.env.PORT || 3000, function () {
  console.log(`[Running on port: 3000]`);
});
