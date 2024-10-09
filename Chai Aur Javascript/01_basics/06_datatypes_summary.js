// Primitive call by value changes can be perform in the copy of datatype not in original value 
// Datatypes are divined on the basis of how to store and how to access

// 7 types : String Number Boolean Null Undefined Symbol BigInt

const score = 100 //Number
const scoreValue = 100.3

const isLoggedIn = false  //boolean
const outsideTemp = null  //null
let userEmail;  // let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123') //symbol

// Reference Type Non Primitive

console.log(id === anotherId);  //false

const bigNumber = 12345678n //123456789123

// Array Objects Functions

const heros = ["shaktiman", "naagraj", "doga"]  //array  //type object

const myObj = {        //object
    name: "Sakshi",
    age: 21,
}

const myFunction = function(){        //function
    console.log("Hello Sakshi");
}

console.log(typeof bigNumber);

console.log(typeof outsideTemp);  //object

console.log(typeof myFunction);   //object function


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
// 218

