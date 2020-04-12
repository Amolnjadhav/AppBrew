const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("Hello");
});

app.get("/about", function(request, response){
  response.send("Student At AppBreweydsdfsdf");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
