app.controller('personalController', ['$scope', 'cityService', '$routeParams', '$location', 'AuthService', 
  function($scope, cityService, $routeParams, $location, AuthService){

  $scope.logout = function () {

    console.log('test')

    // call logout from service
    AuthService.logout()
      .then(function () {
        $location.path('/');
      })
      .catch(function(){
        $location.path('/');
      });
  };
}]);