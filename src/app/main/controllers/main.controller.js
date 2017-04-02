(function() {
  'use strict';

  angular
    .module('quizProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, GetJson, $http) {

    var promiseAnswers = GetJson.getData();

    promiseAnswers.then(function(data){
      data.questions.forEach(function(answer) {
        console.log(answer.id);
        console.log(answer.name);
        console.log(answer.kcal);
        console.log(answer.protein);
        console.log(answer.carb);
        console.log(answer.fat);
      });
    });




  };
})();
