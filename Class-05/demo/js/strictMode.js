'use strict';

// catching the undeclared variables
var x = 10
console.log(x)

// catching the syntax errors
var abc = true;
var xyz = false;

if (abc) {
    xyz = true
}
console.log(xyz);

// catching the errors from using reserved words 
var publicName = "Prep students"
console.log(publicName)