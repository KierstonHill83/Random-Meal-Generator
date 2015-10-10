app.controller('RecipePuppy', ['$scope',
  '$http',
  function($scope, $http) {

    $scope.recipeTitle = '';
    $scope.recipeIngredients = '';
   
    $scope.getRecipePuppy = function() { 
      $http.get('/api/recipes/results/' + $scope.ingredients + '/' + $scope.query + '/' + '1')
      // $http.get('/api/recipes/results/' + 'cheese' + '/' + 'enchiladas')
      .then(function(data) {
        console.log(data.data);
        console.log(data.data.length);
        var randomArray = Math.floor(Math.random() * data.data.length);
        console.log(randomArray);
        console.log(data.data[randomArray]);
        console.log(data.data[randomArray].title);
        $scope.recipeResults = data.data[randomArray];
        // $scope.recipeTitle = $scope.recipeResults.data[1].title;
        // console.log($scope.recipeResults.data[1].title);
        // $scope.recipeIngredients = $scope.recipeResults.data[1].ingredients;
        // console.log($scope.recipeResults.data[1].ingredients);
        // console.log($scope.recipeResults[$scope.randomArray]);

      });
    };
     $scope.getRecipePuppy();
     return $scope.recipeTitle, $scope.recipeIngredients;
  }
]);