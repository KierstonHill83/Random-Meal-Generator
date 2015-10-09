var app = angular.module('mealGenerator', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../views/index.html'
			// controller: 'RandomMeals'
		})
		.when('/login', {
			templateUrl: '../views/partials/login-template.html',
			controller: 'loginController'
		})
		.when('/logout', {
			templateUrl: '../views/index.html',
			controller: 'logoutController'
		})
		.when('/register', {
			templateUrl: '../views/partials/register-template.html',
			controller: 'registerController'
		}).
		otherwise({
			redirectTo: '/'
		});
});

app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (AuthService.getUserStatus() === false) {
      $location.path('/');
    }
  });
});