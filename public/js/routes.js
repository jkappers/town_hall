define(['angular', 'app'], function(angular, app) {
  'use strict';

  return app.config(function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state("cards", {
          url: "/cards",
          templateUrl: "/partials/cards/index.html",
          controller: "cardsIndexController"
        })
        .state("cards.show", {
          url: "/:id",
          templateUrl: "/partials/cards/show.html",
          controller: "cardsShowController"
        })

      $urlRouterProvider.otherwise('/cards');
  });
});
