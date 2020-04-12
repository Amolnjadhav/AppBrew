//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

var items=[];
app.use(express.static("public"));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");

var newitem="";

app.get("/", function(req,res) {

   var today=new Date();
   var currentday = today.getDay();
   console.log(currentday);
   if (currentday === 0 || currentday === 6) {
      day = "weekend"
    } else {
      day = "weekday"
    }
    res.render("list" , {kindOfDay: day, newlistitem: items} );
});

app.post("/",function(req,res) {
    newitem = req.body.item;
    items.push(newitem);
    res.redirect("/");

    //res.render("list" , {newitem: newitem});
    console.log(newitem);
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(2000, function(){
  console.log("Server is running on port 2000");
});
