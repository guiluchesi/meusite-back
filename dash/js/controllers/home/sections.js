"use strict"

angular.module('Dashboard')
.controller('listPageCtrl', ['$http', '$scope', '$location', 'StringTools', function($http, $scope, $location, StringTools){
  this.sections = [],
  this.add = () => {$location.path('/home/add')};

  $http.get('/home')
  .success((sections) => {
    sections.forEach((el) => {
      el.title = StringTools.toTitle(el.section);
      console.log(el)
      this.sections.push(el);
    });
  })
  .error((error) => {
    console.log(error);
  });
}]);