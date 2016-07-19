"use strict"

angular.module('Dashboard')
.controller('listPostsCtrl', ['$http', '$location', function($http, $location){
  this.posts = [];

	$http.get('/posts')
  .success((data) => {
    data.forEach((el) => {
      this.posts.push(el);
    });
  })
  .error((error) => {
    this.error = error;
    console.log(error);
  });

  this.add = function(){
    $location.path('/posts/add');
  };

}]);