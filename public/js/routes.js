define(['angular', 'app'], function(angular, app) {
  'use strict';

  return app.config(function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state("cards", {
          url: "/cards",
          views: {
            "@": {
              templateUrl: "/partials/cards/index.html",
              controller: "CardsIndexController"
            },
            "form@cards": {
              templateUrl: "/partials/cards/new.html",
              controller: "CardsNewController"
            },
            "list@cards": {
              templateUrl: "/partials/cards/list.html",
              controller: "CardsListController"
            }
          }
        })

      $urlRouterProvider.otherwise('/cards');
  });
});
