"use strict";

angular.module('Dashboard')
.controller('addSectionCtrl', ['$scope', '$http', '$location', '$filter', 'StringTools', function($scope, $http, $location, $filter, StringTools){
	this.path = $location.path().replace('/add', '');
	this.models = {};
	this.add = () => {
		this.models.slug = StringTools.toSlug(this.models.section);
		$http.post('/home', this.models)
		.success((data) => {
			return $location.path(this.path);
		})
		.error((error) => {
			console.log(error)
		});
	};
}]);