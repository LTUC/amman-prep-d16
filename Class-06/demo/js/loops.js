'use strict';
// console.log('hi')
var seasons = ['spring', 'summer', 'Autumn', 'winter',];



for (var i=0; i< seasons.length; i++ ){
    console.log(seasons[i]);
}

//1. collect user answer :
// var userAnswer = prompt('Please enter your favorite season');

// 2. searching for the value in the seasons array :

// for(var i=0; i< seasons.length; i++){
//     if (userAnswer == seasons[i]){
//         console.log(" answer found ");
//     }else{

//         // break;
//         continue;
        
//     }
// }
// console.log(" answer not  found !!");

   
// continue // break 


// another solution :
// for (let i = 0; i<seasons.length; i++) {
//     if (seasons[i] === userAnswer) {
//         console.log("It Exsits");
//         break;
//     }
//     if (i === seasons.length - 1) console.log("It doesn't exist");
// }


// FUMCTION : DRY
// Declaration : 
function  funcName(params){
    // code 
    // return output 
}

//CALLING 
funcName();

//1. first Example : write a function that takes a number and return the square of the number

function square(num){
    var result =  num*num;
    return result;
}

//call 
var squareOfFour = square(4)

console.log(squareOfFour);
console.log(square(10));


// 2. second example : function with no input/output  just print "Hello" :

// 1. declare :
function sayHello(){
    console.log("Hello");
}

//2. call 
sayHello();

// 3. 
function userAnswerfounder(userAnswer, arr){
    // var flag = false;
    for(var i=0; i< arr.length; i++){
        if (userAnswer == seasons[i]){
            // console.log(" answer found ");
            return " answer found ";
           ;
        }
            // flag = true
        // }else{

        //     // break;
        //     continue;
            
        // }
    }
    return " answer not found"
    // if(flag != true){

    //     console.log("answer  not found ");
    // }
}
var userAnswer = "spring"

console.log(userAnswerfounder(userAnswer, seasons));

// Arrow functions :
// old way :
function square(number){
    return number * number 
}
square(10)

// new way :
var squareArrow = (number)=>{
    return number * number  
}

console.log(squareArrow(100))
// Tip : only for arrow function If I have one line of code I can remove curly braces & return keyword 

var secondSquareArrow = number=>  number * number  
