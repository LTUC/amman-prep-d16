'use strict';

function Drink(name, ingredients, imgPath, isCold, isHot) {
    this.name = name;
    this.ingredients = ingredients;
    this.imgPath = imgPath;
    this.isHot = isHot;
    this.isCold = isCold;
    this.price = 0;
}

Drink.prototype.claculatePrice = function (min, max) {
    this.price = getRandomInt(min, max);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log("this is a reandom number: ", Math.random())

Drink.prototype.render = function() {

    const container = document.getElementById('drinks'); /*we need to take the element that will act as a 
                                                container where all the drink information will be displayed.*/
    console.log(container);

    // 1. create the element
    // 2. append it to it's parent
    // 3. add text content to it || attribuates

    const divEl = document.createElement('div');
    container.appendChild(divEl);

    // display drink name 
    const nameEl = document.createElement('h3');
    divEl.appendChild(nameEl);
    nameEl.textContent = this.name;

    //display drink price
    const priceEl = document.createElement('h5');
    divEl.appendChild(priceEl);
    priceEl.textContent = `Price: ${this.price}$`

    // display the drink ingredients
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    ulEl.textContent = "Ingredients: "

    const ingArr = this.ingredients.split(',');
    for(let i = 0; i< ingArr.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = ingArr[i];
    }

    //display the drink img
    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imgPath);
    imgEl.width = "150";
    imgEl.height = "150";

    //display if the drink is hot and/or cold
    const pEl = document.createElement('p');
    divEl.append(pEl);

    if(this.isCold && this.isHot) {
        pEl.textContent = `${this.name} is available Hot and Cold`; //interpolation
    } else if(this.isCold) {
        pEl.textContent = `${this.name} is available only Cold`;
    } else if (this.isHot) {
        pEl.textContent = `${this.name} is available only Hot`;
    } else {
        pEl.textContent = `${this.name} is not available`;
    }

    //display a line between the drinks
    const hrEl = document.createElement('hr');
    divEl.appendChild(hrEl);

}


//Events
let drinkForm = document.getElementById("drinkForm");
drinkForm.addEventListener('submit', addNewDrinkHandler);

function addNewDrinkHandler(event) {
    event.preventDefault();
    console.log(event);
    let drinkName = event.target.name.value;
    let ingredients = event.target.ingredients.value;
    let imgPath = event.target.imgUrl.value;
    let isCold = event.target.isCold.checked;
    let isHot = event.target.isHot.checked;

    let newDrink = new Drink(drinkName,ingredients,imgPath,isCold,isHot);
    newDrink.claculatePrice(1,10);
    newDrink.render();
}