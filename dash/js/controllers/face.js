"use strict";

angular.module('Dashboard')
.controller('faceCtrl', ['$scope', '$http',  function($scope, $http){
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1809857625900304',
      xfbml      : true,
      version    : 'v2.7'
    });
  };

	(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

}]);
