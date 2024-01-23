'use strict';

document.title = "ASAC Coffee House"
// third step : create a global array

let allDrinks = []; //stores the objects
let divElemet = document.getElementById("parentDiv")
// console.log(divElemet)
let formElement = document.getElementById("form")
// console.log(formElement)
// first Step : create constructor

function Drink(name, ingredients, img, cold, hot) {
    this.drinkName = name;
    this.ingredients = ingredients; // [water, sugar , coffee]
    this.image = img;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0;
    allDrinks.push(this)
}

// Fourth Step : create a prototype function

Drink.prototype.renderDrinks = function () {

    // create h2 for the drink name
    let h2Element = document.createElement("h2");
    h2Element.textContent = `Drink Name : ${this.drinkName}`
    divElemet.appendChild(h2Element);

    // create an img for the drink
    let imgElement = document.createElement("img")
    imgElement.src = this.image;
    divElemet.appendChild(imgElement);
    imgElement.style.width = "250px";

    // create a ul tag
    let ulElement = document.createElement("ul");
    divElemet.appendChild(ulElement);

    // create li's tags
    for (let i = 0; i < this.ingredients.length; i++) {
        //create li
        let liElement = document.createElement("li");
        liElement.textContent = this.ingredients[i]
        ulElement.appendChild(liElement);

    }


}

// Generate Random Salaries 

Drink.prototype.generateRandomNum = function (min, max) {

    this.price = Math.floor(Math.random() * (max - min + 1) + min);
}


// second step : create objects
// assets/americano.jpg
let americano = new Drink("americano", ["hot water", "espresson"], "./assets/americano.jpg", false, true);
let latte = new Drink("latte", ["water", "espresson", "milk", "sugar"], "./assets/latte.jpg", true, true);
let turkish = new Drink("turkish", ["hot water", "coffe"], "./assets/latte.jpg", false, true)
let mocha = new Drink("mocha", ["hot water", "coffe"], "./assets/americano.jpg", false, true)

// loop through allDrinks array

for (let i = 0; i < allDrinks.length; i++) {
    allDrinks[i].generateRandomNum(2, 6);
    allDrinks[i].renderDrinks();

}


formElement.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault();
    // console.log(event)
    // alert("hello from submit handler function");
    let drinkName = event.target.Dname.value;  //spanish latte
    let img = event.target.img.value; // spanish img
    let ingredients = event.target.ingredients.value.split(","); //coffee , water

    let isCold = event.target.cold.checked;  // true
    let isHot = event.target.hot.checked; // false 
    //  console.log(drinkName , isHot , ingredients)
    // function Drink(name,ingredients,img,cold,hot) {
    let newDrink = new Drink(drinkName, ingredients, img, isCold, isHot);
    console.log(newDrink)
    newDrink.renderDrinks();

}