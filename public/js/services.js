define(['angular', 'app'], function(angular, app) {
  'use strict';

  return angular.module('myApp.services', [])
    .service("CardCollection", function(){
      var _items = [];

      return {
        prepend: function(card){
          _items.unshift(card)
        },
        append: function(card){
          _items.push(card)
        },
        cards: function(arr) {
          arr && (_items = arr)
          return _items;
        }
      }
    })
    .service('Encouragement', function(){
      var text    = ["Be Heard", "Make it Known", "For the People", "Testify"]
        , content = ["We're freaking amazing!", "I have the best peers anyone could possibly hope to have!", "I couldn't be happier!"]

      return {
        content: function(){
          return content[Math.floor(Math.random()*content.length)];
        },
        text: function(){
          return text[Math.floor(Math.random()*text.length)];
        }
      }
    });
});
