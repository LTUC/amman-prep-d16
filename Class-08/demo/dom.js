'use strict';

let h1Element=document.getElementsByTagName("h1"); //<h1>Test</h1>
console.log(h1Element[0]); 

h1Element[0].id="myH1"
console.log(h1Element[0]); 

let pElement = document.getElementById("par"); //<p id="par">this is par</p>
console.log(pElement)

let divEle =document.getElementsByClassName("myDiv");//[divOne,divTwo]
console.log(divEle)

// divEle[1].innerText = "div2"
divEle[1].textContent="my div 2"
divEle[1].style.color="blue"
divEle[1].style.background="black"

let secElement= document.getElementById("mysection")

// createElemnt

// 1- create an img tag
let imgElement = document.createElement("img");

console.log(imgElement)

// 2- give it a content 
imgElement.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUXLHLjdmV5wPTI_UboXkzZCi5S013PPA2Q&usqp=CAU"
imgElement.alt="python image"
// 3- append to it's parent 

secElement.appendChild(imgElement);