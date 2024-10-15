// Ways of declaring objects There are two method

// literal singleton nhi banta
// constructor singleton banta he
// singleton apni tarah ka ek hi object

// Object Literals

const sakshi = {}   // Objects empty objects

const JsUser = {
    name: "Sakshi",
    courseName: "CS",
    "course Name": "IT",
    age: 20,
    location: "Indore",
    email: "sakshiagrahari156@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thrusday"]
}

console.log( JsUser.name); // Sakshi
console.log(JsUser["name"]);  //Sakshi

//console.log(JsUser.course Name);  // Not allow
console.log(JsUser["course Name"]);  //undefined

JsUser.email = "sakshi@123"
//Object.freeze(JsUser)
JsUser.email = "sakshi@345"
console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS User")
}
JsUser.greetingTwo = function() {
    //console.log(`Hello JS User, ${name}`)  //string concatination
    console.log(`Hello JS User, ${this.name}`)  // same object ko reference karna he property access kar sakte he

}

console.log(JsUser.greeting);  //[Function (anonymous)]  meethod

console.log(JsUser.greeting());  //Hello JS User  function

console.log(JsUser.greetingTwo());
