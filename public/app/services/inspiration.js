define(["app"], function(app){
  return app.service("Inspiration", function(){
    var quotes = [
      "Keep your face to the sunshine and you cannot see a shadow.",
      "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
      "If you're not making mistakes, then you're not doing anything.",
      "My optimism wears heavy boots and is loud."
    ];

    return {
      message: function(){
        return quotes.sort(function(){ return 0.5 - Math.random() })[0];
      }
    }
  })
})
