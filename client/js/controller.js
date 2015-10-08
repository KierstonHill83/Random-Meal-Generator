app.controller('myMealController', function($scope) {

  $scope.addForm = false;
  $scope.randomMealForm = false;
  $scope.recipeInfo = false;

  $scope.loginTemplate = false;
  $scope.setLoginTemplate = function(isHidden) {
    $scope.loginTemplate = isHidden;
  };

  $scope.homePage = false;
  $scope.setHomePage = function(isHidden) {
    $scope.homePage = isHidden;
  };

  $scope.registerTemplate = false;
  $scope.setRegisterTemplate = function(isHidden) {
    $scope.registerTemplate = isHidden;
  };

  $scope.personalPage = false;
  $scope.setPersonalPage = function(isHidden) {
    $scope.personalPage = isHidden;
  };

});


app.controller('RandomMeals', function($scope, $http, recipeFactory) {

  $scope.findRecipe = "";

	getResults = function(url) {
		recipeFactory.get(url)
		.then(function(response) {
			$scope.results = response.data;
			console.log($scope.results);
		});
	};

	getResults('/api/recipes');

  // $scope.postRecipe = function() {
  //   var payload = $scope.project;
  //   recipeFactory.post('/api/recipes', payload)
  //   .then(function(response) {
  //     console.log(response);
  //     $scope.recipes.push(response.data);
  //     $scope.project = {};
  //   });
  // };

  // $scope.editRecipe = function(id) {
  //   $scope.findRecipe = '/api/recipe/' + id;
  //   recipeFactory.get($scope.findRecipe)
  //   .then(function(response) {
  //     console.log(response);
  //     getRecipes('/api/recipes');
  //     $scpe.recipe = {};
  //   });
  // };

  // $scope.updateRecipe = function() {
  //   var update = $scope.recipe;
  //   recipeFactory.put($scope.findRecipe, update)
  //   .then(function(response) {
  //     console.log(response);
  //     getRecipes('/api/recipes');
  //     $scope.recipe = {};
  //   });
  // };

  // $scope.remoteRecipe = function(id) {
  //   $scope.findRecipe = '/api/recipe/' + id;
  //   recipeFactory.delete($scope.findRecipe)
  //   .then(function(response) {
  //     console.log(response);
  //     getRecipes('/api/recipes');
  //   });
  // };

});


app.controller('loginController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    console.log(AuthService.getUserStatus());

    $scope.login = function () {
      console.log('test');

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };

}]);

app.controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {

      console.log(AuthService.getUserStatus());

      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/');
        });

    };

}]);

app.controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.addForm = false;
    $scope.loginTemplate = false;
    $scope.registerTemplate = false;
    $scope.randomMealForm = false;
    $scope.recipeInfo = false;
    $scope.personalPage = false;

    console.log(AuthService.getUserStatus());

    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);


