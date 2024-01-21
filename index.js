const express = require("express");
const glob = require("glob");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");

const BASE_URL = process.env.URL|| 'https://grantapi.cyclic.app';

const loadFiles = async () => {
  let files = glob.sync("./src/routes/*.js");
  files.forEach((route) => {
    const file = require(`${path.resolve(route)}`);
    app.use(`${file.endpoint}`, file.router);
  });
};

//ratelimit

//middleware
app.use(cookieParser())
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//base
const jokereceh = require("./router/index.js");
//routers
app.use("/v1/joke", jokereceh);

app.get('/', (req, res) => {
  return res.status(200).send({
    maintainer: 'Alvin N',
    team: 'Jombloers Team',
  });
});

app.get('/api', (req, res) => {
  return res.status(200).send({
    endpoint: {
      anime: {
      hug: `${BASE_URL}/anime/hug`,
      slap: `${BASE_URL}/anime/slap`,
      punch: `${BASE_URL}/anime/punch`
      },
      fun: {
      roast: `${BASE_URL}/fun/roast`,
      gombal: `${BASE_URL}/fun/gombal , Indonesian rizz words`,
      yomama: `${BASE_URL}/fun/yomama`
      },
    },
  });
});

app.get('/grant', (req, res) => {
  return res.status(200).send({
    maintainer: 'Calvin Grant',
    source: 'https://github.com/calvgrant',
  });
});

//errorhandler


//loadfiles
loadFiles();
app.listen(process.env.PORT || 3000, function () {
  console.log(`[Running on port: 3000]`);
});
