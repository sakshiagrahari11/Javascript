// What is a Callback Function in JavaScript

setTimeout(function () {
    console.log("Timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
})


// function x() {
//     console.log("x");
//     y();
// }

// function y() {
//     console.log("y");
// }

// JavaScript is a synchronous and single-threaded language

// Blocking the main thread

// Power of Callbacks

