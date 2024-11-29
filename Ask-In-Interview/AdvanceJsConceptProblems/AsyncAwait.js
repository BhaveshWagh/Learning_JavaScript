// Note :  async/await combination is used to handle promise

// Asycn :  is a keyword that is used before a function to create async function.

const promise = new Promise((resolve, reject) => {
  //   resolve("Promise is resolved!");
});

// console.log("type of promise : ", typeof(promise))  // Object

// Aynsc function always returns a promise

async function getaData() {
  return promise; // if return value is already promise it will return as it is.

  // return "Namaste Promise" // if the return value is not promise then it will automatically wrap the value inside a promise and return it  with the help of .then() method u can access the values inside promise
}

const data = getaData(); // data has promise
// console.log(data) // Promise {<fulfilled>: 'Namaste Promise'}

data.then((res) => console.log(res)); // Namaste Promise

// Await : is a keyword that can only be used inside a async function  & you write await in front of promise & it resolves the promise

const awaitPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved!");
  }, 20000);
});

const awaitPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved!");
  }, 40000);
});

async function getAwaitData() {
  console.log("Hello");
  // JS Engine was waiting for promise to be resolved it, once it resolved it goes to next line. (remember Time Tide and Javascript waits for none but in case of async await it waits for promise to be resolved)

  //   await can only be used inside an async function
  const awaitData = await awaitPromise1;
  console.log("20 sec: Namaste Javascript");
  console.log(awaitData);

  const awaitData2 = await awaitPromise2;
  console.log("40 sec: Namaste Javascript");
  console.log(awaitData2);
}
getAwaitData();

// How do we handle data before async/await

// function normalFunction() {
//   // JS engine will not wait for promise to be resolved (remember Time Tide and Javascript waits for none)
//   // but in case of async await it waits
//   awaitPromise.then((res) => console.log("handle before async/wait", res));
//   console.log("namste");
// }
// normalFunction();
