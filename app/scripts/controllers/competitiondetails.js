'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:CompetitiondetailsCtrl
 * @description
 * # CompetitiondetailsCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('CompetitiondetailsCtrl', function ($scope,eventDetails) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.CompetitionName = eventDetails.eventData.eventName;
     $scope.hereFrom = eventDetails.hereFrom;
    $scope.sections = eventDetails.sections;
    console.log($scope.sections);
    
    $scope.detailViews =eventDetails.eventData.eventSrcs;

    console.log(eventDetails.eventData.event);
    $scope.getSrc= function(it){
       
    	return $scope.detailViews[parseInt(it)].src;
    };
    var activeSection = [
    true,false,false,false
    ];
    $scope.setActiveSection = function(act){
    	for(var i = 0;i<activeSection.length;i++){
    		if(i== act){
    			activeSection[i] = true;
    		}
    		else{
    			activeSection[i] = false;	
    		}
    	}
    }
    $scope.getActiveSection = function(i){
    	return activeSection[i];
    };
    $scope.isActive = function(i){
        if(activeSection[i]){return "active";}
    };
   
  });
