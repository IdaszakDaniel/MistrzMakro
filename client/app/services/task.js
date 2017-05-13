class Task {
  constructor(amount, date, currencyRate) {
    this.amount = amount,
    this.date = date,
    this.currencyRate = currencyRate
  }
}

export default class TasksList {
  constructor() {
    this.list = list = [];
  }

  add(amount, date, currencyRate) {
    const task = new Task(amount, date, currencyRate);
    this.list.push(task);
  }

  chuj() {
    return 'chuj';
  }

}
