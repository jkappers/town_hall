define([
  "angular",
  "app",
  "causes/posts/posts-index/posts-index-controller",
  "causes/posts/posts-list/posts-list-controller",
  "causes/posts/posts-new/posts-new-controller"
],
function(angular, app){
  app.config(function($stateProvider){
    $stateProvider
      .state("causes", {
        url: "/causes",
        views: {
          "@": {
            templateUrl: "/app/causes/posts/posts-index/posts-index.html",
            controller: "PostsIndexController"
          },
          "form@causes": {
            templateUrl: "app/causes/posts/posts-new/posts-new.html",
            controller: "PostsNewController"
          },
          "list@causes": {
            templateUrl: "app/causes/posts/posts-list/posts-list.html",
            controller: "PostsListController"
          }
        }
      });
  })
});
