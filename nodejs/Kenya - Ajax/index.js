const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const superheroes = require('superheroes');
const supervillains = require('supervillains');

const app = express();

app.use(express.static("public"));

app.post("/kanye", function(req, res) {
  const url = "https://api.kanye.rest";
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const Q = JSON.parse(data);
      Result = Q.quote
      res.send(Result);
      //res.send("<H1>"+ Result  + "</H1>");
      //res.write("<button type=submit name=button>Quoteoftheday</button>");
      //res.write("<p id=quote>" + Result + "</p>");
      res.end();
    });
  });
});

app.post("/quotes", function(req, res) {
  const url = "https://quotes.rest/qod?language=en";
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const Q = JSON.parse(data);
      Result = Q.contents.quotes[0].quote;
      res.send(Result);
      res.end();
    });
  });
});

app.post("/superheros", function(req, res) {
  const superhero = superheroes.random();
  console.log(superhero);
  res.send(superhero);
  res.end();
});


app.post("/supervillen", function(req, res) {
  const supervillain = supervillains.random();
  console.log(supervillain);
  res.send(supervillain);
  res.end();
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.get("/index.js", function(req, res) {
  res.sendFile(__dirname + "/index.js");
});

app.listen("2000", function() {
  console.log("Server listening on port 2000");
});
