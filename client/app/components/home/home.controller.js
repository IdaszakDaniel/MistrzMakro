import moment from 'moment';

class HomeController {

  // /**
  // * @param {TasksList} taskList
  // */

  constructor(taskList) {
    "ngInject";
    this.convertedCurrency = [];
  }

  calculateToPLN() {
    console.log(taskList.chuj());
    // this.convertedCurrency.push(task);
    // console.log(this.convertedCurrency);
    // this.sendData(this.amount, this.actualDate(), this.currencyRate());
  }

  currencyRate() {
    return 4.2*(1 + Math.floor((Math.random() * 100) + 1)/1000);
  }

  actualDate(){
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }
}

export default HomeController;
