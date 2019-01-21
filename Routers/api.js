const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.post('/ninjas',function(req,res,next){
	  
	   Ninja.create(req.body).then(function(ninja){
	   	res.send(ninja);
	   }).catch(next);
	
		
});
router.put('/ninjas/Update',function(req,res,next){
	temp = {firstname : req.body.firstname };
	console.log(temp);
	console.log(req.body);
	   Ninja.findOneAndUpdate(temp,{$set : {firstname : req.body.firstname,lastname : req.body.lastname}}).then(function(ninja){
	   	res.send(ninja);
	   }).catch(next);
});
let temp;
router.delete('/ninjas/delete',function(req,res,next){
	console.log(req.body);
	   Ninja.remove(req.body).then(function(ninja){
	   	res.send(ninja);
	   }).catch(next);
})

router.get('/ninjas/Read',function(req,res,next){
	console.log(req.query.firstname);
	temp = {firstname : req.query.firstname,
	       lastname : req.query.lastname
	        };
	        console.log(temp);
	   Ninja.find(temp).then(function(ninja){
	   	res.send(ninja);
	   }).catch(next);
})

module.exports = router;