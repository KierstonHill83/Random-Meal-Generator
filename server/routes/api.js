var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipes.js');
var http = require('http');
var User = require('../models/user');

// GET ALL users
router.get('/users', function(req, res, next) {
  User.find({}, function(err, data) {
    if(err) {
    res.json({'ERROR': err});
    } else {
    res.json(data);
    }
  });
});

// GET single user
router.get('/user/:id', function(req, res, next) {
  name = {username: req.user.username};
  User.findOne(name, function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(data);
    }
  });
});


function recipePuppyService(ingredients, query, pages, response) {
  var url = 'http://www.recipepuppy.com/api/?i='+ingredients+'&q='+query+'&p='+pages;
  http.get(url, function(res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
      console.log("chunk = " + chunk);
    });
    res.on('end', function() {
      console.log("before output");
      try {
        var output = JSON.parse(body);
        console.log("got a response: ", output.results);
        response.json(output.results);
      }
      catch(e) {
        if (pages > 1) {
          recipePuppyService(ingredients, query, Math.floor((Math.random() * (pages -1) + 1)) , response);
        }
      }
    });
  }).on('error', function(e) {
    console.log('Got an error:', e);
  });
}


//Recipe data from recipepuppy
router.get('/recipes/results/:ingredients/:query/:pages', function(req, res, next) {
  var ingredients = req.params.ingredients;
  var query = req.params.query;
  var pages = Math.floor(Math.random() * 10 + 1);
  console.log("pages = " + pages);
  console.log(ingredients);
  recipePuppyService(ingredients, query, pages, res);
});


function weatherService(city, days, response) {
  var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=' + days+ '&APPID=';
  http.get(url, function(res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
      console.log("chunk = " + chunk);
    });
    res.on('end', function() {
      console.log("before output");
      try {
        var output = JSON.parse(body);
        console.log("got a response: ", output.list);
        response.json(output.list);
      }
      catch(e) {
        console.log(e);
      }
    });
  }).on('error', function(e) {
    console.log('Got an error:', e);
  });
}

// Weather data from openWeatherAPI
router.get('/recipes/weather/:city/:days', function(req, res, next) {
  var city = req.params.city;
  var days = req.params.days;
  console.log(city);
  weatherService(city, days, res);
});


// POST single user
// router.post('/users', function(req, res, next) {
//   var query = {username: req.user.username};
//   newRecipe = new Recipe({
//     title: req.body.title,
//     ingredients: req.body.ingredients,
//     directions: req.body.directions,
//     serves: req.body.serves
//   });
//   newRecipe.save(function(err, data) {
//     if(err) {
//       res.json({'ERROR': err});
//     } else {
//       res.json({'SUCCESS': data});
//     }
//   });
// });


// PUT/POST single recipe
router.post('/user/:id', function(req, res, next) {
  var name = {username: req.user.username};
  var update = {
    $push: {recipes:{
      title: req.body.title,
      ingredients: req.body.ingredients,
      url: req.body.url
    }}
  };
  User.findOneAndUpdate(name, update, function(err, data) {
    if(err) {
    res.json({'ERROR': err});
    } else {
    res.json({'UPDATED': data});
    }
  });
});


// DELETE one recipe
router.put('/users/:title/:id', function(req, res) {
  var info = {'username': req.params.title};
  var id = req.params.id;
  var options = {new: true};
  User.findOneAndUpdate(info,
    {$pull: {
      'recipes': {'_id': id}
    }
  }, options, function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': data});
    }
  });
});


// DELETE single user
router.delete('/user/:id', function(req, res, next) {
  User.findOneAndRemove(req.params.id, function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json({'REMOVED': data});
    }
  });
});


module.exports = router;