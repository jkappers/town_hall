define(['angular'], function(angular) {
  'use strict';


  /* Directives */

  angular.module('myApp.directives', [])
    .directive('exampleDirective', ['$rootScope', '$timeout', '$window', function($rootScope, $timeout, $window) {
      return {
        link: function(scope, elm, attrs) {
          // Stuff.
        }
      }
    }]);
});
