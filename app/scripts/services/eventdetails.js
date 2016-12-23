'use strict';

/**
 * @ngdoc service
 * @name symphonyApp.eventDetails
 * @description
 * # eventDetails
 * Service in the symphonyApp.
 */
angular.module('symphonyApp')
  .service('eventDetails', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.eventData = {};
    this.eventViewMap ={};
    

    // this.setEventName = function(name){
    // 	eventData.eventName  = name;
    // }
   	// this.getEventName = function(){
   	// 	return eventData.eventName;
   	// }

  });
