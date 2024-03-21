'use strict'

// await is a keyword to force javascript to work in sync process
// async function test(){
//   // await //send a request to a server
//     console.log(requestresult)
// }

// let a=1;
// let b=2;

// console.log(c);

// test();

function doneAftersec(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Done after 5 sec");
        }, 15000);
    });
}

async function asyncCall(){
    console.log("Done direclty")
    const result= await doneAftersec();
    console.log(result);
}

asyncCall();