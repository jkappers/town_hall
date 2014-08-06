requirejs.config({
  waitSeconds: 200,
  paths: {
    angular           : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min',
    angularResource   : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-resource.min',
    angularAnimate    : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-animate.min',
    uiRouter          : '/vendor/js/angular-ui-router'
  },
  shim: {
    'angular'           : {'exports': 'angular'},
    'angularAnimate'    : ['angular'],
    'angularResource'   : ['angular'],
    'uiRouter'          : ['angular']
  },
  priority: [
    'angular'
  ]
});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

define([
  'angular',
  'angularAnimate',
  'uiRouter',
  'app',
  'routes'
], function(angular, angularAnimate, uiRouter, app, routes) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.resumeBootstrap([app['name']]);
  });
});
