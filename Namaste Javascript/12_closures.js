// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);     // 7
//     }
//     y();
// }
// x();

// var a = function b(){
//     console.log(x);
//     b();
// }
// x = 45;
// console.log(a);      //Function b

// function z(){
//     var b = 13;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a, b);      // 100 13
//         }
//         a = 100;
//         y();
//     }
//     x();
// }
// z();

function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
}
var z = x();
console.log(z);     // Function y
z();        // 7