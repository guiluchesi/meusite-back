"use strict";

angular.module('Dashboard')
.directive('bigCard', function(){
	return {
		restrict: "E",
		templateUrl: "templates/directives/big-card.html",
		scope: {
			title: "=",
			content: "=",
			published: "=",
			modal: "="
		},
		controller: function($scope, $location, StringTools){
			var editPath = $location.path() + "/edit";
			
			this.modalKey = false,
			this.edit = () => {return $location.path(editPath)},
			this.modal = () => {return this.modalKey = true};
		},
		controllerAs: "directive"
	}
});