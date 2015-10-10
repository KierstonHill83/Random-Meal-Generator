var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipes.js');
var http = require('http');

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
			// if (response.json(output.results).length === 0) {
			// 	if (pages > 1) {
 		// 	  	recipePuppyService(ingredients, query, Math.floor((Math.random() * (pages -1) + 1))	, response);
 		// 	  }
			// }
			try {
			  var output = JSON.parse(body);
			  console.log("got a response: ", output.results);
				response.json(output.results);
			}
			catch(e) {
				if (pages > 1) {
 			  	recipePuppyService(ingredients, query, Math.floor((Math.random() * (pages -1) + 1))	, response);
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


module.exports = router;