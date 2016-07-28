"use strict";

angular.module('Dashboard')
.controller('editPostCtrl', ['$http', '$location', '$routeParams', 'StringTools', function($http, $location, $routeParams, StringTools){
	var slug = $routeParams.slug;

	$http.get('/posts/'+slug)
	.success((data) => {
		this.models = data;
	})
	.error((error) => {
		this.models = {};
		return this.error = error;
	});

	this.path = $location.absUrl().replace('/edit', '');

	this.edit = () => {
		this.models.slug = StringTools.toSlug(this.models.title);
		var rootUrl = "/posts/" + this.models.slug;

		$http.put('/posts/' + slug, this.models)
		.success((data) => {
			return $location.path(rootUrl);
		})
		.error((error) => {
			console.log(error)
		});
	};
}]);
