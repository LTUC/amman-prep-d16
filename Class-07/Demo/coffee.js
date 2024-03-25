'use strict';

function Drink(name, ingredients, isCold, isHot, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;
}

Drink.prototype.render = function() {
    document.write(`${this.name} was added to the coffee menu  \r`);
}

let espresso = new Drink('espresso', ['coffee','water'],false, true,"5$");
let latte = new Drink('latte', ['coffee','water','milk'],true, true,"5$");

espresso.render();
latte.render();

console.log(espresso)