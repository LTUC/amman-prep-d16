'use strict';

document.title = "ASAC Coffee House"
// create a global array

let allDrinks = []; //stores the objects [static objs + new form obj]
// Get <section> tag from html file by it's id
let secEle = document.getElementById("secTag");
let tableElment = document.getElementById("table")
let formElement = document.getElementById("form")

// create constructor

function Drink(name, ingredients, img, cold, hot) {
    this.drinkName = name;
    this.ingredients = ingredients;
    this.image = img;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0;
    allDrinks.push(this)
}

//create a prototype function

Drink.prototype.renderDrinks = function () {
    let divEle = document.createElement("div");
    secEle.appendChild(divEle)
    // create h2 for the drink name
    let h2Element = document.createElement("h2");
    h2Element.textContent = `Drink Name : ${this.drinkName}`
    divEle.appendChild(h2Element);

    // create an img for the drink
    let imgElement = document.createElement("img")
    imgElement.src = this.image;
    divEle.appendChild(imgElement);
    imgElement.style.width = "250px";

    // create a ul tag
    let ulElement = document.createElement("ul");
    divEle.appendChild(ulElement);

    // create li's tags
    for (let i = 0; i < this.ingredients.length; i++) {
        //create li
        let liElement = document.createElement("li");
        liElement.textContent = this.ingredients[i]
        ulElement.appendChild(liElement);

    }


}

//create a renderDrinks function 
Drink.prototype.renderTable=function(){

  let trEle =document.createElement("tr");
  tableElment.appendChild(trEle);

  let tdEle1 = document.createElement("td");
  tdEle1.textContent= this.drinkName;
  trEle.appendChild(tdEle1);


  let tdEle2 = document.createElement("td");
  tdEle2.textContent= this.price;
  trEle.appendChild(tdEle2);



}

// Generate Random Salaries 

Drink.prototype.generateRandomNum = function (min, max) {

    this.price = Math.floor(Math.random() * (max - min + 1) + min);
}


let americano = new Drink("americano", ["hot water", "espresson"], "./assets/americano.jpg", false, true);
let latte = new Drink("latte", ["espresson", "milk", "sugar"], "./assets/latte.jpg", true, true);
let turkish = new Drink("turkish", ["hot water", "coffe"], "./assets/turkish.jpg", false, true)
let mocha = new Drink("mocha", ["hot water", "coffe"], "./assets/mocha.jpg", false, true)



formElement.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault();
    let drinkName = event.target.Dname.value;
    let img = event.target.img.value;
    let ingredients = event.target.ingredients.value.split(",");

    let isCold = event.target.cold.checked;
    let isHot = event.target.hot.checked;
    let newDrink = new Drink(drinkName, ingredients, img, isCold, isHot);
    console.log(newDrink)
    newDrink.generateRandomNum(2, 6);
    newDrink.renderDrinks();
    newDrink.renderTable();
    saveData(allDrinks);

}

// create a function to save my Data in LS
function saveData(data){
   let stringArr = JSON.stringify(data);
  localStorage.setItem("drinks" ,stringArr)

}


// create a function to get our data from the LS
console.log( "array before LS", allDrinks)
function getData(){
   let retrivedArr= localStorage.getItem("drinks") //array of strings coming from LS
   let objArr = JSON.parse(retrivedArr)  // array of objs 
   console.log("array after LS"+retrivedArr)
   console.log("array after parse" + objArr)
   for(let i=4; i<objArr.length; i++){
    // function Drink(name, ingredients, img, cold, hot) {
   new Drink(objArr[i].drinkName,objArr[i].ingredients,objArr[i].img, objArr[i].cold, objArr[i].hot)
   }
 renderAll()
}

getData();

function renderAll() {

    // loop through allDrinks array

    for (let i = 0; i < allDrinks.length; i++) {
        allDrinks[i].generateRandomNum(2, 6);
        allDrinks[i].renderDrinks();
        allDrinks[i].renderTable();

    }
}

// renderAll();