"use strict";

angular.module('Dashboard')
.directive('smallCard', function(){
	return {
		restrict: "E",
		scope: {
			title: "=",
			sub: "=",
			page: "@"
		},
		templateUrl: "templates/directives/small-card.html",
		controller: function($scope, $location, StringTools){
			this.toSingle = function(){
				var path = StringTools.toSlug($scope.title);
				return $location.path($scope.page + "/" + path);
			}
		},
		controllerAs: "native"
	}
});