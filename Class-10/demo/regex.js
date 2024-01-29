'use strict';
//1- .test() : check if a string contains a matches for a given pattern "regex"
let str = "Hello!My name is Anas, and I am a software developer. I am currently seeking opportunities in the field of development. You can reach me via email at anas_mo@gmail.com.Thank you!hello"
let regex = /hello/ig
// console.log(regex.test(str)); //true

// console.log(str.match(regex)); // array of matches values [ 'Hello', 'hello' ]

// 2- .match(): returns an array of matches of a specific given regex 
// let str2 = "123abc@zzz29";
let str2 = "abc@zzz"
let regex2 = /\d+/g;
// console.log(str2.match(regex2));

// .replace(): returns a new string with one, some, or all matches of a pattern replaced by a replacement.

let str3 = "I like apples .Apples are delicious"
let regex3 = /apples/ig
console.log(str3)
let newStr = str3.replace(regex3,"oranges");
console.log(newStr)