define([
  "angular",
  "app",
  "services/inspiration"
],
function(angular, app){
  return app.controller("PostsNewController", function($scope, Inspiration, Post, PostsContext){
    $scope.inspiration = {
      message: Inspiration.message()
    }

    $scope.save = function(){
      var card = angular.copy($scope.card)
      card.votes = 0;
      $scope.card = null;
      Post.post({card: card});
      PostsContext.prepend(card);
    }
  })
});
