define(['angular', 'app'], function(angular, app) {
  'use strict';

  return app.config(function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state("cards", {
          url: "/cards",
          templateUrl: "/partials/cards/index.html",
          controller: "cardsIndexController"
        })
        .state("cards.new", {
          url: "/new",
          templateUrl: "/partials/cards/new.html",
          controller: "CardsNewController"
        })
        .state("cards.show", {
          url: "/:id",
          templateUrl: "/partials/cards/show.html",
          controller: "cardsShowController"
        })

      $urlRouterProvider.otherwise('/cards');
  });
});
