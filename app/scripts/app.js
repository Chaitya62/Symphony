'use strict';

/**
 * @ngdoc overview
 * @name symphonyApp
 * @description
 * # symphonyApp
 *
 * Main module of the application.
 */
new WOW().init();
angular
  .module('symphonyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'rzModule',
    
    
  ])
  .config(function ($routeProvider) {
    console.log($routeProvider);
    $routeProvider

      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/competitionDetails', {
        templateUrl: 'views/competitiondetails.html',
        controller: 'CompetitiondetailsCtrl',
        controllerAs: 'competitionDetails'
      })
      .when('/shieldCompetition', {
        templateUrl: 'views/shieldcompetition.html',
        controller: 'ShieldcompetitionCtrl',
        controllerAs: 'shieldCompetition'
      })
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl',
        controllerAs: 'sponsors'
      })
      .when('/parvaah', {
        templateUrl: 'views/parvaah.html',
        controller: 'ParvaahCtrl',
        controllerAs: 'parvaah'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/rules', {
        templateUrl: 'views/rules.html',
        controller: 'RulesCtrl',
        controllerAs: 'rules'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
