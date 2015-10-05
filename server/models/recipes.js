var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Recipe = new Schema({
	title: String,
	ingredients: String,
	directions: String,
	serves: Number
});

// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/node-recipe');

module.exports = mongoose.model('recipes', Recipe);