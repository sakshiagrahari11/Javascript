const cart = ["shoes", "pants", "kurtas"];

const promise = createOrder(cart)

promise.then(function (orderId) {
    console.log(orderId)
    console.log(pr)
})
.then(function () {
    proceedToPayment(orderId)
})
.catch(function (err) {
    console.log(err)
}
)

function createOrder(orderId) 
{
    const pr = new Promise(function (resolve, reject)
    {
        if(!validateCart(cart))
        {
            const err = new Error("Cart is not valid")
            reject(err)
        }

        const orderId = "2110";
        if (orderId) 
        {
            setTimeout (function ()
            {
                resolve(orderId)
            }, 5000)
        }    
    })
    return pr;
}

function proceedToPayment (orderId) 
{
    return new Promise(function(resolve, reject) {
        resolve("Payment is successfull")
        //orderId += 1;
        console.log(orderId)
    })
}

function validateCart(cart) {
    return true;
}