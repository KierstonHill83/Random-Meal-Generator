app.controller('RecipePuppy', ['$scope',
  '$http',
  function($scope, $http) {

    $scope.recipeTitle = '';
    $scope.recipeIngredients = '';
   
    $scope.getRecipePuppy = function() { 
      $http.get('/api/recipes/results/' + $scope.ingredients + '/' + $scope.query)
      // $http.get('/api/recipes/results/' + 'cheese' + '/' + 'enchiladas')
      .then(function(data) {
        $scope.recipeResults = data;
        $scope.recipeTitle = $scope.recipeResults.data[1].title;
        console.log($scope.recipeResults.data[1].title);
        $scope.recipeIngredients = $scope.recipeResults.data[1].ingredients;
        console.log($scope.recipeResults.data[1].ingredients);

      });
    };
     $scope.getRecipePuppy();
     return $scope.recipeTitle, $scope.recipeIngredients;
  }
]);