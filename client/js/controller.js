app.controller('RandomMeals', function($scope, httpFactory) {

	$scope.addForm = false;
	$scope.loginForm = false;
	$scope.registerForm = false;

	getResults = function(url) {
		httpFactory.jsonp(url)
		.then(function(response) {
			$scope.results = response.data;
			console.log($scope.results);
		});
	};

	// using jsonp rather than get

});