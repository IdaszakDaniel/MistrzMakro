(function() {
  'use strict';

  angular
    .module('quizProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, GetJson, $http, Macro, ProductModel) {

    var promiseAnswers = GetJson.getData();

    var Model = new Macro();
    $scope.Model = Model;
        
    promiseAnswers.then(function(data){
      data.questions.forEach(function(answer) {
        $scope.Model.setId(answer.id);
        $scope.Model.setName(answer.name);
        $scope.Model.setKcal(answer.kcal);
        $scope.Model.setProtein(answer.protein);
        $scope.Model.setCarb(answer.carb);
        $scope.Model.setFat(answer.fat);
        $scope.Model.setImg(answer.img);

        ProductModel.addItem($scope.Model);
        console.log(ProductModel.listOfItems());
        $scope.Model = new Macro();
      });
    });

  };
})();
