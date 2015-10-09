var app = angular.module('mealGenerator', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../views/index.html',
			access: {
				restricted: false
			}
			// controller: 'RandomMeals'
		})
		// .when('/home', {
		// 	templateUrl: '../views/home.html',
		// 	controller: 'RandomMeals'
		// })
		.when('/login', {
			templateUrl: '../views/partials/login-template.html',
			controller: 'loginController',
			access: {
				restricted: false
			}
		})
		.when('/logout', {
			templateUrl: '../views/index.html',
			controller: 'logoutController',
			access: {
				restricted: true
			}
		})
		.when('/register', {
			templateUrl: '../views/partials/register-template.html',
			controller: 'registerController',
			access: {
				restricted: false
			}
		}).
		otherwise({
			redirectTo: '/'
		});
});

app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !AuthService.getUserStatus()) {
      $location.path('/login');
    }
  });
});