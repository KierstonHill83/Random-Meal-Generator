var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	username: String,
	password: String
});

User.plugin(passportLocalMongoose);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/node-recipe');

module.exports = mongoose.model('users', User);