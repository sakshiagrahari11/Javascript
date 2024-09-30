// const cart = ["shoes", "pants", "kurta"]
 
// createOrder = (cart, function ( orderId ) {
//     proceedToPayment( orderId )
// });

// const promise = createOrder( orderId );

// promise.then(function( orderId ) {
//     proceedToPayment( orderId )
// });

const GitHubAPI = "https://api.github.com/users/sakshiagrahari11";

const user = fetch(GitHubAPI)

console.log(user);