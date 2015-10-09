app.directive('registerPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/register-template.html',
		scope: false
	};
});