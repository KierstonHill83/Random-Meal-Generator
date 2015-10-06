app.directive('homePage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/home-template.html'
	};
});

app.directive('loginPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/login-template.html'
	};
});

app.directive('registerPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/register-template.html'
	};
});

app.directive('addRecipe', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/add-template.html'
	};
});

