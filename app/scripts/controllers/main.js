'use strict';

/**
 * @ngdoc function
 * @name tripzcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripzcalcApp
 */


angular.module('tripzcalcApp')
  .controller('MainCtrl', function($scope) {

    $scope.items = [{
      value: '',
      icon: 'fa-car',
      placeholder: 'Km Traveled'
    }, {
      value: '',
      icon: 'fa-area-chart',
      placeholder: 'Average L/100'
    }, {
      value: '',
      icon: 'fa-money',
      placeholder: 'Fuel Price'
    }, {
      value: '',
      icon: 'fa-tag',
      placeholder: 'Tolls'
    }, {
      value: '',
      icon: 'fa-users',
      placeholder: 'How many people'
    }];

    $scope.showResult = false;
    $scope.total = 0;

    // $scope.calc = function() {
    //   var x1 = (parseInt($scope.items[0].value) * parseInt($scope.items[1].value)) / 100;
    //   var x2 = (x1 * parseInt($scope.items[2].value)) + parseInt($scope.items[3].value);
    //   var x3 = x2 / parseInt($scope.items[4].value);
    //   $scope.total = Math.round(x3 * 100) / 100;

    //   $scope.showResult = true;
    // };
    
    // function to calculate the total to pay
    $scope.calculate = function() {
      var x1 = (parseInt($scope.kmtraveled) * parseInt($scope.average)) / 100;
      var x2 = (x1 * parseInt($scope.fuelprice)) + parseInt($scope.tolls);
      var x3 = x2 / parseInt($scope.persons);
      
      this.total = Math.round(x3 * 100) / 100;

      $scope.showResult = true;
    };

    // function to clean the fields
    $scope.cleanInput = function() {
      $scope.kmtraveled = '';
      $scope.average = '';
      $scope.fuelprice = '';
      $scope.tolls = '';
      $scope.persons = '';
      $scope.userForm.$setPristine();
      
      // hide the result if shown
      $scope.showResult = false;
    };

  // 		// function to submit the form after all validation has occurred
		// $scope.submitForm = function(isValid) {

		// 	// check to make sure the form is completely valid
		// 	if (isValid) {
		// 		alert('our form is amazing');
		// 	}

		// };


  });
