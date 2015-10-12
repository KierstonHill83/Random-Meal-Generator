app.controller('RecipePuppy', ['$scope', '$http', function($scope, $http) {

    // $scope.recipeTitle = '';
    // $scope.recipeIngredients = '';
   
  $scope.getRecipePuppy = function() { 
    $http.get('/api/recipes/results/' + $scope.ingredients + '/' + $scope.query + '/' + '1')
    .then(function(data) {
      console.log(data.data.length);
      var randomArray = Math.floor(Math.random() * data.data.length);
      console.log(randomArray);
      console.log(data.data[randomArray]);
      
      $scope.recipeResults = data.data[randomArray];
      console.log($scope.recipeResults);
      console.log($scope.getList($scope.recipeResults.ingredients));
    });
  };
  $scope.getRecipePuppy();
     // return $scope.recipeTitle, $scope.recipeIngredients;

  $scope.getList = function(list) {
    var listIngredients = list.split(',');
    console.log(listIngredients);
    $scope.newElement = '';
    for (var i = 0; i < listIngredients.length; i++) {
      $scope.newElement += '<li>' + listIngredients[i].trim() + '</li>';
    }
    angular.element(document.querySelector('#shopping-list')).append('<ul class="list-items">' + $scope.newElement + '</ul>');
    //$scope.newElement.append('#shopping-list');
  };
 
  
}]);

  

        
        