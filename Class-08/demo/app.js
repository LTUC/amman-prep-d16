'use strict';

document.title="ASAC Coffee House"
// third step : create a global array

let allDrinks = [];

// first Step : create constructor

function Drink(name,ingredients,img,cold,hot) {
    this.drinkName = name;
    this.ingredients = ingredients;
    this.image = img;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0;
    allDrinks.push(this)
}

// Fourth Step : create a prototype function

Drink.prototype.renderDrinks = function () {
    console.log(`Drink Name : ${this.drinkName}`)
    document.write(`<p>Drink Name : ${this.drinkName}</p>`)
    document.write(`<p>Drink Price : ${this.price}</p>`)


}

// Generate Random Salaries 

Drink.prototype.generateRandomNum = function (min ,max) {
    
    this.price= Math.floor(Math.random() * (max - min + 1) + min);
}


// second step : create objects

let americano = new Drink("americano", ["hot water", "espresson"], "./assets/americano.png", false, true);
let latte = new Drink("latte", ["water", "espresson", "milk", "sugar"], "./assets/latte.png", true, true);
let turkish = new Drink("turkish", ["hot water", "coffe"], "./assets/americano.png", false, true)
let mocha = new Drink("mocha", ["hot water", "coffe"], "./assets/americano.png", false, true)

// loop through allDrinks array

for (let i = 0; i < allDrinks.length; i++){
    allDrinks[i].generateRandomNum(2, 6);
    allDrinks[i].renderDrinks(); 
    
}