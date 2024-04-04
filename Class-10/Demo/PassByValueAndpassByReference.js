// let number1 = 7;
// let number2 = number1 // let number2 = 7
// number1 =9;
// console.log("the result for number2: ", number2) // 7
// console.log("the result for number1: ", number1) // 9

let Person = {
    name: 'Thaer' // Yassein
}
// let copyPerson = person;
// person.name= 'Leen'
// console.log("this is the person object",person.name);// Leen
// //copyPerson.name= 'Yassein'
// console.log("this is the copy person object",copyPerson.name);// Thaer 
// copyPerson.name='anything'
//we use these way to assign the value and not the address of the object
//let copyPerson= {...person}// spread operator
//let copyPerson = Object.assign({}, person)// cloning

let arr1=[1,2,3]
let arr2= arr1;
arr2[0]= 2;
console.log(arr1);
console.log(arr2);
