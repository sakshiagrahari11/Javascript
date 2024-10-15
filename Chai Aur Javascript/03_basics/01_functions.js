function sayMyName() {  
    console.log("S");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
}

sayMyName()
// whatever code you have written 10 lines 20 lines 5 lines band it in one package that package that package has been given you can take a copy of it as many times as you want whereever you wwant 

function addTwoNumbers(num1, num2) {
   // console.log(num1 + num2);
//    let add = num1 + num2;
//    return add
console.log("Sakshi");
   return num1 + num2
   console.log("Agrahari");

}
// addTwoNumbers()  // Nan
// addTwoNumbers(3, 4)  // 7
// addTwoNumbers("3", 4)  // 34
// addTwoNumbers(3, "a")  // 3a
// addTwoNumbers(3, null)  // 3
// addTwoNumbers("a", 4)  // a4
// addTwoNumbers(null, 4)  // 4

const result = addTwoNumbers(4, 5)
console.log("Result : ", result);  // undefined
// console.log("Result : ", add);  // error

function loginUserMessage(username) {
    //if(!username)
    if(username === undefined) {
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sakshi"));
//console.log(loginUserMessage());

function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice);  //[Function: calculateCartPrice]

console.log(calculateCartPrice(2));  // 2
function calculateCartPrice(...num1) {
    return num1  // [ 2, 3, 4 ]
}
console.log(calculateCartPrice(2, 3, 4));   // 2


function calculateCartPrice(val1, val2, ...num1) {
    return num1  // [ 4, 5 ]
}
console.log(calculateCartPrice(2, 3, 4, 5));   // 2

const user = {
    username : "Sakshi",
    price : 50
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}
//handleObject(user)

console.log(handleObject(user));  // undefined

handleObject({
    username : "Suyash",
    price : 100
})


const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600, 800]));
