(function() {
  'use strict';

  angular
    .module('quizProject')
    .service('GetJson', GetJson);

    function GetJson($http, $q) {
      return {
        getData:  function() {
          return $http.get('answers.json').then(function(response) {
        return response.data;
      });
        }
      };
    }
})();
