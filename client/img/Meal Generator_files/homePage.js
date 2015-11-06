app.directive('homePage', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '../views/partials/home-template.html',
    scope: false
  };
});