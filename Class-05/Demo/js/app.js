'use strict';
//Variable and datatype

var numberOne=10;
var number2= 20;
var sum= numberOne+number2;
console.log("sum of the tow numbers: ", sum);

var name="Thaerrr";
var name2= 'Abd';
var allNames= name+" "+name2;

console.log("this is all names: ", allNames);
const oneConstantVariable=5;

var booleanVar=true;
var booleanVar2=false;
var result = booleanVar && booleanVar2;
var result2= booleanVar || booleanVar2;

console.log("the result when we go with &&: ", result);
console.log("the result when we go with || is: ", result2);

var testThis=undefined;
var testThis2=null;

let thisVar=55;
//oneConstantVariable=6;

//popup box

//1- alert
alert("welcome from Code Titans team")

//2- prompt
var promptResult= prompt("please Enter your name")

//3- confirm
var confirmResult= confirm("are you sure this is your name")

console.log("your name after confirmation: ", promptResult)

//if statemnt
if(name == "Thaer"){
    console.log("the name is Thaer")
}else if(name == "Thaerrr"){
    console.log("the name is Thaerrr")
}

//switch statement

let dayOfweek=8;
let dayy=1; 
switch(dayOfweek){
    
    case 1: console.log("It's Monday")
    break;
    case 2: console.log("It's Tuesday")
    break;
    case 3: console.log("It's Wednesday")
    break;
    case 4: console.log("It's Thrusday")
    break;
    case 5: console.log("It's Friday")
    break;
    case 6: console.log("It's Saturday")
    break;
    case 7: console.log("It's Sunday")
    break;
    default:
        console.log("invalid day of week")
}

//objects

let myobj= {first: "123", second: 456, third: true}
myobj.first;
myobj["first"]

console.log("the first from the myobj", myobj.first)