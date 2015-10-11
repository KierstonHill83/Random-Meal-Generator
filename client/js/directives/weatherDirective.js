app.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: '../views/partials/weatherReport-template.html',
		replace: true,
		scope: {
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		}
	};
});