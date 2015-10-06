app.factory('httpFactory', ['$http', function($http) {

	var obj = {};

	obj.jsonp = function(url) {
		return $http.jsonp(url);
	};

	return obj;


}]);