'use strict';

// HACK: karma-commonjsとangular-mocks上手く動かないんだってさ。。。
// https://github.com/karma-runner/karma-commonjs/issues/23
var module = angular.mock.module;

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('ToolboxApplication'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have empty target and converted string initially.', function() {
    expect(scope.target).to.equals('');
    expect(scope.converted).to.equals('');
  });
});
