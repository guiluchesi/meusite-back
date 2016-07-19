"use strict";

angular.module('Dashboard')
.controller('addPostCtrl', ['$scope', '$http', '$location', '$filter', 'StringTools', function($scope, $http, $location, $filter, StringTools){
	$scope.submit = function(){
		$scope.models.slug = StringTools.toSlug($scope.models.title);
		$scope.models.pubDate = Date.parse(new Date());
		
		$http.post('/posts', $scope.models)
		.then((s) => {
			$location.path('/posts');
		}, (e) => {
			console.log(e.data);
		});
	};
	$scope.models = {};
}]);