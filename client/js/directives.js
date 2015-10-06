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
		templateUrl: '../views/partials/login-template.html'
	};
});

app.directive('registerPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/register-template.html'
	};
});

app.directive('addRecipe', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/add-template.html'
	};
});

app.directive('randomMeal', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/random-template.html'
	};
});

app.directive('personalPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/personal-template.html'
	};
});

