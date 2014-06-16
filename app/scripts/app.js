'use strict';

angular
  .module('ToolboxApplication', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/string-converter', {
        templateUrl: 'views/string-converter.html',
        controller: 'StringConverter'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
