export default class ProductsList {
  constructor() {
  	this.list = [];
  }

  add(id, name, kcal, protein, carb, fat, img){
  	const macros = new Macros(id, name, kcal, protein, carb, fat, img);
  	this.list.push(macros);
  }

  getList(id){
  	return id < this.list.length ? this.list[id] : false; 
  }
}

class Macros {
	constructor(id, name, kcal, protein, carb, fat, img){
		this.id = id;
		this.name = name;
		this.kcal = kcal;
    this.protein = protein;
    this.carb = carb;
    this.fat = fat;
    this.img = img;
	}
}