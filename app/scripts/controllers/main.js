'use strict';

/**
 * @ngdoc function
 * @name tripzcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripzcalcApp
 */


angular.module('tripzcalcApp')
  .controller('MainCtrl', function ($scope) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.props = [
    {
      model: '',
      icon: 'fa-car',
      placeholder: 'Km Traveled'
    },
    {
      model: '',
      icon: 'fa-area-chart',
      placeholder: 'Average L/100'
    },
    {
      model: '',
      icon: 'fa-money',
      placeholder: 'Fuel Price'
    },
    {
      model: '',
      icon: 'fa-tag',
      placeholder: 'Tolls'
    },
    {
      model: '',
      icon: 'fa-users',
      placeholder: 'How many people'
    }
    ];
    
    $scope.calc = function() {
      $scope.total = parseInt($scope.props[0].model) + parseInt($scope.props[1].model);
    };
    


  });
