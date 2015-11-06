app.controller('RecipePuppy', ['$scope', '$http', '$location', 'AuthService', 'recipePuppyService', 
  function($scope, $http, $location, AuthService, recipePuppyService) {
   
 

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