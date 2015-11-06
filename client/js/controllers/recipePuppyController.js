app.controller('RecipePuppy', ['$scope', '$http', '$location', 'AuthService', 
  function($scope, $http, $location, AuthService) {

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

  $scope.getList = function(list) {
    var listIngredients = list.split(',');
    console.log(listIngredients);
    $scope.newElement = '';
    for (var i = 0; i < listIngredients.length; i++) {
      $scope.newElement += '<li>' + listIngredients[i].trim() + '</li>';
    }
    angular.element(document.querySelector('#shopping-list')).append('<ul class="list-items">' + $scope.newElement + '</ul>');
  };


  $scope.getData = function() {
    recipePuppyService.getRecipePuppy($scope.ingredients, $scope.query).success(function(response){
      $scope.test = response;
    });
  };
  console.log($scope.test);


  $scope.login = function () {

    console.log('hi');

    // initial values
    $scope.error = false;
    $scope.disabled = true;

    // call login from service
    AuthService.login($scope.loginForm.username, $scope.loginForm.password)
      // handle success
      .then(function () {
        console.log('test');
        $location.path('/personal');
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