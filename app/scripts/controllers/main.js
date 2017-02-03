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
  	
//     $scope.$on('$viewContentLoaded', function() {
//      window.scrollTo(0,document.body.scrollHeight);
//     //call it here
// });
    window.scrollTo(0,document.body.scrollHeight+100000);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $location.hash("main");
    $anchorScroll();
   
  //  $scope.$on('$viewContentLoaded', function(){
    
  // });
//   console.log("Hello");
// console.log($http.pendingRequests.length);
$scope.images = {
 '1994' :'images/zakhir.jpg',
  '1999'  :'images/hariharan.jpg',
  '2001':'images/strings.jpg',
   '2002' :'images/parikrama.jpg',
   '2011':'images/tochi_raina.jpg',
   '2014':'images/sparsh.jpg',
   '2015':'images/coshish.jpg',
   '2016':'images/tlt.jpg',
};
$scope.cache = [
  'images/zakhir.jpg',
  'images/hariharan.jpg',
  'images/strings.jpg',
   'images/parikrama.jpg',
   'images/tochi_raina.jpg',
   'images/sparsh.jpg',
   'images/coshish.jpg',
   'images/tlt.jpg',
];

$scope.Slider = {
  value: 2,
  options: {
    floor: 0,
    ceil: 8,
    vertical: true,
    showSelectionBar: true,
    showTicksValues: true ,
     hidePointerLabels: true  ,
    // ticksValuesTooltip: function (v) {
    //   return 'Tooltip for ' + v;
    // },
     stepsArray: [
      {value: '1994', legend: 'Ustad Zakir Hussain',},
      {value: '1999',legend: 'Hariharan',},
      {value: '2001', legend: 'Strings',},
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
};

   
  });

loader.init_shit();