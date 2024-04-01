'use strict';
var drinkArray= []

function Drink(name, ingredients, imgPath, isCold, isHot) {
    this.name = name;
    this.ingredients = ingredients;
    this.imgPath = imgPath;
    this.isHot = isHot;
    this.isCold = isCold;
    this.price = 0;
     drinkArray.push(this);
}
console.log("is this an array: ",Array.isArray(drinkArray))
Drink.prototype.claculatePrice = function (min, max) {
    this.price = getRandomInt(min, max);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log("this is a reandom number: ", Math.random())

function render(){

    const container = document.getElementById('drinks'); /*we need to take the element that will act as a 
                                              container where all the drink information will be displayed.*/
    container.innerHTML = '';
   
    getDrinks();
    // 1. create the element
    // 2. append it to it's parent
    // 3. add text content to it || attribuates

    if(drinkArray == null){
        drinkArray = []
    }
    for(let i =0; i< drinkArray.length; i++){
        const divEl = document.createElement('div');
        container.appendChild(divEl);
    
        // display drink name 
        const nameEl = document.createElement('h3');
        divEl.appendChild(nameEl);
        nameEl.textContent = drinkArray[i].name;
    
        //display drink price
        const priceEl = document.createElement('h5');
        divEl.appendChild(priceEl);
        priceEl.textContent = `Price: ${drinkArray[i].price}$`
    
        // display the drink ingredients
        const ulEl = document.createElement('ul');
        divEl.appendChild(ulEl);
        ulEl.textContent = "Ingredients: "
    
        const ingArr = drinkArray[i].ingredients.split(',');
        for(let i = 0; i< ingArr.length; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = ingArr[i];
        }
    
        //display the drink img
        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src',drinkArray[i].imgPath);
        imgEl.width = "150";
        imgEl.height = "150";
    
        //display if the drink is hot and/or cold
        const pEl = document.createElement('p');
        divEl.append(pEl);
    
        if(drinkArray[i].isCold && drinkArray[i].isHot) {
            pEl.textContent = `${drinkArray[i].name} is available Hot and Cold`; //interpolation
        } else if(drinkArray[i].isCold) {
            pEl.textContent = `${drinkArray[i].name} is available only Cold`;
        } else if (drinkArray[i].isHot) {
            pEl.textContent = `${drinkArray[i].name} is available only Hot`;
        } else {
            pEl.textContent = `${drinkArray[i].name} is not available`;
        }
    
        //display a line between the drinks
        const hrEl = document.createElement('hr');
        divEl.appendChild(hrEl);
    }
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

    let newDrink = new Drink(drinkName,ingredients,imgPath,isCold,isHot);7
   // console.log("this is an array: ",Array.isArray(drinkArray));
    //drinkArray.push(newDrink);
    newDrink.claculatePrice(1,10);
    console.log(drinkArray)
    let jsonDrink= JSON.stringify(drinkArray)
  localStorage.setItem("allDrinks", jsonDrink)
  //console.log("this is the item as josn from local storage: ", localStorage.getItem("jsonDrink"))

    // ============= here where our problem happend Cuz this will store the whole object
    // localStorage.setItem("drink", newDrink)
    // console.log(localStorage.getItem("drink"))
    render();
}

// ==========storing and retriving from local storage===========
//localStorage.setItem("userName", "Thaer")
//console.log("this is the value that is stored from the local storage: ", localStorage.getItem("userName"))

function getDrinks(){
    // remmber this was Cuz i delete the local storage so mayby no need for it
    // if(drinkArray == null){
    //     drinkArray = []
    // }
    let jsonDrink= localStorage.getItem("allDrinks")
    drinkArray = JSON.parse(jsonDrink);
    // console.log("this is the json that came from the local storage and convert back to an obj",
    // drinkArray)
    // console.log(drinkArray)
}
getDrinks();

render();