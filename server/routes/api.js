var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipes.js');

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