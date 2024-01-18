'use strict';

console.log('i am alive ');

//first : Arrays 
var  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'friday'];

console.log(weekDays);

// access elements in  the array [index]
var secondDay = weekDays[1];
console.log(secondDay);
// var lastElement = weekDays[weekDays.length-1];
// var lastElement = weekDays[5];

// var lastElement = weekDays.at(-1);// search about it 


// console.log(lastElement);

//  add to arrays :
// 1.push : add to the end of array

var topics = ['JS']
topics.push('html');

// 2.unshift : add to the beginning of array

topics.unshift('CSS');

// remove elements :
// 3.pop : remove from the end of array

topics.pop();

// 4.shift : remove from the beginning of array
topics.shift();
console.log(topics);
// 5.length method 
console.log(topics.length); 

// 6.toSring : convert array elements to one single string separated by comma

var myString = weekDays.toString();
var mySecondString = weekDays.toString();

console.log(myString);
// console.log(typeof myString);
var myData = weekDays.join('-')
console.log( typeof myData);

// console.log(typeof weekDays);


// var x = ['r', 'a', 'l', ] 
// console.log(x.join(''));