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
      placeholder: 'Total Km'
    },
    {
      icon: 'fa-area-chart',
      placeholder: 'Média L/100'
    },
    {
      icon: 'fa-money',
      placeholder: 'Preço Gota'
    },
    {
      icon: 'fa-tag',
      placeholder: 'Portagens'
    },
    {
      icon: 'fa-users',
      placeholder: 'Número de pessoas'
    }
    ];

  });
