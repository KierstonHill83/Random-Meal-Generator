app.controller('personalController', ['$scope', 'recipeFactory', '$http', '$routeParams', '$location', 'cityService', 'AuthService', 
  function($scope, recipeFactory, $http, $routeParams, $location, cityService, AuthService){

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

  $scope.city = cityService.city;
  $scope.days = '7';

  $scope.$watch('city', function(){
   cityService.city = $scope.city;
  });

  
  $scope.getWeather = function() { 
    $http.get('/api/recipes/weather/' + $scope.city + '/' + $scope.days)
    .then(function(data) {

      $scope.date = data.data[0].dt;
      $scope.dateResults = $scope.date * 1000;
     
      $scope.weather = data.data[0].temp.day;
      $scope.weatherResults = Math.round((1.8 * ($scope.weather - 273)) + 32);

      $scope.date2 = data.data[1].dt;
      $scope.dateResults2 = $scope.date2 * 1000;
     
      $scope.weather2 = data.data[1].temp.day;
      $scope.weatherResults2 = Math.round((1.8 * ($scope.weather2 - 273)) + 32);

      $scope.date3 = data.data[2].dt;
      $scope.dateResults3 = $scope.date3 * 1000;
     
      $scope.weather3 = data.data[2].temp.day;
      $scope.weatherResults3 = Math.round((1.8 * ($scope.weather3 - 273)) + 32);

      $scope.date4 = data.data[3].dt;
      $scope.dateResults4 = $scope.date4 * 1000;
     
      $scope.weather4 = data.data[3].temp.day;
      $scope.weatherResults4 = Math.round((1.8 * ($scope.weather4 - 273)) + 32);

      $scope.date5 = data.data[4].dt;
      $scope.dateResults5 = $scope.date5 * 1000;
     
      $scope.weather5 = data.data[4].temp.day;
      $scope.weatherResults5 = Math.round((1.8 * ($scope.weather5 - 273)) + 32);

      $scope.date6 = data.data[5].dt;
      $scope.dateResults6 = $scope.date6 * 1000;
     
      $scope.weather6 = data.data[5].temp.day;
      $scope.weatherResults6 = Math.round((1.8 * ($scope.weather6 - 273)) + 32);

      $scope.date7 = data.data[6].dt;
      $scope.dateResults7 = $scope.date7 * 1000;
     
      $scope.weather7 = data.data[6].temp.day;
      $scope.weatherResults7 = Math.round((1.8 * ($scope.weather7 - 273)) + 32);
    
    });
 
  };
  $scope.getWeather();

  $scope.myInterval = 90000000;

 // $scope.postRecipe = function(){

  var recipes = [];
//   for (var i = 0; i < $scope.recipeResults.length; i++) {
//     recipes.push(
//     {
//       title: $scope.recipes[i].title,
//       description: $scope.recipes[i].description,
//       url: $scope.recipes[i].url
//     });
//   }
//   console.log(recipes);
//   var payload = {
//     "username": $scope.currentUser,
//     "title": $scope.title,
//     "description": $scope.description,
//     "url": $scope.url,
//   };
//   recipeFactory.post('/api/users', payload)
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(){
//     console.log('error');

//   });
// };

$scope.postRecipe = function() {
    var payload = $scope.project;
    httpFactory.post('/api/users', payload)
    .then(function(response) {
      console.log(response);
      $scope.recipes.push(response.data);
      
    });
  };
  

}]);



