"use strict";

angular.module('Dashboard')
.controller('singleSectionCtrl', ['$http', '$routeParams', '$location', 'StringTools', function($http, $routeParams, $location, StringTools){
	var sec = $routeParams.section;

	$http.get("/home/" + sec)
	.success((data) => {
		data.section = StringTools.toTitle(data.section);
		data.content = StringTools.toHtml(data.content);
		return this.data = data;
	})
	.error((error) => {
		return this.error = error;
	});
	
	this.modalFunc = () => {
		$http.delete('/home/' + sec)
		.success(() => {
			return $location.path('/home');
		})
		.error((error) => {
			return console.log(error);
		});
	};
}]);