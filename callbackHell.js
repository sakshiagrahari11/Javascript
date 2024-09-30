//CALLBACK :- TO MANAGE AYSYNCHRONOUS operation
console.log("Namaste");

setTimeout(function(){
    console.log("Javascript");
}, 5000)

console.log("Season 2");

//CALLBACK HELL :- ONE CALLBACK INSIDE ANOTHER CALLBACK NESTED CALLBACK

const cart = ["lehanga", "kurti", "skirt"];

api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(function(){

            api.updateWallet()
        })
    })
})
//PYRAMID OF DOOM

//Inversion of Control :-WE LOOSE CONTROL OF OUR PROGRAM PASSED A CALLBACK FUNCTION TO ANOTHER FUNCTION GIVEN THE CONTROL OF FUNCTION TO ANOTHER FUNCTION