define([
  'angular',
  'directives',
  'controllers',
  'uiRouter',
  'angularRoute',
  'angularResource',
  'angularAnimate'
  ],
  function(angular, directives, controllers, uiRouter) {
    'use strict';

    var myApp = angular.module('myApp', [
      'ngResource',
      'ngAnimate',
      'myApp.directives',
      'myApp.controllers',
      'ui.router'
    ]);

    myApp.run(function($rootScope, $templateCache, $http, $location, $window){
      console.log('Angular Started');
    });

    return myApp;
  }
);
