const express = require("express");
const glob = require("glob");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");

const BASE_URL = process.env.URL|| 'https://grantapi.cyclic.app';

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
const jokereceh = require("./src/router/index.js");
const papkitsu = require("./src/router/index.js")
const gombal = require("./src/router/index.js")
//routers
app.use("/fun", jokereceh);
app.use("/fun", papkitsu);
app.use("/fun", gombal);

app.get("/", (req, res) => {
  res.status(200).json({
    api_name: "grantapi",
    author: "calvgrant",
    description:
      "Grant Api adalah api yang berisikan tentang hal random dari sebuha gambar anime sebuah joke gajelas dan hal lainnya yang ga berguna.",
    version: "v1.0.0",
    end_points: {
      "/fun/jokereceh": "Mendapatkan semua data candaan berupa teks",
      "/fun/gombal": "Mendapatkan satu data candaan berupa teks secara random",
    },
    repository: "https://github.com/calvgrant/grantapi",
    email: "alvintungga17@gmail.com",
    social: {
      github: "https://github.com/calvgrant",
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
app.listen(process.env.PORT || 3000, function () {
  console.log(`[Running on port: 3000]`);
});
