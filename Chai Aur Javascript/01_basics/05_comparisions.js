// console.log(2 > 1);  //true
// console.log(2 >= 1); //true
// console.log(2 < 1);  //false
// console.log(2 == 1);  //false
// console.log(2 != 1);  //true

// console.log("2" > 1);  //true
// console.log("2" > "1");  //true
// console.log("02" > 1);  //true


//comparision operator automatically converts string into number

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

// comparision operator and eqality operator works differently comparision operator converts null into 1

console.log(undefined > 0);  //false
console.log(undefined >= 0);  //false
console.log(undefined == 0);  //false

//strict check === datatypes and value

console.log("2" === 2);  //false

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

// null == null; // true
// null == undefined; // true
// Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero

//console.log(1 = 1 = 1) // error
console.log(1 == 1 == 1) // true  First comparison: 1 == 1 This evaluates to true because 1 is equal to 1. Second comparison: true == 1 Now, JavaScript will compare true and 1 using == (loose equality), which performs type coercion. true is coerced to 1, so the comparison becomes 1 == 1, which is true.
console.log(1 === 1 === 1) // false  1 === 1 === 1 would first compare 1 === 1, which is true, and then compare true === 1, which is false.
