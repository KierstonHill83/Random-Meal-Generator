var app = angular.module('mealGenerator', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      // templateUrl: '../views/index.html',
      access: {restricted: false},
      controller: 'myMealController',
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: '/views/partials/home-template.html',
      controller: 'RandomMeals',
      access: {restricted: false}
    })
    // .when('/random', {
    //  templateUrl: '/views/partials/random-template.html',
    //  controller: 'recipePuppy',
    //  access: {restricted: false}
    // })
    .when('/login', {
      controller: 'loginController',
      redirectTo: '/home',
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
      templateUrl: '/views/partials/contact-template.html',
      access: {restricted: false}
    })
    // .when('/personal', {
    //   template:'<div ng-controller="logoutController"><a class="btn" ng-click="logout()">Logout</a></div>',
    //   access: {restricted: true}
    // })
    .when('/personal', {
      templateUrl: '../views/partials/personal-template.html',
      controller:'personalController',
      access: {restricted: true}
    })
    // .when('/personal/:days', {
    //  templateUrl: '../views/partials/personal.html',
    //  controller: 'forecastController',
    //  access: {restricted: true}
    // })
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