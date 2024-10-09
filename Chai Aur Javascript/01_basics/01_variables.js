// Variables are containers for storing data values. values of variables can vary
// Constant the values which do not change

const accountId = 2109;
let account_email = "abc@gmail.com";
var account_Password = "abc21";
accountCity = "Indore";
let accountState;

console.log(accountId);

//accountId = 2109; not allowed
//let account_email = "xyz@gmail.com" not allowed
account_email = "xyz@gmail.com"
account_Password = "xyz21"
accountCity = "Mahur"

// # console.table([group of variables you want to show in tabular form])
console.log([accountId, account_email, account_Password, accountCity, accountState])

// var: It's function-scoped and hoisted, meaning it can be accessed before declaration within its function. Variables declared with var can be re-declared and re-assigned. It's now generally replaced by let and const in modern JavaScript due to its less predictable behavior.

// let: Introduced in ES6, let provides block-scoping, which confines it to the block (like loops or if-statements) where it's declared. It's not accessible before its declaration due to the Temporal Dead Zone. let allows re-assignment but not re-declaration in the same scope.

// const: Also block-scoped and subject to the Temporal Dead Zone. It must be initialized upon declaration and cannot be re-assigned or re-declared. It's ideal for declaring constants whose values should remain unchanged throughout the execution.

// In summary, prefer let and const for their block-level scoping, which enhances code readability and maintainability. 
// Use let for variables that change and const for variables that should remain constant.

// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.
