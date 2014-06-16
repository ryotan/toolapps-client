'use strict';

angular.module('toolappsClientApp')
  .controller('StringConverter', function($scope) {
    $scope.target = '';
    $scope.converted = '';
    $scope.convert = function() {
      $scope.converted = $scope.target;
    };
  });
