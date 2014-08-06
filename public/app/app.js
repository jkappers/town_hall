define([
  "angular",
  "angularResource",
  "angularAnimate",
  "restangular",
  "uiRouter"  
],
function(angular){
  var application = angular.module("Collective", ["ngResource", "ngAnimate", "restangular", "ui.router"]);

  application.run(function(Restangular){
    Restangular.setRequestSuffix(".json")
  })

  return application;
});
