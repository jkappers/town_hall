define(['angular'], function(angular) {
  'use strict';


  /* Controllers */

  return angular.module('myApp.controllers', [])
    .controller('CardsListController', ['$scope', '$http', '$q', 'CardCollection', 'Context', function($scope, $http, $q, CardCollection, Context) {

      $scope.user = Context.user();

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
        $http.get("./cards.json")
      ])
      .then(function(responses){
        $scope.collection = CardCollection
        $scope.collection.cards(responses[0].data)
      });
    }]) // End of cardsIndexController
    .controller('CardsIndexController', ['$scope', '$http', 'Context', function($scope, $http, Context) {
      $scope.user = Context.user();
      


    }])
    .controller('CardsNewController', ['$scope', '$http', 'CardCollection', 'Encouragement', function($scope, $http, CardCollection, Encouragement) {
      $scope.card = {};
      $scope.encouragement = {
        label: Encouragement.text(),
        input: Encouragement.content()
      }

      $scope.save = function(){
        var card = angular.copy($scope.card)
        card.votes = 0;
        $scope.card = null;
        $http.post("/cards", { card: card });
        CardCollection.prepend(card);
      }

    }])
    .controller('unfoundController', ['$scope', '$rootScope', function($scope, $rootScope) {

    }]); // End of unfoundController
});
