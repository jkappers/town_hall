define([
  'angular',
  'directives',
  'controllers',
  'services',
  'uiRouter',
  'angularRoute',
  'angularResource',
  'angularAnimate'
  ],
  function(angular, directives, controllers, services, uiRouter) {
    'use strict';

    var myApp = angular.module('myApp', [
      'ngResource',
      'ngAnimate',
      'myApp.directives',
      'myApp.controllers',
      'myApp.services',
      'ui.router'
    ]);

    myApp.run(function($rootScope, $templateCache, $http, $location, $window){
      console.log('Angular Started');
    });

    return myApp;
  }
);
