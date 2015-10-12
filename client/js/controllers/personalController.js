app.controller('personalController', ['$scope', '$http', 'cityService', '$routeParams', '$location', 'AuthService', 
  function($scope, $http, cityService, $routeParams, $location, AuthService){

  $scope.logout = function () {

    console.log('test');

    // call logout from service
    AuthService.logout()
      .then(function () {
        $location.path('/');
      })
      .catch(function(){
        $location.path('/');
      });
  };

  $scope.city = '';
  
  $scope.getWeather = function() { 
    $http.get('/api/recipes/weather/' + $scope.city + '/' + '7')
    .then(function(data) {

      $scope.date = data.data[0].dt;
      $scope.dateResults = $scope.date * 1000;
     
      $scope.weather = data.data[0].temp.day;
      $scope.weatherResults = Math.round((1.8 * ($scope.weather - 273)) + 32);
    
    
    });
    return $scope.weatherResults;
  };
  $scope.getWeather();


  // $scope.convertToFahrenheit = function(degk) {
  //   return Math.round((1.8 * (degk - 273)) + 32);
  // };
 





}]);
