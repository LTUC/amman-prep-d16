'use strict';

//Count Down in given n by using Itteration way
function countDown(n){
        //        1>0
    for(let i =n; i>0; i--){
        console.log(i)
    }
    console.log('Done')
}

countDown(10)

//Count Down in given n by usingRecursive Way
function countDownRecusively(n){
    if (n <= 0){
        console.log("Done")
    }else{
        console.log(n)
        countDownRecusively(n-1)
    }
}

countDownRecusively(10)


// find the factorial of n in itteration way 

function factOne(n){
      let result=1;
      for(let i =n;i>=1; i--){
       result *=i;
      }
      return result
}

console.log(factOne(3));

// find the factorial number in recursion
function factTwo(n){
    // base case
    if(n == 1 || n ==0){
        return 1;
    }else{
        // recusrion call
        return n*factTwo(n-1)
    }
}

console.log(factTwo(3))