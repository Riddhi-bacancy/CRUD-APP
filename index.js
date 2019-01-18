const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
var path = __dirname + "/views/";
const app = express();
app.use("/views",express.static(__dirname + "/views"));
app.use("/js",express.static(__dirname + "/public/"));

mongoose.connect('mongodb://localhost/API');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.get("/",function(req,res){
	res.sendFile(path + "index1.html");
});
app.use('/api',require('./Routers/api'));
/*app.use(function(err,req,res,next){
  //console.log(err);
  res.send({error:err.message})
})*/
app.listen(8585);