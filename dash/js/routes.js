"use strict";

angular.module('Dashboard', ['ngRoute', 'ngCookies'])
.config(function($routeProvider){

	$routeProvider
	.when('/login', {
		"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			},
		templateUrl: 'templates/login.html'
	})
	.when('/', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: 'templates/dash.html',
		controller: function($scope, $window){
			if($window.innerWidth <= 400){
				$scope.mobile = true;
			}
		}
	})
	.when('/perfil', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: 'templates/perfil.html',
		controller: function($scope, $window){
			if($window.innerWidth <= 400){
				$scope.mobile = true;
			}
		}
	})
	.when('/home', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: 'templates/home/page.html'
	})
	.when('/home/:section', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: function(params) {
			var path;
	        params.section === "add" ? path = "add" : path = "single";
	        return "templates/home/" + path + "-section.html";
	    }
	})
	.when('/home/:section/edit', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: 'templates/home/edit-section.html'
	})
	.when('/posts', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: 'templates/post/posts.html'
	})
	.when('/posts/:slug', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: function(params) {
			var path;
	        params.slug === "add" ? path = "add" : path = "single";
	        return "templates/post/" + path + "-post.html";
	    }
	})
	.when('/posts/:slug/edit', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: "templates/post/edit-post.html"
	})
	.when('/face', {
		resolve: {
			"check": function($location, $cookieStore){
				if(!$cookieStore.get('user')){
					$location.path('/login');
				}
			}
		},
		templateUrl: 'templates/face/index.html'
	})
	.otherwise({redirectTo: '/'});
});
