'use strict';

angular.module('toolappsClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.target = '';
    $scope.convert = function() {
      $scope.converted = $scope.target;
    };
  });
