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

    }
  }
})();