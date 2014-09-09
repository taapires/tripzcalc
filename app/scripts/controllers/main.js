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
      icon: 'fa-car',
      placeholder: 'Km Traveled'
    },
    {
      icon: 'fa-area-chart',
      placeholder: 'Average L/100'
    },
    {
      icon: 'fa-money',
      placeholder: 'Fuel Price'
    },
    {
      icon: 'fa-tag',
      placeholder: 'Tolls'
    },
    {
      icon: 'fa-users',
      placeholder: 'How many people'
    }
    ];

  });
