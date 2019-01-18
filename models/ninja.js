const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ninjaschema = new Schema({
	firstname:{
      type:String
	},
	lastname:{
		type:String

	}
});
const Ninja = mongoose.model('ninja',ninjaschema);
module.exports = Ninja;