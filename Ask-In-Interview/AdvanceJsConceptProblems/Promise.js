// Promise : A promise is an object which representing the eventual completion (or failure) of asynchronous operation
const cart = ["shoes", "kurta"];

const promise = createOrder(cart); // orderId
// console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

/// Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12434";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}

// inversion control problem : basically we don't no when the proceedToPayment functions is called or not.

// Callback hell : PRYAMID of DOOOM Code starts to increase horizontally not vertically

// doSomething(function (result) {
//   doSomethingElse(
//     result,
//     function (newResult) {
//       doThirdThing(
//         newResult,
//         function (finalResult) {
//           console.log(`Got the final result: ${finalResult}`);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// Remember it

// const promise : is an object
// createOrder(cart) : asynchronous operation

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

const GITHUB_API = "https://api.github.com/users/BhaveshWagh";

// fetch() api is basically browser gives us to send an request to the server

// async function fetchApi() {
//   const response = await fetch(GITHUB_API);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
// }

// fetchApi();

// user.then(function (data) {
//   console.log(data);
// });
