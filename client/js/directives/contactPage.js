app.directive('contactPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/contact-template.html',
		scope: false
	};
});