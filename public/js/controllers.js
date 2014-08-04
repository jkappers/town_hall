define(['angular'], function(angular) {
  'use strict';


  /* Controllers */

  return angular.module('myApp.controllers', [])
    .controller('cardsIndexController', ['$scope', '$rootScope', '$http', '$location', '$timeout', function($scope, $rootScope, $http, $location, $timeout) {


      /* Setup */

      $scope.cards;

      $http.get("./cards.json")
        .success(function(data) {
          $scope.cards = data;
        })
        .error(function(data, status, headers, config) {
          // TODO: Handle error.
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

    }]) // End of cardsShowController
    .controller('unfoundController', ['$scope', '$rootScope', function($scope, $rootScope) {

    }]); // End of unfoundController
});
