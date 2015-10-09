app.directive('randomMeal', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/random-template.html'
	};
});