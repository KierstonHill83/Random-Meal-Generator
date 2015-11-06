app.directive('personalPage', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '../views/partials/personal-template.html'
  };
});