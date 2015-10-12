var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

// This is just telling the server to serve up the static file from your client side. This can also be done in app.js. Rather than using swig or jade.

// router.get('/', function(req, res) {
//  res.sendFile(path.join(__dirname, '../client', 'index.html'));
// });

module.exports = router;
