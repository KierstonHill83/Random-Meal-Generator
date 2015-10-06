app.controller('RandomMeals', function($scope, $http, recipeFactory) {

	$scope.addForm = false;
	$scope.loginForm = false;
	$scope.registerForm = false;
	$scope.randomMealForm = false;
	$scope.recipeInfo = false;
	$scope.personalPage = false;

	getResults = function(url) {
		recipeFactory.get(url)
		.then(function(response) {
			$scope.results = response.data;
			console.log($scope.results);
		});
	};

	getResults('/api/recipes');











		// var req = {
  //     method: 'POST',
  //     url: 'http://food2fork.com/api/search?key=',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   console.log(req);

    
  //   $http(req).success(function(data, status){

  //   	console.log(data)

  //   })
  //   .error(function(data, status){
  //   	console.log(arguments)
  //   });

// 	var config = {
//             headers: {'Content-Type': 'application/json'},
//         };

// 	var url = 'http://food2fork.com/api/search?key=&q=shredded%20chicken';

// $http.get(url, config)
//     .success(function(data){
//         console.log(data);
//     });

	// // using no factory
	// 	getResults = function(url) {
	// 	externalRecipeFactory.get(url)
	// 	.then(function(response) {
	// 		console.log(response)
	// 		// $scope.results = JSON.stringify(response.data);
	// 		// console.log($scope.results);
	// 	});
	// };

	// // using jsonp rather than get
	// getResults('http://food2fork.com/api/search?key=&q=shredded%20chicken?callback=JSON_CALLBACK');

});
