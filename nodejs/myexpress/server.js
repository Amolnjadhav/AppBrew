//jshint esversion:6
const express = require('express');

const bodyParser = require('body-parser');


const app = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());

app.get("/home",function(req,res){
  res.sendFile(__dirname + "/home.html");
});

app.get("/cal",function(req,res){
  res.sendFile(__dirname + "/Calcultor.html");
});

app.post("/cal",function(req,res){
  //console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  result = num1 + num2;
  res.send("Result is " + result);

});

app.listen(2000, function() {
    console.log("::Listening on port 2000::");
});
