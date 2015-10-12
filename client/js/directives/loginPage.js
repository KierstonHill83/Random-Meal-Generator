app.directive('loginPage', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '../views/partials/login-template.html',
    scope: false
  };
});