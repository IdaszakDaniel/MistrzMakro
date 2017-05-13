export default class Quiz {
  /**
   * @param {ProductsList} productsList
   */
  constructor(productsList, GetJson) {
    "ngInject";
    this.productsList = productsList;
    this.GetJson = GetJson;

    this.id = 0;
    this.quizEnd = true;
    this.inProgress = false;
    this.Res = [];
    this.id = 0;
    this.name = "";
    this.kcal = "";
    this.protein;
    this.carb;
    this.fat;
    this.img = "";
    this.answerMode = false;

    this.init();
  }

  init(){
    let answers = this.GetJson.getData();
    answers.then(data => {
      data.questions.forEach(answer => {
        this.productsList.add(answer.id,
                              answer.name,
                              answer.kcal,
                              answer.protein,
                              answer.carb,
                              answer.fat,
                              answer.img);
      });
    });
  }

  start() {
    this.id = 0;
    this.quizEnd = false;
    this.inProgress = true;
    this.getQuestion();
    console.log(this.inProgress);
  }

  check(){
    let test = function(modelData, viewData){
      if(!viewData) return "";
      if(modelData == viewData) return "idealnie!";
      return modelData > viewData ? modelData - viewData + " za mało" : viewData - modelData + " za dużo";
    };
    this.Res = [];
    this.answerMode = false;
    this.Res[0] = test(this.kcal, this.macro1);
    this.Res[1] = test(this.protein, this.macro2);
    this.Res[2] = test(this.carb, this.macro3);
    this.Res[3] = test(this.fat, this.macro4);
  }

  getQuestion() {
    var q = this.productsList.getList(this.id);
    if(q) {
      this.name = q.name;
      this.kcal = q.kcal;
      this.protein = q.protein;
      this.carb = q.carb;
      this.fat = q.fat;
      this.img = q.img;
      this.answerMode = true;
    } else {
      this.quizEnd = true;
    }
  }

  nextQuestion() {
    this.id++;
    this.getQuestion();
  }

  reset() {
    this.inProgress = false;
    this.score = 0;
  }

}
