var a;
console.log(a);
a = 10;
console.log(a);
a = "Hello World";
console.log(a);
if (a === undefined)
{
    console.log("a is undefined");
}
else 
{
    console.log("a is not undefined");
}

// .Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.

// 2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

// 3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

// 4.Remember undefined !== not defined.