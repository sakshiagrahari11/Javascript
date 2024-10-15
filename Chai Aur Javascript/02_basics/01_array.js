// array : collection of multiple items in a single variable

// arrays are recyclable

// shaallow copy : changes can perform in original array
// deep copy : changes can perform in copies array

const myArr = [0, 1, 2, 3, 4, 5]
const myArray = [0, 1, 2, 3, 4, 5, "sakshi"]
const myCartoons = ["Doremon", "Perman"]

const myArr2 = new Array(1, 2, 3, 4, 5)

console.log(myArr[0]);
console.log(myArr[1]);


// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(9)
myArr.shift()  //[ 1, 2, 3, 4, 5, 6 ]

console.log(myArr);

console.log(myArr.includes(9));   //false

console.log(myArr.indexOf(9));   // -1

const newArr = myArr.join ()  //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]

console.log(newArr);  //1,2,3,4,5,6
console.log(typeof newArr);  // string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log("B ", myn1);  //B  [ 2, 3 ]
console.log("A ", myArr);   //A  [ 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr.splice(1, 3)  // manipulate original array remove the elements fron original array
console.log("C ", myn2);  //C  [ 2, 3, 4 ]
console.log("A ", myArr);  // A  [ 1, 5, 6 ]


