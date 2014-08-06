define([
  "angular",
  "app"
],
function(angular, app){
  return app.controller("PostsListController", function($scope, $http, PostsContext){

    $scope.context = PostsContext;

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
  })
});
