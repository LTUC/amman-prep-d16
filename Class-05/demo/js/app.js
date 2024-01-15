// Declearing Variables 
// var , let , const
var firstName = "batool"
console.log(firstName);

console.log("hii from my students");

var firstLetter = 'A';
var secondLetter = 'b';
var blodCategory = firstLetter + secondLetter;

console.log(blodCategory);

console.log("Anas");

// Popup Boxes
// 1- Alert Box
alert("My Prep Course");

// 2- Confirm Box

var confirmMsg = confirm("are you python student?")
console.log(confirmMsg);

// 3- prompt Box

var userName = prompt("please enter your name..","Example: Mais")
console.log(userName)

// Conditional Statement "If - else if - else"

var number1 = 6;

if (number1 == "5") {
    console.log("hello");
} else if (number1 === 6) {
    console.log("the number is 6");
}else {
    console.log("the number is not 5")
}


// logical operator 

var userName = prompt("kindly enter your name");
var userAge = prompt("kindly enter your age");

//   Batool                  27

//  Raghad                   27
if (userName == "Batool" || userAge > 25) {
    console.log("hello batool")
} else {
    console.log("who you are?")
}

// Ternary if 

userName == "Batool" ? console.log("Hello Batool") : console.log("who you are?");