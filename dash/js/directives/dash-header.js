"use strict";

angular.module('Dashboard')
.directive('dashHeader', ['$http', function(){
	return {
		restrict: "E",
		templateUrl: "templates/directives/dash-header.html",
		controller: function($scope, $cookieStore, $location){
			$scope.user = $cookieStore.get('user');
			$scope.logout = function(){
		  		$cookieStore.remove('user');
		  		$location.path('/login');
			};
		}
	}
}]);