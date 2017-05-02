(function() {
  'use strict';

  angular
    .module('quizProject')
    .directive('quiz', quiz);

  function quiz(ProductModel) {
      return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'app/main/directive/html/macro.directive.html',
        link: function(scope, elem, attrs) {

          scope.start = function() {
            scope.id = 0;
            scope.quizEnd = false;
            scope.inProgress = true;
            scope.getQuestion();
          };

          scope.reset = function() {
            scope.inProgress = false;
            scope.score = 0;
          };

          scope.check = function(){
            scope.Res = [];
            scope.answerMode = false;
            scope.Res[0] = test(scope.kcal, scope.macro1);
            scope.Res[1] = test(scope.protein, scope.macro2);
            scope.Res[2] = test(scope.carb, scope.macro3);
            scope.Res[3] = test(scope.fat, scope.macro4);
          };

          var test = function(modelData, viewData){
            if(modelData > viewData) return modelData - viewData + " za mało";
            if(modelData < viewData) return viewData - modelData + " za dużo";
            if(modelData == viewData) return "idealnie!";
          };

          scope.getQuestion = function() {
            var q = ProductModel.getQuestion(scope.id);
            if(q) {
              scope.name = q.name;
              scope.kcal = q.kcal;
              scope.protein = q.protein;
              scope.carb = q.carb;
              scope.fat = q.fat;
              scope.img = q.img;
              scope.answerMode = true;
            } else {
              scope.quizEnd = true;
            }
          };

          scope.nextQuestion = function() {
            scope.id++;
            scope.getQuestion();
          }

          scope.reset();
        }
      }
    };
})();
