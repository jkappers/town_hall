define(['angular', 'app'], function(angular, app) {
  'use strict';

  return app.config(['$stateProvider', '$injector', '$urlRouterProvider', '$routeProvider', function($stateProvider, $injector, $urlRouterProvider, $routeProvider) {

    $routeProvider.when('/', {
      templateUrl: '/partials/cards/index.html',
      controller: 'cardsIndexController'
    });
    $routeProvider.when('/cards/:id', {
      templateUrl: '/partials/cards/show.html',
      controller: 'cardsShowController'
    });
    $routeProvider.otherwise({
      templateUrl: '/partials/unfound.html',
      controller: 'unfoundController',
      animate: 'about-view'
    });
  }]);
});
