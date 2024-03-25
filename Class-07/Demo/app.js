'use strict';

// let roaa = {
//     firstName: "Roaa",
//     lastName: "Abualigah",
//     age: 27,
//     gender: "female",
//     fullName : function() {
//         return `FullName : ${this.firstName} ${this.lastName}`; //Interpolation, `` this mean backtick 
//     }
// }

// let aballah = {
//     firstName: "Abdalla",
//     lastName: "Ahmad",
//     age: 20,
//     gender: "male",
//     fullName : function() {
//         return "FullName : " + this.firstName +" "+ this.lastName;
//     }
// }

// let alaa = {
//     firstName: "Alaa",
//     lastName: "Hmaidat",
//     age: 25,
//     gender: "female",
//     fullName : function() {
//         return "FullName : " + this.firstName +" "+ this.lastName;
//     }
// }

// console.log(roaa.lastName); //Dot notation
// console.log(roaa.fullName()); //Dot notation

// console.log(alaa["age"]); //Bracket Notation

// *************************************** Constructor **************************** 
// what if I wanna create a group of people, you might say I can copy the person object and change the values for each one 
// but in this way I'm reapeting my code, and I'll have thousends lines of code and this is not efficient 
// to solve this problem, we have something called constructor : 
// lets take an example : 
// it is a function (it is a "blueprint" for creating many objects of the same "type".)

//I Don't want to repeat myself -> I will use a "Blueprint" (constructor)
function Person(firstName, lastName, age, gender, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality || "Jordanian";
    this.fullName = function () {
        return `FullName : ${this.firstName} ${this.lastName}`; //Interpolation
    }

}

/* insted each object to have the fullname 
function i use the prototype to not repeat the createtion of the fullname function 
each time i create an object
*/
Person.prototype.fullName2 = function () {
    return `FullName : ${this.firstName} ${this.lastName} : prototype`; //Interpolation
}

let roaa = new Person('Roaa', "Abualigah", 27, "female", "Syrian");
let alaa = new Person('alaa', "Hmaidat", 25, "female");
let aballah = new Person('Abdalla', "Ahmad", 20, "male");
let aballah2 = new Person('Abdalla'); // undefined for the other properities

console.log(roaa);
console.log(alaa);
console.log(aballah.fullName2());
