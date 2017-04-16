(function() {
  'use strict';

  angular
    .module('quizProject')
    .service('ProductModel', ProductModel);

  function ProductModel() {
    var _list = [];

    return {
      addItem: function(model) {
        return _list.push(model);
      },

      listOfItems: function(){
        return _list;
      },

      getQuestion: function(id) {
        if(id < _list.length) {
          return _list[id];
        } else {
          return false;
        }
      }

    }
  }
})();
