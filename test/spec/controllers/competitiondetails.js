'use strict';

describe('Controller: CompetitiondetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('symphonyApp'));

  var CompetitiondetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitiondetailsCtrl = $controller('CompetitiondetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompetitiondetailsCtrl.awesomeThings.length).toBe(3);
  });
});
