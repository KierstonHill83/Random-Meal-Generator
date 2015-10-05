process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var server = require('../server/app');
var Recipe = require('../server/models/recipes');

var should = chai.should();
chai.use(chaiHttp);


describe('Recipes', function() {
	Recipe.collection.drop();

	beforeEach(function(done) {
		var newRecipe = new Recipe ({
			title: 'Pancakes',
			ingredients: 'Milk, Oil, Flour',
			directions: 'Mix together, bake for 30 minutes'
		});
		newRecipe.save(function(err) {
			done();
		});
	});
	afterEach(function(done) {
		Recipe.collection.drop();
		done();
	});


	it('should list ALL recipes on /recipes GET', function(done) {
		chai.request(server)
			.get('/api/recipes')
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('array');
				res.body[0].should.have.property('_id');
				res.body[0].should.have.property('title');
				res.body[0].should.have.property('ingredients');
				res.body[0].should.have.property('directions');
				res.body[0].title.should.equal('Pancakes');
				res.body[0].ingredients.should.equal('Milk, Oil, Flour');
				res.body[0].directions.should.equal('Mix together, bake for 30 minutes');
				done();
			});
	});

	it('should list a SINGLE recipe on /recipe/<id> GET')
	it('should add a SINGLE recipe on /recipes POST')
	it('should update a SINGLE recipe on /recipe/<id> PUT')
	it('should delete a SINGLE recipe on /recipe/<id> DELETE')



});