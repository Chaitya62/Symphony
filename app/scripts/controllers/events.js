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
      'Karma',
    ];
    
    $scope.currentEvent =  function(){
    	for(var i =0;i<$scope.activeEvent.length;i++){
    		if( $scope.activeEvent[i] === true){
    			return $scope.eventView[i];
    		}
    	}
    	//return '/views/competitions.html';
    };
     $scope.sections = [                    
    	  { name: 'ProShows', url: '#!/ProShows',},
        { name: 'Competitions',	url: '#!/competitions',},
    	 {name:'Pre-Events',url:'#!/preevents'},
        { name: 'Informals',url: '#!/Informals', },
        { name: 'Workshops', url: '#!/Workshops',},
      
       
    ];

    $scope.workshops = [
        {tag:'Drum Circle',name:'',src:'drum.jpg'},
        
    ];

	$scope.competitions = [
		{tag: 'Off Beat' ,name: 'Group Dance', src: 'grpdance.jpg'},
		{tag: 'Battle of Bands', name: 'AM Bands', src: 'am_bands.jpg'},
		{tag: 'Symphony Idol',  name: 'Singing', src: 'singing.jpg'},
		{tag:  'Somaiya\'s Got Talent', name: 'Talent Hunt', src: 'SGT.jpg'},
		{tag: 'Udghosh',name: 'Street Play',src: 'street_play.jpg'},
        // {tag: '', name: 'Classical Dance', src: 'classicaldance.jpg'},
		{tag: 'Turntable Tussle',name: 'DJ Wars',src:'DJ_wars.jpg',},
		{tag: 'Carved Chronicles', name: 'Creative Writing',src: 'creative_writing.jpg'},
        {tag: 'Masterchef Somaiya 4.0', name: 'Culinary/B-plan',src: 'masterchef.jpg',ass: 'in association with BloomBox'},
        {tag:'Out Of Focus',name: 'Photography',src: 'photo.jpg'},
        {tag: 'Ok Doodle',name: 'Doodle Making', src: 'doodle.jpg'},
    ];

    $scope.informals = [
        {tag: 'Reckless Eating',src: 'reckless.jpg'},
        {tag: 'TicTacToe',src:'tictactoe.jpg',},
        {tag: 'Jenga',src:'jenga.jpg',},
        {tag: 'Pen Fight',src:'Penfight.jpg',}
    ];

    $scope.proShows = [
    
        {tag:'When Chai Met Toast',name:'February 6',src:'wcmt.jpg'},
        {tag:'Lagori',name: 'February 7',src: 'lagori.jpg',},
        {tag:'Kenneth Sebastian',name:'February 8',src:'kenny.jpg'},
        {tag:'Jaz Dhami and RaOol',name:'February 8',src:'rapper.jpg'},
        {tag: 'Aditi Singh Sharma', name:'February 8',src:'ass.jpg',},
        {tag:'DJ Candice',name: 'February 9',src:'Candy.jpg'},
        {tag:'DJ Kerano',name:'February 9',src:'kerano.jpg'},


    ];

    $scope.preEvents = [
        {tag: 'Colors of Youth',name:'Mumbai Rounds',src:'coy.jpg',},
        {tag:'Cricket Match Screening',name:'India vs England',src:'cricket.jpg'},
        //{tag:'Jam Session',name:'',src:'jam.jpg'},
        {tag: 'Somaiya\'s Got Talent',name:'College Elimination Rounds' , src:'SGT.jpg',},
    ];

		

	
	$scope.activeEvent =[
    true,false,false,false,false
    ];
    if(eventDetails.activeSection){
        $scope.activeEvent = eventDetails.activeSection;
    }
    $scope.eventView=[
    	'views/proshows.html',
        'views/competitions.html',
        'views/preevents.html',
        'views/informals.html',
        'views/workshops.html',
    	
        

    ];

    $scope.WorkshopsDetailsSrc={

        'Drum Circle':[
            {src:'views/workshops/drumcircle/about.html',}
        ],
    };

  


    $scope.InformalDetailsSrc = {
       'Reckless Eating':[
        {src: 'views/informals/reckless/about.html'},
       ],
       'TicTacToe':[
        {src: 'views/informals/tictactoe/about.html'},
       ],
       'Jenga':[
        {src: 'views/informals/jenga/about.html'},
       ],
       'Pen Fight':[
        {src: 'views/informals/penfight/about.html'}
       ],
    };

    $scope.proShowsDetailsSrc = {

        'DJ Candice':[
        { src:'views/proshows/djcandice/about.html'},
        ],
        'Lagori':[
        {src: 'views/proshows/lagori/about.html'},
        ],
        'Kenneth Sebastian':[
            {src:'views/proshows/kenny/about.html'},
        ],
        'When Chai Met Toast':[
            {src:'views/proshows/wcmt/about.html'}
        ],
        'Aditi Singh Sharma':[
        {src:'views/proshows/aditi/about.html'},
        ],
        'Jaz Dhami and RaOol':[
            {src:'views/proshows/rapper/about.html'},
        ],
        'DJ Kerano':[
            {src:'views/proshows/kerano/about.html'},
        ],
        
    };
   
    $scope.preEventsSrc ={
        'Somaiya\'s Got Talent':[
            {src: 'views/preevents/sgt/about.html',}
        ],
        'Cricket Match Screening':[
            {src: 'views/preevents/cricket/about.html',}
        ],
        'Colors of Youth':[
            {src: 'views/preevents/coy/about.html',}
        ],
        'Jam Session':[
            {src: 'views/preevents/jam/about.html',}
        ],
    };

    $scope.eventDetailsSrc = {
        'Group Dance': [
        {src: 'views/competitions/groupdance/about.html',},
        {src: 'views/competitions/groupdance/rules.html',},
        {src: 'views/competitions/groupdance/registration.html' ,},
        {src: 'views/competitions/groupdance/contact.html',},
        ],
        'AM Bands':[
        {src: 'views/competitions/ambands/about.html',},
        {src: 'views/competitions/ambands/rules.html',},
        {src: 'views/competitions/ambands/registration.html' ,},
        {src: 'views/competitions/ambands/contact.html',},

        ],
        'Singing': [
        {src: 'views/competitions/somaiyaunplugged/about.html',},
        {src: 'views/competitions/somaiyaunplugged/rules.html',},
        {src: 'views/competitions/somaiyaunplugged/registration.html' ,},
        {src: 'views/competitions/somaiyaunplugged/contact.html',},

        ],
        'Talent Hunt':[
        {src: 'views/competitions/SGT/about.html',},
        {src: 'views/competitions/SGT/rules.html',},
        {src: 'views/competitions/SGT/registration.html' ,},
        {src: 'views/competitions/SGT/contact.html',},
        ],
        'Street Play':[
        {src: 'views/competitions/streetplay/about.html',},
        {src: 'views/competitions/streetplay/rules.html',},
        {src: 'views/competitions/streetplay/registration.html' ,},
        {src: 'views/competitions/streetplay/contact.html',},
        ],
        'Classical Dance':[
        {src: 'views/competitions/classicaldance/about.html',},
        {src: 'views/competitions/classicaldance/rules.html',},
        {src: 'views/competitions/classicaldance/registration.html' ,},
        {src: 'views/competitions/classicaldance/contact.html',},
        ],
        'DJ Wars':[
        {src: 'views/competitions/djwars/about.html',},
        {src: 'views/competitions/djwars/rules.html',},
        {src: 'views/competitions/djwars/registration.html' ,},
        {src: 'views/competitions/djwars/contact.html',},
        ],
        'Creative Writing':[
        {src: 'views/competitions/creativewriting/about.html',},
        {src: 'views/competitions/creativewriting/rules.html',},
        {src: 'views/competitions/creativewriting/registration.html' ,},
        {src: 'views/competitions/creativewriting/contact.html',},
        ],
        'Culinary/B-plan':[
        {src: 'views/competitions/masterchef/about.html',},
        {src: 'views/competitions/masterchef/rules.html',},
        {src: 'views/competitions/masterchef/registration.html' ,},
        {src: 'views/competitions/masterchef/contact.html',},
        ],
        'Doodle Making':[
         {src: 'views/competitions/doodlemaking/about.html',},
        {src: 'views/competitions/doodlemaking/rules.html',},
        {src: 'views/competitions/doodlemaking/registration.html' ,},
        {src: 'views/competitions/doodlemaking/contact.html',},
        ],
        'Photography':[
          {src: 'views/competitions/photography/about.html',},
        {src: 'views/competitions/photography/rules.html',},
        {src: 'views/competitions/photography/registration.html' ,},
        {src: 'views/competitions/photography/contact.html',},
        ],


    };

    //random placement
  
    $scope.setActiveEvent =function(act){
    	
    	for(var i = 0;i<$scope.activeEvent.length;i++){
    		if(i === act){
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
        {name:'Registration & Prize'},
        {name:'Contact'},

    ];
    var informalSections = [
        {name: 'About'},
    ];

    $scope.setEventData = function(i){
    	eventDetails.eventData.eventName = $scope.competitions[i].tag;
        if($scope.competitions[i].tag == 'Masterchef Somaiya 4.0'){
            eventDetails.eventData.eventName = 'Masterchef Somaiya 4.0 in association with BloomBox'
         }
        eventDetails.eventData.eventSrcs = $scope.eventDetailsSrc[($scope.competitions[i].name)];
        eventDetails.sections = Eventsections;
        eventDetails.backgroundImage = 'images/alleventsbg.png';
        eventDetails.hereFrom = 'events';
        eventDetails.bubbleImag = $scope.competitions[i].src;
        eventDetails.activeSection = $scope.activeEvent;

        //console.log(eventDetails.eventData.eventSrcs);
    };
     $scope.setInformalData = function(i){
        eventDetails.eventData.eventName = $scope.informals[i].tag;
        eventDetails.eventData.eventSrcs = $scope.InformalDetailsSrc[($scope.informals[i].tag)];
        eventDetails.sections = informalSections;
        eventDetails.backgroundImage = 'images/alleventsbg.png';
        eventDetails.hereFrom = 'events';
        eventDetails.bubbleImag = $scope.informals[i].src;
        eventDetails.activeSection = $scope.activeEvent;
        //console.log(eventDetails.eventData.eventSrcs);
    };
     $scope.setPreEventData = function(i){
        eventDetails.eventData.eventName = $scope.preEvents[i].tag;
        eventDetails.eventData.eventSrcs = $scope.preEventsSrc[($scope.preEvents[i].tag)];
        eventDetails.sections = informalSections;
        eventDetails.backgroundImage = 'images/alleventsbg.png';
        eventDetails.hereFrom = 'events';
        eventDetails.bubbleImag = $scope.preEvents[i].src;
        eventDetails.activeSection = $scope.activeEvent;
        //console.log(eventDetails.eventData.eventSrcs);
    };
      $scope.setProShowData = function(i){

        eventDetails.eventData.eventName = $scope.proShows[i].tag;
        eventDetails.eventData.eventSrcs = $scope.proShowsDetailsSrc[($scope.proShows[i].tag)];
        eventDetails.sections = informalSections;
        eventDetails.backgroundImage = 'images/alleventsbg.png';
        eventDetails.hereFrom = 'events';
        eventDetails.bubbleImag = $scope.proShows[i].src;
        eventDetails.activeSection = $scope.activeEvent;
        //console.log(eventDetails.eventData.eventSrcs);
    };

        
        $scope.setWorkshopData = function(i){

        eventDetails.eventData.eventName = $scope.workshops[i].tag;
        eventDetails.eventData.eventSrcs = $scope.WorkshopsDetailsSrc[($scope.workshops[i].tag)];
        eventDetails.sections = informalSections;
        eventDetails.backgroundImage = 'images/alleventsbg.png';
        eventDetails.hereFrom = 'events';
        eventDetails.bubbleImag = $scope.workshops[i].src;
        eventDetails.activeSection = $scope.activeEvent;
        //console.log(eventDetails.eventData.eventSrcs);
    };
     $scope.isActive = function(i){
        if($scope.activeEvent[i]){return 'active';}
    };   
   

  });
