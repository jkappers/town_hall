define(["app"], function(app){
  return app.service("PostsContext", function(Post){
    var _posts = [];

    Post.getList().then(function(posts){ _posts = posts });

    return {
      posts: function(){
        return _posts;
      },
      prepend: function(post) {
        _posts.unshift(post);
      }
    };
  })
})
