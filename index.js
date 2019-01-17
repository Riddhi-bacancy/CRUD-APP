const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api',require('./Routers/api'));
app.use(function(err,req,res,next){
  //console.log(err);
  res.send({error:err.message})
})
app.listen(8585);