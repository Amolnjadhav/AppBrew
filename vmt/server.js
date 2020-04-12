const express = require("express");

const request = require('request');


const app = express();

app.get("/", function(request, response){
  request('http://www.google.com', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
}});

app.get("/about", function(request, response){
  response.send("Student At AppBreweydsdfsdf");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
