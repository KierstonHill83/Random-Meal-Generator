var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var User = require('../models/user');
var init = require('./init');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// serialize user into the session
init();

module.exports = passport;

//this is also in my app.js...do I need it both places?