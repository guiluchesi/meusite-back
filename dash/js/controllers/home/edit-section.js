"use strict";

angular.module('Dashboard')
.controller('editSectionCtrl', ['$http', '$location', '$routeParams', 'StringTools', function($http, $location, $routeParams, StringTools){
	var section = $routeParams.section,
		rootUrl = "/home/" + section;

	$http.get(rootUrl)
	.success((data) => {
		delete data._id;
		data.section = StringTools.toTitle(data.section)
		return this.models = data;
	})
	.error((error) => {
		this.models = {};
		return this.error = error;
	});

	this.path = $location.absUrl().replace('/edit', '');
	this.edit = () => {
		if(this.models.section){this.models.slug = StringTools.toSlug(this.models.section)}
		
		$http.put('/home/' + section, this.models)
		.success((data) => {
			return $location.path('/home/' + this.models.slug);
		})
		.error((error) => {
			console.log(error)
		});
	};
}]);