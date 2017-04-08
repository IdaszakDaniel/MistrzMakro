(function() {
  'use strict';

  angular
    .module('quizProject')
    .service('Macro', MacroModel);

  function MacroModel() {

    var Macro = function(id, name, kcal, protein, carb, fat, img) {
      this.id = id || 0;
      this.name = "";
      this.kcal = kcal || 0;
      this.protein = protein || 0;
      this.carb = carb || 0;
      this.fat = fat || 0;
      this.img = img || "";
    }

    Macro.prototype = {
      setId: function(id) {
        this.id = id;
      },

      setName: function(name) {
        this.name = name;
      },

      setKcal: function(kcal) {
        this.kcal = kcal;
      },

      setProtein: function(protein) {
        this.protein = protein;
      },

      setCarb: function(carb) {
        this.carb = carb;
      },

      setFat: function(fat) {
        this.fat = fat;
      },

      setImg: function(img) {
        this.img = img;
      },
  
    };
    return Macro;
  }
})();