app.controller('RandomMeals', function($scope, $http, recipeFactory, $timeout)  {

 //  $scope.findRecipe = "";

  // getResults = function(url) {
  //  recipeFactory.get(url)
  //  .then(function(response) {
  //    $scope.results = response.data;
  //    console.log($scope.results);
 //      console.log('inside getResults');
  //  });
  // };

  // getResults('/api/recipes');

  // $http.get('/api/recipes/done')
  //   .success(function(data) {
  //     $scope.recipes = data;
  //     console.log($scope.recipes);
  //   });
  

 //  $timeout(checkResult('/api/recipes/done'), 2000);

 //  function checkResult(url) {
 //    getResults(url);
 //    if ($scope.results == null) {
 //      $timeout(checkResult(url), 200000);
 //    } else {
 //      console.log('got final result');
 //      console.log($scope.results);
 //    }
 //  }
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