"use strict";

angular.module('Dashboard')
.directive('alertBox', function(){
	return {
		restrict: "E",
		templateUrl: "templates/directives/alert-box.html",
		scope: {
			cancel: "=",
			submit: "="
		},
		controller: function($scope, Modal){
			Modal.scrollOff();

			this.cancel = function(){
				Modal.scrollOn();
				return $scope.cancel = false;
			};

			this.submit = function(){
				Modal.scrollOn();
				return $scope.submit();
			};
		},
		controllerAs: "actions"
	}
});