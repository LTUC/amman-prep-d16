function fact(n){

    if(n==0 || n==1){
        return 1;
    }
    var result=n;
    while(n>1){
        result = result * (n-1)
        n--;
    }
    return result;
}
console.log(fact(0));


function factorial(n){

   if(n == 1 || n ==0){
    return 1
   }else{
    return n * factorial(n-1)
   }
}
console.log("this result from factorial: ",factorial(5));
