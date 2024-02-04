'use strict';

//1. create the promise : builtin object 
let recordStatus=false;
let record = new Promise((resolve, reject) => {
    if(recordStatus==true){
        resolve("record uploaded successfully")
    }else{
        reject("record faild to upload");
    }
})
//2. handle this promise 
//promise.then().catch()

record
.then((message)=>{
    console.log(message);

})
.catch((message)=>{
    console.log(message);
})