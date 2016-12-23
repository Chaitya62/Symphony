'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:ShieldcompetitionCtrl
 * @description
 * # ShieldcompetitionCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('ShieldcompetitionCtrl', function ($scope,eventDetails) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.competitions = [
		{ name: 'Antakshari', src: 'antakshari.jpg'},
		{ name: 'Art', src: 'paint.jpg'},
		{ name: 'Dance', src: 'dance.jpg'},
		{name: 'Debate', src: 'debate.jpg'},
		{name: 'Drama',src: 'drama.jpg'},
		{name: 'Music',src: 'music.jpg'},
		{name: 'Photography',src:'photos.jpg',},
		{name: 'Quiz',src: 'quiz.jpg'},
	

	];
	 var basePathCompetitions = 'views/competitions/'
	 $scope.eventDetailsSrc = {
        'Antakshari': [
        {src: basePathCompetitions + 'shieldantakshari/about.html',},
        {src: basePathCompetitions + 'shieldantakshari/rules.html',},
        {src: basePathCompetitions + 'shieldantakshari/contact.html',},
        ],
        'Art':[
        {src: basePathCompetitions + 'shieldart/about.html',},
        {src: basePathCompetitions + 'shieldart/rules.html',},
        {src: basePathCompetitions + 'shieldart/contact.html',},

        ],
        'Dance': [
        {src: basePathCompetitions + 'shielddance/about.html',},
        {src: basePathCompetitions + 'shielddance/rules.html',},
        {src: basePathCompetitions + 'shielddance/contact.html',},

        ],
        'Debate':[
        {src: basePathCompetitions + 'shielddebate/about.html',},
        {src: basePathCompetitions + 'shielddebate/rules.html',},
        {src: basePathCompetitions + 'shielddebate/contact.html',},
        ],
        'Drama':[
        {src: basePathCompetitions + 'shielddrama/about.html',},
        {src: basePathCompetitions + 'shielddrama/rules.html',},
        {src: basePathCompetitions + 'shielddrama/contact.html',},
        ],
        'Music':[
        {src: basePathCompetitions + 'shieldmusic/about.html',},
        {src: basePathCompetitions + 'shieldmusic/rules.html',},
        {src: basePathCompetitions + 'shieldmusic/contact.html',},
        ],
        'Photography':[
        {src: basePathCompetitions + 'shieldphotography/about.html',},
        {src: basePathCompetitions + 'shieldphotography/rules.html',},
        {src: basePathCompetitions + 'shieldphotography/contact.html',},
        ],
        'Quiz':[
        {src: basePathCompetitions + 'shieldquiz/about.html',},
        {src: basePathCompetitions + 'shieldquiz/rules.html',},
        {src: basePathCompetitions + 'shieldquiz/contact.html',},
        ],
       


    };
    var Eventsections = [
        {name:'Description' },
        {name: 'Rules'},
        {name:'Contact'},

    ];

     $scope.setEventData = function(i){
     	console.log(i);
    	eventDetails.eventData.eventName = $scope.competitions[i].name;
        eventDetails.eventData.eventSrcs = $scope.eventDetailsSrc[($scope.competitions[i].name)];
        eventDetails.sections = Eventsections;
        eventDetails.hereFrom = "shieldCompetition";
        console.log(eventDetails.eventData.eventSrcs);
    };
  });
