const mySym = Symbol("Key 1");
const JSUser = {
    [mySym] : "myKey1"
}
console.log(JSUser[mySym]);
console.log(typeof(mySym));


const arr = [0, 1];
console.log(typeof(arr));