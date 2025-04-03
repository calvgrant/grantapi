const express = require("express");
const glob = require("glob");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");

const BASE_URL = process.env.URL|| 'https://twaryapi.vercel.app';

//ratelimit
app.use(cors());
app.set("json spaces", 2);

//middleware
app.use(cookieParser())
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//base
const funRoutes = require("./src/router/index.js");
//routers
app.use("/fun", funRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    api_name: "TwaryAPI",
    author: "Kalrex",
    description:
      "Twary Api adalah api yang berisikan tentang hal random dari sebuha gambar anime sebuah joke gajelas dan hal lainnya yang ga berguna.",
    version: "v1.0.0",
    end_points: {
      "/fun/jokereceh": "Mendapatkan semua data candaan berupa teks",
      "/fun/gombal": "Mendapatkan satu data candaan berupa teks secara random",
    },
    repository: "https://github.com/calvgrant/TwaryAPI",
    email: "zarconxorp@gmail.com",
    social: {
      github: "https://github.com/calvgrant",
    },
  });
});

app.get('/grant', (req, res) => {
  return res.status(200).send({
    maintainer: 'Kalrex.',
    source: 'https://github.com/calvgrant',
  });
});

//errorhandler


//loadfiles
app.listen(process.env.PORT || 3000, function () {
  console.log(`[Running on port: 3000]`);
});
