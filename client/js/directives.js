app.directive('addRecipe', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'add-template.html'
	};
});