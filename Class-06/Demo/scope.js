'use strict';

// js has 3 types of scope
//1. Block scope
//2. function scope
//3. Global Scope

//hoisting: move all the declaration at the top of the file

//3.Global scope
let anyVar=5;
test();
//Block scope
{
    let x=1;
    let y=5;
}
console.log("the scope number 1: ", x) // this wll not work


//2. fiunction scope
function test(){
    let result=110;
    console.log(result+anyVar);
}
//console.log(result); //this one will not work 

//3.Global scope
//let anyVar=5; // it is moved 