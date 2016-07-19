"use strict";

angular.module('Dashboard')
.factory('CheckLogin', function CheckLoginFactory($location, $cookieStore){
	return () => {
		if(!$cookieStore.get('user')){
			$location.path('/login');
		} 
	}
});