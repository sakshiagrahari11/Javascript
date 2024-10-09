"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Sakshi");

let name = "Sakshi"
let age = 21
let isLoggedIn = false
let state;

// number => 2 to the power 53
// bigInt => for large numbers 
// string => ""/''
// boolean => true/false
// null => standalone value representation of an empty value
// undefined => the value which can not assign memory space declare varible declare
// symbol => unique

// object 

console.log(typeof(null)) //object
console.log(typeof(undefined)); //undefined
console.log(typeof(name));  //string
console.log(typeof(age));  //number
console.log(typeof(isLoggedIn)); //boolean
console.log(typeof(state)); //undefined

// let num = "5" + 5; // "55" (Number 5 is coerced to a string, and the result is string concatenation)
 let sum = "5" - 3; // 2 (String "5" is coerced to a number, and then subtraction is performed)
// console.log(num)
 console.log(sum)
// console.log(typeof(num))
// console.log(typeof(sum))
