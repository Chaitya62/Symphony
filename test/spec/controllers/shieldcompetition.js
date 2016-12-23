'use strict';

describe('Controller: ShieldcompetitionCtrl', function () {

  // load the controller's module
  beforeEach(module('symphonyApp'));

  var ShieldcompetitionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShieldcompetitionCtrl = $controller('ShieldcompetitionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShieldcompetitionCtrl.awesomeThings.length).toBe(3);
  });
});
