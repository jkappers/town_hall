define(["app", "restangular"], function(app) {
  return app.factory("Post", function(Restangular) {
    return Restangular.service("posts");
  });
});
