'use strict';
// global scope 
let r =10;


// console.log(x)
// block scope 
if(true){
    let  x = "I am a block scope variable with cont  "
    console.log(x) 

    console.log(r)

}
// console.log(x);

//function scope 

function adder (a,b){

console.log(r)

    let result;
    if (a+b > 10){
         result = 5
    }else {
        result = 50
    }

    console.log(result)//50 
}

adder(2,4);


// const  vs. let 

const  first_name = 'Raghad';

first_name= 'Rania';

