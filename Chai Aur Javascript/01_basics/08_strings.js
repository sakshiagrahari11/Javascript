const name = "Sakshi"
const repoCount = 7

// console.log(name + repoCount + " Value");  // String Concatination

console.log(`Hello My name is ${name} and My Repo Count is ${repoCount}`);

console.log("Hello" + " World");   //Hello World

const gameName = new String('Sakshi-SA-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0, 4)  // last value include nhi hoti negative value are ignored
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sakshi    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://sakshi.com/sakshi%10agrahari"

console.log(url.replace('%10', '-'));

console.log(url.includes('sakshi'));

console.log(url.includes('chinu'));

console.log(gameName.split('-'));

// In JavaScript, you cannot traverse from a higher negative index to a lower negative index using the slice() function or any other standard string method. The slice() function, as well as most other string methods, expects the start index to be less than the end index when using positive indices or zero-based indices.

// When using negative indices, you can only traverse from left to right (from lower negative index to higher negative index) or from right to left (from lower positive index to higher positive index). You cannot reverse the start and end indices when using negative indices with slice().

// const myString = "Hello, World!";
// const slicedString = myString.slice(-1, -8);
// console.log(slicedString); // Output: " "


// const myString = "Hello, World!";
// const slicedString = myString.slice(0, 5);
// console.log(slicedString); // Output: "Hello"

// const slicedStringNegative = myString.slice(-6, -1);
// console.log(slicedStringNegative); // Output: "World"