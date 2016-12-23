'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('MainCtrl', function ($scope,$window,$anchorScroll, $location) {
  	console.log($window);
    //$window.scrollTo(0,2065);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $location.hash("main");
    $anchorScroll();
    
    new WOW({
    	 offset:       0,
    }).init();

$scope.images = {
 '1994' :'images/zakhir.jpg',
  '1999'  :'images/hariharan.jpg',
  '2001':'images/SGT.jpg',
   '2002' :'images/parikrama.jpg',
   '2011':'images/tochi_raina.jpg',
   '2014':'images/sparsh.jpg',
   '2015':'images/coshish.jpg',
   '2016':'images/tlt.jpg',
};

$scope.Slider = {
  value: 2,
  options: {
    floor: 0,
    ceil: 8,
    vertical: true,
    showSelectionBar: true,
    showTicksValues: true ,
     hidePointerLabels: true  ,
    ticksValuesTooltip: function (v) {
      return 'Tooltip for ' + v;
    },
     stepsArray: [
      {value: '1994', legend: 'Ustad Zakir Hussain',},
      {value: '1999',legend: 'Hariharan',},
      // {value: '2001', legend: 'String',},
      {value: '2002', legend: 'Parikrama',},
      {value: '2011', legend: 'Tochi Raina',},
      {value: '2014', legend: 'Sparsh',},
      {value: '2015', legend: 'Coshish',},
      {value: '2016', legend: 'The Local Train',},
      
    ],
  }
};

$scope.getSrc = function(i){
  return $scope.images[i];
}

   
  });

