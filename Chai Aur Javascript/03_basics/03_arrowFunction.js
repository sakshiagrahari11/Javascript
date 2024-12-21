// this keyword current context scope

const user = {
    username : "Sakshi",
    price : 210,

    welcomeMessage: function() {
         console.log(`${this.username}, welcome to website`);
        // return `${this.username}, welcome to website`
        //console.log(this);
        
    }
    
}
// user.welcomeMessage()
// console.log(user.welcomeMessage());
// user.username = "Suyash"
// user.welcomeMessage()
console.log(this);  // {}

function chai() {
    let username = "Sakshi"
    //console.log(this.username);
    console.log(this);
    
}
chai()

// const chai = function() {
//     let username = "Sakshi"
//     //console.log(this.username);
//     console.log(this);
    
// }
// chai()

// const chai = () => {
//     let username = "Sakshi"
//     //console.log(this.username);
//     console.log(this);
    
// }
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));

const add = (num1, num2) =>  num1 + num2
// implicit return me maan leta hu likhneki jarurat nhi he
// const sum = (num1, num2) =>  (num1 + num2)
// const sum = (num1, num2) =>  {username: "Sakshi"}
const sum = (num1, num2) =>  ({username: "Sakshi"})

console.log(add(3, 4));

// const myArray = [1, 2, 3, 4, 5, 6]

//myArray.forEach(function () {})

// myArray.forEach(() => {})

// myArray.forEach(() => ())


//     The 'this' keyword inside a function refers to the object that the function is a property of or the object that the function is called on. However, the behavior of the this keyword inside an arrow function is different from regular functions.
// In an arrow function, the this keyword is lexically scoped, meaning it takes on the value of the this keyword in the surrounding code. The this keyword in an arrow function does not get rebound when the function is invoked, unlike regular functions. It keeps the same value as the this keyword in the surrounding code .
// parenthesis agar lagate he toh ek block create ho jata he