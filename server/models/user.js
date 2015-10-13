var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: String,
  password: String,
  city: String,
  email: String,
  allergies: [String],
  recipes: [{
    recipe: String,
    date: String
  }]
});

User.plugin(passportLocalMongoose);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mean-auth');

module.exports = mongoose.model('users', User);

// maybe add in an array for meals for the calendar??