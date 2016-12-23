'use strict';

describe('Controller: ParvaahCtrl', function () {

  // load the controller's module
  beforeEach(module('symphonyApp'));

  var ParvaahCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParvaahCtrl = $controller('ParvaahCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParvaahCtrl.awesomeThings.length).toBe(3);
  });
});
