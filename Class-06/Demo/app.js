'use strict';

//================ Arrays ==================

let array = new Array(1,2,3);
let array2=["Thaer", "Shehab","anyname"];
array[0]="Thaer2";
array[1]="Shehab2";
array[2]="anyname2";

let array3=[1,2,"Thaer",2.5, [1,2,3]]

console.log("this is the first way to init an array: ",array[1])
console.log("this is the second way to init an array: ",array2)
console.log(array3[4][0])
console.log("this a length of the array: ",array2.toString())

//========== array method ================
// 1- push: insrt an element at the end of the array
// 2- pop: remove the last element
// 3- shift: remove the first item
// 4- unshift: add item at beginning of the array
// 5- toString: onvert thr array to string

let pushedValue=array2.push("Blue","Black",1,5)
console.log("the array2 after we add blue color: ",array2.toString())
//console.log("The element that pushed to the array is: ", pushedValue) //this will not retrive the pushed element
let x=array2.pop();
console.log("the array2 after we pop: ",array2.toString())
console.log("this is the element that removed from the array using the pop: ",x)
let x2=array2.shift();
console.log("the array2 after we use the shift: ",array2)
console.log("this is the element that removed from the array using the shift: ",x2)
let x3=array2.unshift("anyname","anyname2");
console.log("the array2 after we use the Unshift: ",array2)
//console.log("The element that unshift to the array is: ", x3)// the same case of the push


//================== loops =====================
// let array4=[1,2,3,4,55,874,845,49,26]
// let sum=0;
// // for loop
// for(let i=0; i<array4.length;i++){
//     sum=sum+array4[i];
// }

// console.log("the sum of the all elements: ",sum)

//infit loop
// for(let i=0; i<5; i--){
//     console.log("hi")
// }

// for(;;){
//     console.log("hi")
// }

//============ while loop =================
// let input = prompt("enter your name")
// while(input != "Thaer"){
//     console.log("hello", input)
//     input = prompt("enter your name")
// }


//============ do while =================

// it is the only loop that we should put a ; at the end of the condition
// this is the only loop that run at leat one when the condition is false
//let i=1;
// let input;
// do{
//      input = prompt("enter your name")
//     alert("hello "+input)
//     //console.log("hi i will print: ", i)
// }while(input != "Thaer");


// let text="";
// let i=0;
// do{
//     text+= i +" "; // text=text+i
//     i++;
// }while(i<5);

// console.log("the text after finish from the do while: ", text)

//============= Function ==========================

function sum(numberOfMarks){
    let sum=0
    for(let i=0;i<numberOfMarks.length; i++){
        sum=sum+numberOfMarks[i];
    }
    //console.log("sum form function: ", sum)
    return sum;
}

let allMarks=[10,55,2,4,8,79,79,5]
let result=sum(allMarks);
console.log("sum form function: ", result)

//Anonymouse Function

const sq= function(num){
    return num*num;
}

var sqResult=sq(5);

console.log("the sequare: ", sqResult)

//arrow function

//way number 1
const square2= (x,y) =>{
    return x*y;
}
console.log("the square from square2: ", square2(5,5))

//way number 2
const square3= x => x*x;
console.log("the square from square3: ", square3(3,5,5,5,5,3))
