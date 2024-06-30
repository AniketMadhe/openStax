var express = require('express');
var router = express.Router();
const userModel=require('./users')

/* GET home page. */
router.get("/",function(req,res){
  res.render("index");
})
router.get("/create",async function(req,res){
 const use=await userModel.create({
  username:"Aniket",
  name:"koffin",
  age:24
 });
 res.send(use);

})

module.exports = router;
