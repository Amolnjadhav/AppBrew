const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/manDB", { useUnifiedTopology: true, useNewUrlParser: true});

const manSchema = new mongoose.Schema ({
  name : String,
  Age : Number,
});

const Man=mongoose.model("man",manSchema);

const man=new Man ({
   Name: "john",
   age: 32
 });

man.save()
