'use strict';

describe('Controller: WebsiteteamCtrl', function () {

  // load the controller's module
  beforeEach(module('symphonyApp'));

  var WebsiteteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebsiteteamCtrl = $controller('WebsiteteamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WebsiteteamCtrl.awesomeThings.length).toBe(3);
  });
});
