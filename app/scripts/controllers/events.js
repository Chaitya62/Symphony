'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('EventsCtrl', function ($scope,eventDetails) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.currentEvent =  function(){
    	for(var i =0;i<$scope.activeEvent.length;i++){
    		if( $scope.activeEvent[i] == true){
    			return $scope.eventView[i];
    		}
    	}
    	//return '/views/competitions.html';
    }
     $scope.sections = [
    	{ name: 'Competions',	url: '#!/competitions',},
    	{ name: 'Workshops', url: '#!/Workshops',},
    	{ name: 'Informals',url: '#!/Informals', },
        { name: 'ProShows', url: '#!/ProShows',},
    ];

	$scope.competitions = [
		{tag: 'Off Beat' ,name: 'Group Dance', src: 'grpdance.jpg'},
		{tag: '', name: 'AM Bands', src: 'am_bands.jpg'},
		{tag: 'Symphony Unplugged',  name: 'Singing', src: 'singing.jpg'},
		{tag:  'Somaiya\'s got talent', name: 'Talent Hunt', src: 'SGT.jpg'},
		{tag: 'Udghosh',name: 'Street Play',src: 'street_play.jpg'},
		// {tag: '', name: 'Classical Dance', src: 'classicaldance.jpg'},
		{tag: 'Turntable Tussle',name: 'DJ Wars',src:'DJ_wars.jpg',},
		{tag: 'Carved Chronicales', name: 'Creative Writing',src: 'creative_writing.jpg'},
        {tag: 'Masterchef Somaiya 4.0', name: 'Culinary/B-plan',src: 'masterchef.jpg'},
        {tag:'Out Of Focus',name: 'Photography',src: 'photo.jpg'},
        {tag: 'Ok Doodle',name: 'Doodle Making', src: 'doodle.jpg'},

		

	];
	$scope.activeEvent =[
    true,false,false,false
    ];
    $scope.eventView=[
    	'views/competitions.html',
        'views/workshops.html',
    	'views/informals.html',
    	'views/proshows.html',

    ];
    new WOW().init();


    var basePathCompetitions = 'views/competitions/'

    $scope.eventDetailsSrc = {
        'Group Dance': [
        {src: basePathCompetitions + 'groupdance/about.html',},
        {src: basePathCompetitions + 'groupdance/rules.html',},
        {src: basePathCompetitions + 'groupdance/registration.html' ,},
        {src: basePathCompetitions + 'groupdance/contact.html',},
        ],
        'AM Bands':[
        {src: basePathCompetitions + 'ambands/about.html',},
        {src: basePathCompetitions + 'ambands/rules.html',},
        {src: basePathCompetitions + 'ambands/registration.html' ,},
        {src: basePathCompetitions + 'ambands/contact.html',},

        ],
        'Singing': [
        {src: basePathCompetitions + 'somaiyaunplugged/about.html',},
        {src: basePathCompetitions + 'somaiyaunplugged/rules.html',},
        {src: basePathCompetitions + 'somaiyaunplugged/registration.html' ,},
        {src: basePathCompetitions + 'somaiyaunplugged/contact.html',},

        ],
        'Talent Hunt':[
        {src: basePathCompetitions + 'SGT/about.html',},
        {src: basePathCompetitions + 'SGT/rules.html',},
        {src: basePathCompetitions + 'SGT/registration.html' ,},
        {src: basePathCompetitions + 'SGT/contact.html',},
        ],
        'Street Play':[
        {src: basePathCompetitions + 'streetplay/about.html',},
        {src: basePathCompetitions + 'streetplay/rules.html',},
        {src: basePathCompetitions + 'streetplay/registration.html' ,},
        {src: basePathCompetitions + 'streetplay/contact.html',},
        ],
        'Classical Dance':[
        {src: basePathCompetitions + 'classicaldance/about.html',},
        {src: basePathCompetitions + 'classicaldance/rules.html',},
        {src: basePathCompetitions + 'classicaldance/registration.html' ,},
        {src: basePathCompetitions + 'classicaldance/contact.html',},
        ],
        'DJ Wars':[
        {src: basePathCompetitions + 'djwars/about.html',},
        {src: basePathCompetitions + 'djwars/rules.html',},
        {src: basePathCompetitions + 'djwars/registration.html' ,},
        {src: basePathCompetitions + 'djwars/contact.html',},
        ],
        'Creative Writing':[
        {src: basePathCompetitions + 'creativewriting/about.html',},
        {src: basePathCompetitions + 'creativewriting/rules.html',},
        {src: basePathCompetitions + 'creativewriting/registration.html' ,},
        {src: basePathCompetitions + 'creativewriting/contact.html',},
        ],
        'Culinary/B-plan':[
        {src: basePathCompetitions + 'masterchef/about.html',},
        {src: basePathCompetitions + 'masterchef/rules.html',},
        {src: basePathCompetitions + 'masterchef/registration.html' ,},
        {src: basePathCompetitions + 'masterchef/contact.html',},
        ],
        'Doodle Making':[
         {src: basePathCompetitions + 'doodlemaking/about.html',},
        {src: basePathCompetitions + 'doodlemaking/rules.html',},
        {src: basePathCompetitions + 'doodlemaking/registration.html' ,},
        {src: basePathCompetitions + 'doodlemaking/contact.html',},
        ],
        'Photography':[
          {src: basePathCompetitions + 'photography/about.html',},
        {src: basePathCompetitions + 'photography/rules.html',},
        {src: basePathCompetitions + 'photography/registration.html' ,},
        {src: basePathCompetitions + 'photography/contact.html',},
        ],


    };

    //random placement
  
    $scope.setActiveEvent =function(act){
    	
    	for(var i = 0;i<$scope.activeEvent.length;i++){
    		if(i== act){
    			$scope.activeEvent[i] = true;
    		}
    		else{
    			$scope.activeEvent[i] = false;	
    		}
    	}
    };
    var Eventsections = [
        {name:'Description' },
        {name: 'Rules'},
        {name:'Registeration & Prize'},
        {name:'Contact'},

    ];

    $scope.setEventData = function(i){
    	eventDetails.eventData.eventName = $scope.competitions[i].name;
        eventDetails.eventData.eventSrcs = $scope.eventDetailsSrc[($scope.competitions[i].name)];
        eventDetails.sections = Eventsections;
        eventDetails.hereFrom = "events";
        console.log(eventDetails.eventData.eventSrcs);
    };

     $scope.isActive = function(i){
        if($scope.activeEvent[i]){return "active";}
    };   
   

  });
