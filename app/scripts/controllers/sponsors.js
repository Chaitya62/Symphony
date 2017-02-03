'use strict';

/**
 * @ngdoc function
 * @name symphonyApp.controller:SponsorsCtrl
 * @description
 * # SponsorsCtrl
 * Controller of the symphonyApp
 */
angular.module('symphonyApp')
  .controller('SponsorsCtrl', function ($scope,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };

  $scope.sponsor_2016 = [
    {name: 'Presented By',src:'images/MM.jpg',href: '#'}, 
    {name: 'Fun Partner',src:'images/aqua-imagica.png',href: '#'},
    {name: 'Energy Drink Partner',src:'images/redbull.png' ,href: '#'},
    {name:'Symphony Idol Partner',src:'images/sma.png' ,href:'#'},
    {name: 'Online Publicity Partner',src:'images/all-events.png' ,href:'#'},
    {name: 'AM Bands Partner',src:'images/benchmark.png',href:'#'},
    {name:'Water Partner',src:'images/brijeel.jpg',href:'#'},
    {name: 'Books By Weight Partner',src: 'images/butterfly.png',href:'#'},
    {name:'The Next Step Partner',src:'images/dwm.png',href:'#'},
    {name:'Game Shop Partner',src:'images/emart.png',href:'#'},
    {name:'Online Media Partner',src:'images/fadoo.png',href:'#'},
    {name:'Online Media Partner',src:'images/knowafest.jpg',href:'#'},
    {name:'Online Media Partner',src:'images/campfestiva.jpg',href:'#'},
    {name: 'Local Magazine Partner',src:'images/livinglocal.jpg',href:'#'},
    {name:'Media Partner',src:'images/mumbai-messenger.png',href:'#'},
    {name:'Social Initiative Partner',src:'images/metro.jpg',href:'#'},
    {name:'Media Partner',src:'images/maharashtra-times.jpg',href:'#'},
    {name:'Trivia Corner & Magazine Partner',src:'images/youth.png',href:'#'},
    {name:'Media Partner',src:'images/zee.png',href:'#'},
    {name:'Fashion Partner',src: 'images/garcon.png',href:'https://garcon.in'},
    {name : 'E-Paper Partner', src:'images/freepress.jpg',href:'#'},
    {name : 'Milkshake Partner', src:'images/calvinm.jpg',href:'#'},
    {name : 'Health Care Partner', src:'images/relispray.png',href:'#'},
    {name : 'Tattoo Partner', src:'images/bodyCanvas.jpg',href:'#'},
    {name : 'Student Opportunity Partner', src:'images/t19.jpg',href:'#'},
    {name : 'Banking Partner', src:'images/canara.jpg',href:'#'},
    {name : 'Health Partner', src:'images/himalaya.png',href:'#'},
    {name : 'Street Play Partner', src:'images/zima.png',href:'#'},
    {name : 'Student Discount Partner', src:'images/savepocket.jpg',href:'#'},
    {name : 'Music Streaming Partner', src:'images/saavn.png',href:'#'},
    {name : 'Music Gear Partner', src:'images/futardos.png',href:'#'},

    




    // {name:'',src''},

  ];
 

  $scope.others_2016 = [
    'images/tga.png',
    'images/5ive.jpg',
        'images/cps.png',
    'images/aliff.png',
    'images/persang.png',
    'images/ebay.png',
    'images/jamboree.png',
    'images/kic.jpg',
    'images/pugmarks.jpg',
    'images/tss.png',

    'images/mobilecafe.jpg',




  ];

  $scope.sponsor_2017 = [
  {name:'Presented By',src:'images/Pulse.jpg',href:'#',},
  {name:'Powered By',src:'images/vh1.png',href:'#',},
  {name:'Co-sponsored By',src:'images/firefox.jpg',href:'#',},
  {name : 'In Association With', src:'images/bisleri.jpg',href:'#'},
   {name:'Pro Night Presented By',src:'images/COYs.png',href:'#'},

   {name:'Supported By', src:'images/BPL.jpg',href:'#',},
    {name : 'Music Gear Partner', src:'images/futardos.png',href:'#',},
    {name:'AM Bands Partner',src:'images/nescafelabs.jpg',href:'#',},
  {name:'Symphony Idol Partner',src:'images/sma.png' ,href:'#'},
   {name : 'Outdoor Media Partner', src:'images/telex.jpg',href:'#'},
    {name:'Wifi Partner',src:'images/joispot.jpg',href:'#',},  
  {name:'Radio Partner',src:'images/redfm.jpg',href:'#'},
   {name : 'Wellness Partner', src:'images/himalaya.png',href:'#'},
  {name : 'Snack Partner', src:'images/balaji.jpg',href:'#'},
  {name:'Ice Cream Partner',src:'images/vadilal.jpg',href:'#'},


  {name : 'Voyage Partner', src:'images/vagabond.jpg',href:'#'},  
  {name : 'Style Partner', src:'images/ss.jpg',href:'#'},
  {name:'Group Dance',src:'images/TLA.png',href:'#',},  
    {name:'Online Media Partner',src:'images/campfestiva.jpg',href:'#'},
  {name:'Udghosh Partner',src:'images/vidhur.jpg'},
   {name:'DJ WARS Partner',src:'images/MMI.jpg',href:'#'},
  
  {name:'Creativity Partner',src:'images/SM.jpg',href:'https://storymirror.com/'},
    {name : 'Support Media Partner', src:'images/stupidsid.jpg',href:'#'},
    {name:'Footwear Partner',src:'images/buckaroo.png',href:'#'},
  {name : 'Magazine Partner', src:'images/ei.png',href:'#'},
   {name: 'Coupon Partner',src:'images/GrabOn.jpg',href:'https://www.grabon.in/'},
   {name:'Seminar Partner',src:'images/collegepond.jpg',href:'#'},
   {name:'Tattoo Partner',src:'images/bodyCanvas.jpg',href:'http://www.mumbaitattooart.com/'},
   {name:'Workshop Partner',src:'images/taalinc.png',href:'https://www.taalinc.net'},
   {name:'Doodle Partner',src:'images/doodlebawa.jpg',href:'http://www.doodlebawa.com/'},
   {name:'Celebrity Travel Partner',src:'images/justride.jpg',href:'#',},
   {name:'KJSCE Shield Dance Partner',src:'images/ansar.jpg',href:'#'},
   {name : 'E-Paper Partner', src:'images/freepress.jpg',href:'#'},
   {name:'Online Shopping Partner',src:'images/culturetruck.png',href:'#',},
   {name:'Online Media Partner',src:'images/BrainBuxa.jpg',href:'#'},
   {name:'Online Media Partner',src:'images/ideap.jpg',href:'#'},
    {name:'Online Magazine Partner',src:'images/fashionLady.jpg',href:'https://www.fashionlady.in/'},
  // {name : 'Creativity Partner', src:'images/',href:'#'},
  ];

  $scope.others_2017 = [
    // 'images/imperial.png',
    'images/catking.jpg',
    'images/jamboree.png',
  ];

  $scope.getClass = function(i){
      if(i%2===0){
        return 'wow slideInUp';
      }
      else{
        return 'wow slideInDown';
      }
  };


  });

