'use strict';

/**
 * @ngdoc function
 * @name tripzcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripzcalcApp
 */

 var testparam = {
   name: 'Telmo',
   idade: 28

 };

 
angular.module('tripzcalcApp')
  .controller('MainCtrl', function ($scope) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    this.test = testparam;
  });
