//Controllers
// app.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

//  $scope.city = cityService.city;

//  $scope.$watch('city', function(){
//    cityService.city = $scope.city;
//  });

//  $scope.submit = function() {
//  	$location.path ('/forecast');
//  };

// }]);


app.controller('forecastController', ['$scope', '$location', '$resource', 'cityService', '$routeParams', function($scope, $location, $resource, cityService, $routeParams){
 $scope.city = cityService.city;
 $scope.days = $routeParams.days || '7';


 $scope.$watch('city', function(){
   cityService.city = $scope.city;
 });

 $scope.submit = function() {
 	$location.path('/forecast');
 };

 $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});

 $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city });

	$scope.convertToFahrenheit = function(degk) {
		return Math.round((1.8 * (degk - 273)) + 32);
	};

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	};

}]);