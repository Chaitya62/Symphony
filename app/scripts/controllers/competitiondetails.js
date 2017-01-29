'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:CompetitiondetailsCtrl
 * @description
 * # CompetitiondetailsCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('CompetitiondetailsCtrl', function ($scope,eventDetails,$uibModal, $log, $document) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    window.scrollTo(0,0);
     $scope.CompetitionName = eventDetails.eventData.eventName;
     $scope.hereFrom = eventDetails.hereFrom;
    $scope.sections = eventDetails.sections;
    console.log($scope.sections);
    
    $scope.detailViews =eventDetails.eventData.eventSrcs;
    $scope.backgroundImage = eventDetails.backgroundImage;

    //console.log(eventDetails.eventData.event);
    $scope.bubbleImage = eventDetails.bubbleImag;

    $scope.getSrc= function(it){
       
    	return $scope.detailViews[parseInt(it)].src;
    };
    var activeSection = [
    true,false,false,false
    ];
    $scope.setActiveSection = function(act){
    	for(var i = 0;i<activeSection.length;i++){
    		if(i === act){
    			activeSection[i] = true;
    		}
    		else{
    			activeSection[i] = false;	
    		}
    	}
    };
    $scope.getActiveSection = function(i){
    	return activeSection[i];
    };
    $scope.isActive = function(i){
        if(activeSection[i]){return 'active';}
    };

    $scope.Events = [
        'Off Beat: Group Dance','Symphony Idol : Singing',
        'Battle of Bands: AM Bands',
        'Somaiya\'s Got Talent: Talent Hunt',
        'Udghosh: Street Play',
        'Turntable Tussle: DJ Wars',
        'Carved Chronicles: Creative Writing',
        'Masterchef Somaiya: Culinary/ B-plan',
        'Out of Focus: Photography',
        'Ok Doodle: Doodle Making',
    ];

   function clearEntries(){
     $scope.fname = "";
    $scope.lname = "";
    $scope.college= "";
    $scope.email = "";
    $scope.city = "";
    $scope.number = "";
    $scope.eventChecked = "";
   };

    $scope.toggleSelection = function(E){
        $scope.eventChecked = E;
    };




    $scope.submit = function(){
        console.log($scope.fname);
        console.log($scope.lname);
        console.log($scope.college);
        console.log($scope.email);
        console.log($scope.number);
        console.log($scope.city);
        console.log($scope.eventChecked);

        var data = {
            'entry.2092238618':$scope.fname,
            'entry.1230346807':$scope.lname,
            'entry.1345686330':$scope.number,
            'entry.1556369182':$scope.email,
            'entry.479301265':$scope.college,
            'entry.871528548':$scope.city,
            'entry.1844592896':$scope.eventChecked,    
        };
        clearEntries();
        var url = 'https://docs.google.com/forms/d/e/1FAIpQLScdqJTPRdukRGB09I_xIRZycuyhpqMKYKxKouj_crv9iPZ78g/formResponse';
        postData(url,data);
    };



    //modal controller
   
  });


  function postData(url,data){
  
     $.ajax({
                url: url,
                data: data,
                type: 'POST',
                dataType: 'xml'
            });

}
