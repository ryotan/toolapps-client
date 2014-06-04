'use strict';

// HACK: karma-commonjsとangular-mocks上手く動かないんだってさ。。。
// https://github.com/karma-runner/karma-commonjs/issues/23
var module = angular.mock.module;

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('toolappsClientApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
