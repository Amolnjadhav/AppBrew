const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

  app.post("/index.html", function(req, res) {
  const url = "https://api.kanye.rest";
  https.get(url, function(response) {
  console.log(response.statusCode);
  response.on("data", function(data) {
  const Q = JSON.parse(data);
  Result = Q.quote
  console.log(Result);
            //res.send("<H1>"+ Result  + "</H1>");
  //          res.write("<button type=submit name=button>Quoteoftheday</button>");
  //          res.write("<p id=quote>" + Result + "</p>");
            res.end();
            //  res.redirect("/");
          });
        });
      });

  app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  });

  app.get("/index.js ", function(req, res) {
  res.sendFile(__dirname + "/index.js");
  });

  app.get("/server.js", function(req, res) {
  res.sendFile(__dirname + "/server.js");
  });
      app.listen("2000", function() {
        console.log("Server listening on port 2000");
      });
