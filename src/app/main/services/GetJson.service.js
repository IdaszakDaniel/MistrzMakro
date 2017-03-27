(function() {
  'use strict';

  angular
    .module('quizProject')
    .service('GetJson', GetJson);

    function GetJson($http, $q) {
      var _data = null;
      return {

        loadJson: function() {
          return $http.get('answers.json').then(function(data) {
            _data = data.data;
          });
        },

        getQuestion: function() {
          return _data.question;
        }
        
      };
    }
})();
