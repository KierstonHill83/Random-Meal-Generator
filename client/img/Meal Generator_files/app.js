var app = angular.module('mealGenerator', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      access: {restricted: false},
      controller: 'myMealController',
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: '/views/partials/home-template.html',
      controller: 'RecipePuppy',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      redirectTo: '/home',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: '/views/partials/register-template.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/contact', {
      templateUrl: '/views/partials/contact-template.html',
      access: {restricted: false}
    })
    .when('/about', {
      templateUrl: '/views/partials/about-template.html',
      access: {restricted: false}
    })
    .when('/personal', {
      templateUrl: '../views/partials/personal-template.html',
      controller:'personalController',
      access: {restricted: true}
    })
    .otherwise({
      redirectTo: '/'
    });
});


app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !AuthService.getUserStatus()) {
      $location.path('/');
    }
  });
});