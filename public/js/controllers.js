define(['angular'], function(angular) {
  'use strict';


  /* Controllers */

  return angular.module('myApp.controllers', [])
    .controller('cardsIndexController', ['$scope', '$rootScope', '$http', '$location', '$timeout', '$q', function($scope, $rootScope, $http, $location, $timeout, $q) {

      $scope.vote = function(card) {
        if ($scope.user.votes > 0) {
          $scope.user.votes -=1;
          card.votes += 1;
          $http.post("./cards/"+card.id+"/vote");
        }
      }

      $scope.unvote = function(card) {
        $scope.user.votes +=1;
        card.votes -= 1;
        $http.delete("./cards/"+card.id+"/unvote");
      }


      $q.all([
        $http.get("./users/current.json"),
        $http.get("./cards.json")
      ])
      .then(function(responses){
        $scope.user  = responses[0].data;
        $scope.cards = responses[1].data;
      });
    }]) // End of cardsIndexController
    .controller('cardsShowController', ['$scope', '$sce', '$rootScope', '$stateParams', '$http', '$location', '$timeout', function($scope, $sce, $rootScope, $stateParams, $http, $location, $timeout) {


      /* Setup */

      $scope.card;

      $http.get("./cards/" + $stateParams.id + ".json")
        .success(function(data) {
          $scope.card = data;
        })
        .error(function(data, status, headers, config) {
          // TODO: Handle statuses here. Might not be a 404 (could be a 500 or something).
          $location.path("/not_found");
        });

    }])
    .controller('CardsNewController', ['$scope', '$http', function($scope, $http) {
      $scope.card = {};

      $scope.save = function(){
        $http.post("/cards", { card: $scope.card });
      }

    }]) // End of cardsShowController
    .controller('unfoundController', ['$scope', '$rootScope', function($scope, $rootScope) {

    }]); // End of unfoundController
});
