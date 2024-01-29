'use strict';

// Pass by Value 
let number = 5;
console.log('outside function',number);
function increment(num){
     //num=num+1
    num+=1
    console.log("inside function" , num)
}
increment(number);


// Pass by Reference
let obj1={
    value:9
}
// increment2(obj1)
console.log('before', obj1.value);
function increment2(obj){
    obj.value+=1
    console.log('inside', obj.value);
}
increment2(obj1)
console.log('outside', obj1.value);