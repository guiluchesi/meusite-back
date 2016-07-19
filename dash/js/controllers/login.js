"use strict";

angular.module('Dashboard')
.controller('loginCtrl', ['$scope', '$cookieStore', '$location', '$http',  function($scope, $cookieStore, $location, $http){
	$scope.submit = function(){
		// console.log($scope.models);
		$http.post('/user/login', $scope.models)
			 .then((s) => {
				 console.log(s.data);
					$cookieStore.put('user', s.data);
					$location.path("/");
			 }, (e) => {
				$scope.error = e.data;
			 });
	};
	$scope.models = {};
}]);
