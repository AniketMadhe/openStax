var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/loginInfo");

const userSchema=mongoose.Schema({
  username:String,
  name:String,
  age:Number
});





module.exports = router;
module.exports = mongoose.model("userMode",userSchema);
