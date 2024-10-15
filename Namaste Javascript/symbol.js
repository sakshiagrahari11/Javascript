// How to use SYMBOL as a key 

const mySym = Symbol("key1");   // declare symbol
console.log(typeof mySym);  //symbol 

const JSUser = {
    [mySym] : "myKey1",
    mySym : "myKey2"
}
console.log(JSUser[mySym]);  // myKey1
console.log(typeof JSUser[mySym]);  //string

const arr = [0, 1];
// console.log(typeof(arr));  //object
console.log(JSUser);
