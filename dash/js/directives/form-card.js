"use strict";

angular.module('Dashboard')
.directive('formCard', function(){
	return {
		restrict: "E",
		templateUrl: "templates/directives/form-card.html",
		scope: {
			title: "=",
			published: "=",
			content: "=",
			submit: "="
		},
		controller: function($scope, $location, $http, StringTools){
			var rootUrl = $location.path().replace('/edit', '');
			this.cancel = () => {return $location.path(rootUrl)};
			// this.submit = function(){
			// 	var models = {},
			// 		section = rootUrl;

			// 	models.section = StringTools.toSlug($scope.title);
			// 	models.content = $scope.content;


			// 	$http.put(section, models)
			// 	.success((data) => {
			// 		var location = $location.path().split('/')[1];
			// 		return $location.path('/' + location + '/' + models.section);
			// 	})
			// 	.error((error) => {
			// 		console.log(error)
			// 	});
			// };
		},
		controllerAs: "directive"
	}
});