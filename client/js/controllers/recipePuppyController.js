app.controller('RecipePuppy', ['$scope',
  '$http',
  function($scope, $http) {

    $scope.recipeTitle = '';
    $scope.recipeIngredients = '';
   
    $scope.getRecipePuppy = function() { 
      $http.get('/api/recipes/results/' + $scope.ingredients + '/' + $scope.query + '/' + '1')
      .then(function(data) {
        console.log(data.data.length);
        var randomArray = Math.floor(Math.random() * data.data.length);
        console.log(randomArray);
        console.log(data.data[randomArray]);
        
        $scope.recipeResults = data.data[randomArray];

      });
    };
     $scope.getRecipePuppy();
     return $scope.recipeTitle, $scope.recipeIngredients;
  }
]);