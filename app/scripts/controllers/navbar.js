'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('NavbarCtrl', function ($scope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.navStatus = false;
    $scope.toggleNav = function(){
    	
    	
    	$scope.navStatus = !$scope.navStatus;
    	console.log($scope.navStatus);
    };
    $scope.getNavStatus=function(){
    	
    	if($scope.navStatus){ return 'toggled';}
    };

   
    $scope.getOverlayStatus = function(){
    	if($scope.navStatus){ return 'show'; }
    };
    var lookup = {
        '/': 'Home',
        '/about': 'About',
        '/events': 'Events',
        '/shieldCompetition': 'Shield',
        '/parvaah': 'Parvaah',
        '/contact': 'Contact',
        '/sponsors': 'Sponsors',
        '/rules' : 'Rules',
        '/competitionDetails':'Events',
    };
    $scope.sections = [
    	{ name: 'Home',	url: '#!/'},
    	{ name: 'About\ Us',url: '#!/about'},
        {name: 'General Rules',url: '#!/rules'},
    	{ name: 'Events', url: '#!/events'},
    	{ name: 'KJSCE\ Shield', url: '#!/shieldCompetition'},
    	{ name: 'Parvaah', url: '#!/parvaah'},
    	{name: 'Contact Us',url: '#!/contact'},
    	{name: 'Sponsors',url: '#!/sponsors'},
        {name: 'Blog',url: 'https://kjscelive.wordpress.com',target: '_blank'},

    ];
    $scope.getCurrentSection= function(){
        return lookup[$location.path()];
    };


  });
