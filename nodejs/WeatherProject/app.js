const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=ffb067df9f8b29765b6f143f44f246b9&units=metric";
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log(temp);
      const description = weatherData.weather[0].description;
      console.log(description);

      res.send("<H1>Temp in Singapore " + temp + "</H1>");
    })
  })
})


app.listen(2000, function() {
  console.log("Server is running on port 2000.");
})
