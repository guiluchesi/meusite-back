"use strict";

angular.module('Dashboard')
.controller('singlePostCtrl', ['$scope', '$http', '$routeParams', '$location', 'StringTools', function($scope, $http, $routeParams, $location, StringTools){
	var slug = $routeParams.slug;

	$http.get('/posts/' + slug)
	.success((post) => {
		post.content = StringTools.toHtml(post.content);
		return this.data = post;
	})
	.error((error) => {
		return this.error = error;
	});

	this.modalFunc = () => {
		$http.delete('/posts/' + slug)
		.success(() => {
			return $location.path('/posts');
		})
		.error((error) => {
			return console.log(error);
		});
	};
}]);
