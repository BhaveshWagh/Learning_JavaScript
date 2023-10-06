

// Promise in Javascript
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Description : Asynchronous operations allow your code to keep doing other things while it's waiting for a particular task to finish. It doesn't get stuck waiting for one task to complete before moving on to the next. This helps make the program more efficient and responsive.

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// console.log("*")

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" }), 1000;
  });
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "bhavesh", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllusers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data.login)
})
.catch((err) => console.log(err))

// promise.all