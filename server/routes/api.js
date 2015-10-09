var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipes.js');
var http = require('http');
var User = require('../models/user.js');

// GET ALL recipes
router.get('/recipes', function(req, res, next) {
	Recipe.find({}, function(err, data) {
		if(err) {
		res.json({'ERROR': err});
		} else {
		res.json(data);
		}
	});
});

// GET single recipe
router.get('/recipe/:id', function(req, res, next) {
	Recipe.findById(req.params.id, function(err, data) {
		if(err) {
			res.json({'ERROR': err});
		} else {
			res.json(data);
		}
	});
});


function recipePuppyService(ingredients, query, response) {
	var url = 'http://www.recipepuppy.com/api/?i='+ingredients+'&q='+query;
	http.get(url, function(res) {
		var body = "";
		res.on('data', function(chunk) {
			body += chunk;
		});
		res.on('end', function() {
			var output = JSON.parse(body);
			console.log("got a response: ", output.results);
			recipeData = output.results;
			response.json(recipeData);
		});
	}).on('error', function(e) {
		console.log('Got an error:', e);
	});
}


//Recipe data from recipepuppy
router.get('/recipes/results/:ingredients/:query', function(req, res, next) {
	var ingredients = req.params.ingredients;
	var query = req.params.query;
	console.log(ingredients);
	recipePuppyService(ingredients, query, res);
});

// Recipe data from food2fork
// function foodForkService(query) {
// 	var url = 'http://food2fork.com/api/search?key='+key+'&q='+query;
// 	http.get(url, function(res) {
// 		var body = "";
// 		res.on('data', function(chunk) {
// 			body += chunk;
// 		});
// 		res.on('end', function() {
// 			var output = JSON.parse(body);
// 			console.log("got a response: ", output);
// 		});
// 	}).on('error', function(e) {
// 		console.log('Got an error:', e);
// 	});
// }
// console.log(foodForkService('cake'));

// POST ALL recipes
router.post('/recipes', function(req, res, next) {
	newRecipe = new Recipe({
		title: req.body.title,
		ingredients: req.body.ingredients,
		directions: req.body.directions,
		serves: req.body.serves
	});
	newRecipe.save(function(err, data) {
		if(err) {
			res.json({'ERROR': err});
		} else {
			res.json({'SUCCESS': data});
		}
	});
});

// PUT single recipe
router.put('/recipe/:id', function(req, res, next) {
	Recipe.findById(req.params.id, function(err, data) {
		recipe.title = req.body.title;
		recipe.ingredients = req.body.ingredients;
		recipe.directions = req.body.directions;
		recipe.serves = req.body.serves;
		project.save(function(err) {
			if(err) {
			res.json({'ERROR': err});
			} else {
			res.json({'UPDATED': data});
			}
		});
	});
});


// DELETE single recipe
router.delete('/recipe/:id', function(req, res, next) {
	Recipe.findByIdAndRemove(req.params.id, function(err, data) {
		if(err) {
			res.json({'ERROR': err});
		} else {
			res.json({'REMOVED': data});
		}
	});
});

// POST reigster a user
router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err});
    }
    passport.authenticate('local')(req, res, function () {
    	console.log('register');
      return res.status(200).json({status: 'Registration successful!'});
    });
  });
});

// POST login a user
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(500).json({err: err});
    }
    if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in user'});
      }
      res.status(200).json({status: 'Login successful!'});
    });
  })(req, res, next);
});

// GET logout a user
router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({status: 'Bye!'});
});

module.exports = router;