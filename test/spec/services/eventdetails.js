'use strict';

describe('Service: eventDetails', function () {

  // load the service's module
  beforeEach(module('symphonyApp'));

  // instantiate service
  var eventDetails;
  beforeEach(inject(function (_eventDetails_) {
    eventDetails = _eventDetails_;
  }));

  it('should do something', function () {
    expect(!!eventDetails).toBe(true);
  });

});
