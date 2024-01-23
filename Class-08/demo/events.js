'use strict';

let buttonElement = document.getElementById("myBtn"); //<button id ="myBtn">Click Me!</button>
console.log(buttonElement)

// htmlTag.addEventListener("event" , call Back function)
// button
buttonElement.addEventListener("click" , clickHandler)
buttonElement.addEventListener('mousemove' , moveHandler)

function clickHandler(event){
    console.log(event);
    alert("hello from button");
}

function moveHandler(){
    console.log("move event")
}