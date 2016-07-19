"use strict";

angular.module('Dashboard')
.controller('editHomeCtrl', ['$scope', '$http',  function($scope, $http){
	$scope.addSection = function(){
		$scope.fields.push({
			// "section": "Section",
			"section": ""
		});
	};
	$scope.send = function(models){
		// models.forEach(function(el, ind){
		// 	// var numSec = ind + 1;
		// 	// console.log(el.section + " " + numSec + ": " + el.model);
		// 	console.log(el);
		// });
		console.log(models);
	};
	$scope.fields = [];
	$http.get('/page/home').then(
		(s) => {
			$scope.models = s.data.content;
			console.log(s.data.content);
		}, (e) => {
			console.log(e.data);
		}
	);
	// $scope.models = {
	// 	header: "OI, MEU NOME É GUILHERME LUCHESI",
	// 	sections: $scope.fields
	// };
}]);