// Regular Expression REGEX

//we use it to:
// 1-VALIDATE strings against certain rules
// 2-to FIND substring within a string
// 3-to REPLACE part of the string

//typically speaking, we use REGEX to match patterns with strings

// let str = 'The rain  in spain falls Mainly in the plain';

//********Purpose: This regex looks for strings that start with "The".***** */
// // VALIDATE : test() -> return boolean
// let regex1 = /^The/;
// let res1 = regex1.test(str); //true ot false // to apply the regex
// console.log(res1);

//************Purpose: Searches for strings that end with "roaa".******** */
// let regex2 = /roaa$/;
// let res2 = regex2.test(str); //true ot false
// console.log(res2);

//*******Purpose: This regex matches strings that exactly equal "The end" - nothing more, nothing less.***** */
// let str2 = "The end"
// let regex3 = /^The end$/;
// let res3 = regex3.test(str2); //true ot false
// console.log(res3);

//*********Purpose: Looks for the occurrence of "roaa" anywhere in the string.***** */
// let regex4 = /roaa/;
// let res4 = regex4.test(str); //true ot false
// console.log(res4);


//*****Purpose: Searches for "plai" followed by zero or one "n". The "?" makes the "n" optional. */
// let regex5 = /plain?/;
// let res5 = regex5.test(str); //true ot false
// console.log(res5);


//****Purpose: Finds all occurrences of "The", case-insensitive due to i, and g means "global" search, so it doesn't stop at the first match. */
// let str = 'The rain The in spain infalls Mainly in the plain';
// // find a string in a string
// // FIND : match() -> return array
// let regex2 =  /The/gi; // return all in's in array
// console.log(str.match(regex2));


let str = 'The rain in spain falls mainly in the plain';

//**Purpose: Matches any non-word character (spaces, punctuation, etc.) in str. */
// to retrieve the white spaces
let wordEnding = /\W/g;
// console.log(str.match(wordEnding).length);


//**Purpose: Replaces every non-word character in str with a hyphen "-". */
// REPLACE : replace() -> return string
let newStr = str.replace(/\W/g,'-');
console.log(newStr);
console.log(str);