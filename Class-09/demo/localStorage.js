'use strict';

// console.log(localStorage);

// // save a data: setItem(key , value)
// localStorage.setItem("name" , "lara");
// localStorage.setItem("age" , 25);
// localStorage.setItem("name2", "raghad");

// // get my data: getItem(key)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))

// // remove a specific Item removeItem(key)
// localStorage.removeItem("name2")

// localStorage.setItem("favColor", "black");

// // key(index)
// console.log(localStorage.key(1))

// // clear()

// // localStorage.clear()



// simple example how to save and get the data from LS
let form = document.getElementById("form");
let nameInput = document.getElementById("name");//mais
let hobbyInput = document.getElementById("Hobby");//reading
let h4 = document.getElementById("h4");
h4.style.marginLeft = "33%";
h4.textContent = `I'm ${localStorage.getItem("userName")} 😊 & I love ${localStorage.getItem("hobbyName")} 😉 `
form.addEventListener("submit", submitHandler);
function submitHandler(event) {
    event.preventDefault();
    // save the data 
    localStorage.setItem("userName",nameInput.value)
    // get the data
    let name = localStorage.getItem("userName")
    console.log(name)
    localStorage.setItem("hobbyName" ,hobbyInput.value)
    let hobby =localStorage.getItem("hobbyName")
    console.log(hobby)
    //  ${nameInput.value} : the way that is abdullah kdad ask about
    // h4.textContent = `I'm ${nameInput.value} 😊 & I love ${hobbyInput.value} 😉 `
    h4.textContent = `I'm ${name} 😊 & I love ${hobby} 😉 `
}























