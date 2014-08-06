requirejs.config({
  waitSeconds: 200,
  paths: {
    angular           : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min',
    angularResource   : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-resource.min',
    angularAnimate    : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-animate.min',
    restangular       : '//cdnjs.cloudflare.com/ajax/libs/restangular/1.4.0/restangular',
    underscore        : '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore',
    uiRouter          : '/vendor/js/angular-ui-router'
  },
  shim: {
    'angular'           : {'exports': 'angular'},
    'angularAnimate'    : ['angular'],
    'angularResource'   : ['angular'],
    'restangular'       : ['angular', 'underscore'],
    'uiRouter'          : ['angular']
  }
});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

define([
  "angular",
  "app",
  "causes/main"
],
function(angular, app) {
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.resumeBootstrap([app['name']]);
  });
});
