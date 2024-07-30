// 28 July 2024
// Debouncing and Throttling

// ! Debouncing in one liner -> To limit an api calls,
//  so reduce the api calls so the server can't crash

let counter = 0;
const getData = () => {
  console.log("retreiving data ", counter++);
};
const handleDebouncing = (callback, delay) => {
  let timerId;
  return function () {
    let context = this; // imp to write args no matter your passing or not. if they exist
    args = arguments;
    clearTimeout(timerId); // clearing the interval : it set to zero again
    timerId = setTimeout(() => {
      callback.apply(this, args); // function call using .apply
    }, delay);
  };
};

const bounce = handleDebouncing(getData, 1000);
// Import and Export
// ! why we use import and export
// 1. Reduces Memory.
// 2. Reduce redundancy of code.
// import => receive
// export => send

// const obj = {
//   map: [
//     { you: "bat" },
//     { we: "sam" },
//     { help: "samee" },
//     { hey: [1, 2, 3, 4, { toy: { u: 7 } }] },
//   ],
// };

// console.log(obj.map[3].hey[4].toy.u);

// const getData = async () => {
//   const response = await fetch(obj);
//   const data = await response.json();
//   console.log(data.map[3].hey[4].toy.u);
//   return data;
// };

// getData();

// self Practice
// make a collective promise and handle rejection also
// make at least 3 promises. Resolve 2 promises and reject 1.
// make conditional promises each depends on each other
// use Arithmatic operations to resolve and reject the promises

// Syntax
// .Promise.all([]).then().catch

// const promise1 = new Promise((resolve, reject) => {
//     const a = 0, b = 3;
//     const result = a + b;
//     if (result >= 0) {
//         resolve(`Promise 1 resolved with result: ${result}`);
//     } else {
//         reject('Promise 1 rejected due to negative result');
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     const previousResult = 8;
//     const result = previousResult * 2;
//     if (result <= 20) {
//         resolve(`Promise 2 resolved with result: ${result}`);
//     } else {
//         reject('Promise 2 rejected due to result exceeding 20');
//     }
// });

// const promise3 = new Promise((resolve, reject) => {
//     const previousResult = 16;
//     const result = previousResult - 5;
//     if (result !== 0) {
//         resolve(`Promise 3 resolved with result: ${result}`);
//     } else {
//         reject('Promise 3 rejected due to result being zero');
//     }
// });

// Promise.all([promise1, promise2, promise3])
//     .then(results => {
//         results.forEach(result => console.log(result));
//     })
//     .catch(error => {
//         console.error('At least one promise rejected:', error);
//     });

// const promise1 = (a, b) => new Promise((resolve, reject) => {
//     const result = a + b;
//     if (result >= 0) {
//         resolve(`Promise 1 resolved with result: ${result}`);
//     } else {
//         reject('Promise 1 rejected due to negative result');
//     }
// });

// const promise2 = (resultFromPromise1) => new Promise((resolve, reject) => {
//     const result = resultFromPromise1 * 2;
//     if (result <= 20) {
//         resolve(`Promise 2 resolved with result: ${result}`);
//     } else {
//         reject('Promise 2 rejected due to result exceeding 20');
//     }
// });

// const promise3 = (resultFromPromise2) => new Promise((resolve, reject) => {
//     const result = resultFromPromise2 - 5;
//     if (result !== 0) {
//         resolve(`Promise 3 resolved with result: ${result}`);
//     } else {
//         reject('Promise 3 rejected due to result being zero');
//     }
// });

// promise1(5, 3)
//     .then(result1 => {
//         console.log(result1);
//         return promise2(8);
//     })
//     .then(result2 => {
//         console.log(result2);
//         return promise3(16);
//     })
//     .then(result3 => {
//         console.log(result3);
//     })
//     .catch(error => {
//         console.error(error);
//     });
