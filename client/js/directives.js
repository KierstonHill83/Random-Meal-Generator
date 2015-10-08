app.directive('homePage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/home-template.html',
		scope: false
	};
});

app.directive('loginPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/login-template.html',
		scope: false
	};
});

app.directive('registerPage', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../views/partials/register-template.html',
		scope: false
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

