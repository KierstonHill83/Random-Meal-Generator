app.directive('fullWeek', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '../views/partials/fullWeek-template.html',
    scope: false
  };
});