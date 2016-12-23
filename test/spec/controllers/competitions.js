'use strict';

describe('Controller: CompetitionsCtrl', function () {

  // load the controller's module
  beforeEach(module('symphonyApp'));

  var CompetitionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitionsCtrl = $controller('CompetitionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompetitionsCtrl.awesomeThings.length).toBe(3);
  });
});
