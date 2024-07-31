// 30 july 2024 last class of module f3

// Project chatApp using sockets
// Sockets:
// !sockets works like Directed graph 
// learn about graph and DP
// Mosh for frontend very good and striver 
// RDBMS 
// for package do fullstack 
// DSA -> Linked list`,trees, binary trees, binary hashmap, maps, arrays, graph,
// !imp => for backend people => system design




// Difference  between  Debouncing and Throttling is :
// Debouncing: Delays the execution of the function until a certain amount of time has passed since the last event. Useful for events where you want to wait until the user has finished an action (e.g., typing, resizing).
// Throttling: Ensures the function is executed at most once in a given time period. Useful for events that occur continuously and you want to limit the rate of execution (e.g., scrolling, mouse movement).

// ! Very Important Topics : PollyFills, OOP's, Debouncing 


// Demonstrate throttling function:

let counter = 0;

const getData = () => {
  
  console.log("retreiving data ", counter++);
  
};


const throttle = (callback, delay = 1000) => {
  let shouldWait = false;
  
  return (...args) => {
    // if(shouldWait) return 
    if (shouldWait === true) return;
    
    callback(...args);
    
    shouldWait = true;
    
    setTimeout(() => {
      shouldWait = false;
    }, delay)
  }
}

const handleThrottling = throttle(getData, 1000)


// !Debouncing and throttling Mostly asked in product based company

// ! Asked In Swiggy SDE - 3, 50LPA
// Revision Debouncing
// demonstrate Debouncing code

// let counter = 0;

// const getData = () => {
  
//   console.log("retreiving data ", counter++);
  
// };

// const handleDebouncing = (callback, delay) => {
//   let timerId;
  
//   return function () {
//     let context = this; // this is referencing to the function getData
    
//     args = arguments; // imp to write args no matter your passing or not. if they exist
    
//     clearTimeout(timerId); // clearing the interval : it set to zero again
    
//     timerId = setTimeout(() => {
      
//       callback.apply(this, args); // function call using .apply method
    
      
//     }, delay);
//   };
// };

// const bounce = handleDebouncing(getData, 1000)



// Another time
// let counter = 0;
// const getData = () => {
//   console.log("retreiving data", counter++)
  
// }
// const bounce = handleDebouncing(getData, 1000);

// const bounceFn = (callback, delay){
//   let timerID;
  
//   return function () {
    
//     let context = this;
//     let args = arguments;
    
//     clearTimeout(timerID);
    
//     timerID = setTimeout(()=>{
//       callback.apply(this, args)
//     },delay)
//   }
// } 


// const handleDebounce = bounceFn(getData, 2000)



















// 29 July 2024
// Debouncing and Throttling

// ! Debouncing in one liner -> To limit an api calls,
//  so reduce the api calls so the server can't crash

// let counter = 0;

// const getData = () => {
  
//   console.log("retreiving data ", counter++);
  
// };

// const handleDebouncing = (callback, delay) => {
//   let timerId;
  
//   return function () {
//     let context = this; // this is referencing to the function getData
    
//     args = arguments; // imp to write args no matter your passing or not. if they exist
    
//     clearTimeout(timerId); // clearing the interval : it set to zero again
    
//     timerId = setTimeout(() => {
      
//       callback.apply(this, args); // function call using .apply method
    
      
//     }, delay);
//   };
// };

// const bounce = handleDebouncing(getData, 1000);







// const obj = {
//   map:[
//   {you:"bat"},
//   {we:"sam"},
//     {help:"samee"},
//     {hey: [1,2,3,4,{toy:{u:7}}]}
//   ]
// }

// console.log(obj.map[3].hey[4].toy.u)

// const getData = aysnc () => {
//   const response = await fetch(obj)
//   const data = await response.json();
//   console.log(data.map[3].hey[4].toy.u)
//   return data;
// }

// getData()















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












// 27 July Promise.all
// ! flipkart - SDE - 1
// Question make at least 4 promises. Resolve every promise except the third one , 
// Throw an error in the third promise after a delay of 1 sec. 
// make other promises wait to resolve for 2 sec each

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 2000)}
// )
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 2000)}
// )
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(throw new Error("third promise is rejected")), 1000)}
// )

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(("fourth")), 2000)}
// )

// Promise.all([promise1,promise2,promise3,promise4])
// .then((value) => console.log(value))
// .catch((error) => console.log("Error : " + error.message))




// Question atleast make 6 promises with setTimeout for each one. resolve them after 1s,2s,1s,3s,1s,1s
// make a collective promise using all promise.all and print the 3rd, 4th, 1st promise only. 
// and attach catch block too for handling error.

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(()=> resolve("first promise resolved"),1000)
// })


// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("second promise resolved"),2000)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("third promise resolved"),1000)
// })

// const fourthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("fourth promise resolved"), 3000)
  
// })

// const fifthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("fifth promise resolved"),1000)
// })

// const sixPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("reject")),1000)
// })


// Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise, fifthPromise, sixPromise])
// .then( (value) => console.log(`third Promise : ${value[2]}, 
// forth Promise : ${value[3]}, 
// first Promise : ${value[0]}`))
// .catch((err)=> console.log("Error: something went wrong",error.message))



// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("first promise resolved"), 1000);
// });

// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("second promise resolved"), 2000);
// });

// const thirdPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("third promise resolved"), 1000);
// });

// const fourthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Throw an error using the throw keyword
//     throw ("fourth promise error thrown");
//   }, 3000);
// });

// const fifthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("fifth promise resolved"), 1000);
// });

// const sixPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("six promise resolved"), 1000);
// });

// Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise, fifthPromise, sixPromise])
//   .then((values) => {
//       console.log(values)
//     // console.log(`third Promise : ${values[2]}, 
//     //   fourth Promise : ${values[3]}, 
//     //   first Promise : ${values[0]}`);
  
    
//   })
  // .catch((err) => {
  //   console.error("Error: something went wrong", err);
  // });















// 26 July 24 API handling

// Question
// make a async fun and call a function inside it which return a single promise
// made up of 4 promises
// simple resolve promise values "Batman"
// simple resolved promise after 3 seconds - "superman"
// simple resolved promise after 2 seconds - "wonderwoman"
// promise doing something mathematical comparison in it and then resolving it 
// use Promise.all to make a promise out of them return it and print it/

// function asynchronousFunction(){
//   let firstPromise = new Promise((resolve, reject) => resolve("Batman"))
//   let secondPromise = new Promise( 
//     (resolve, reject) => {
//       setTimeout(()=>{
//         resolve("Superman")
//       }, 3000)
//     })
//   let thirdPromise = new Promise( 
//     (resolve, reject) => {
//       setTimeout(()=>{
//         resolve("Wonder Woman")
//       }, 2000)
//     })
//     let fourthPromise = new Promise(
//       (resolve,reject) => {
//         if(10 % 2 === 0 ){
//           resolve("Promise Resolved!")
//         }
//         else{
//           reject("Promise Rejected!")
//         }
//       })
      
//       let bigPromise = Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise])
//       return bigPromise;
// }



// const display = async () => {
//   let data = await asynchronousFunction();
//   for(let item of data){
//     console.log(item);
//   }
// }

// display()


// API handling

// const fetchData = async () =>{
//   const response = await fetch("url")
//   const data = await response.json()
//   return data
// }























// 25 July 24 - async await
// !reduce Pollyfill asked in salesforce FE interivew


// await 
// demonstrate async and await in a simple fn print the things and prove await functionality
// Function that returns a resolved promise with a calculation

// const calculate = async (num) => {
//     return num * 2;
// }


// const demonstrateAsyncAwait = async () => {
//     console.log("Starting async function");

//     const num1 = 5;
//     console.log(`Initial number: ${num1}`);

//     const result1 = await calculate(num1);
//     console.log(`After first calculation (num1 * 2): ${result1}`);

//     const num2 = 10;
//     console.log(`Another number: ${num2}`);

//     const result2 = await calculate(num2);
//     console.log(`After second calculation (num2 * 2): ${result2}`);

//     const result3 = await calculate(result1 + result2);
//     console.log(`After third calculation ((num1 * 2) + (num2 * 2)): ${result3}`);

//     console.log("Async function completed.");
// }

// demonstrateAsyncAwait();


// Function that returns a resolved promise with a calculation

// const addTwoNumbers = async (a, b) => {
//   console.log("Javascript waits for none!")
//     return a + b;
// }


// const demonstrateAsyncAwait = async () => {
//     console.log("Starting async function...");

//     const num1 = 3;
//     const num2 = 7;

//     console.log(`Initial numbers: ${num1}, ${num2}`);

//     const sum = await addTwoNumbers(num1, num2);
//     console.log(`Sum of ${num1} and ${num2}: ${sum}`);
    
//     const doubleSum = await addTwoNumbers(sum, sum);
//     console.log(`Double of the sum: ${doubleSum}`);


//     console.log("Async function completed.");
// }


// demonstrateAsyncAwait();










// Simulate an asynchronous operation with a delay
// const getNumber = async () => {
//     return 42; 
// }

// // Async function demonstrating the use of await
// const demonstrateAsyncAwait = async () => {
//     console.log("Starting async function...");
//     const result = await getNumber(); // Await the promise returned by getNumber
//     console.log(result); // This will print 42 immediately
//     console.log("Async function completed.");
// }

// // Calling the async function
// demonstrateAsyncAwait();

 



// await keyword is used to wait for a promise to resolve. It can be used within
// only asynchronous function/ block.
// Execution Pause : Await makes code wait until the promise return result

// !make a asynchronous function returning a number. collerct it in 5 .then add in each 
// .then increment it by 3 .print them too in 3rd .then 
// throw error collect it in catch

// use async 

// const getData = async (num) => {
//   return num
// } 

// getData(10)
// .then((res) => {
//   res += 3
//   console.log(res)
//   return res
// } )
// .then((res) => {
//   res += 3
//   console.log(res)
//   return res
// })
// .then((res) =>{
//   res += 3
//   console.log(res)
//   throw("Error : somethimes went wrong!")
// })
// .then((res) => {
//   res += 3
//   console.log(res)
//   return res
// })
// .then((res) => {
//   res += 3
//   console.log(res)
//   return res
// })
// .catch((err) => console.log(err))





// async await
// * async - asynchronous
//    - executing multiple files/codes at the same time
// !async function always returns a promise

// async function (){
//   returns "hello" - resolve promise, remember it returning a promise not a values
// // Hello is promise the function is returning promise
// }
// it Automaticically wraps inside resolved promise

// async getData = async (num) => {
//   return num
// } 

// getData(10)
// .then((res) => console.log(res))
// )




// Question 2: make a promise chaining by making a function passing a number to it and make at least 6 .then
// then throw an error at 4th .then and catch the error in the catch block

// function incrementWithThrowError(num) {
//     return new Promise((resolve, reject) => {
//         if(!isNaN(num)) {
//             resolve(num);
//         } else {
//             reject('Input must be a number');
//         }
//     });
// }


// incrementWithThrowError(10)
// .then((num)=>{
//   num += 2
//   console.log(num)
//   return num
// })
// .then((num)=>{
//   num += 3
//   console.log(num)
//   return num
// })
// .then((num)=>{
//   num += 4
//   console.log(num)
//   return num
// })
// .then((num)=>{
//   num += 5
//   console.log(num)
//   if(num > 20){
//     throw("Error: Something went wrong!")
//   }
//   return num;
// })
// .then((num)=>{
//   num += 6
//   console.log(num)
//   return num
// })
// .then((num)=>{
//   num += 7
//   console.log(num)
//   return num
// })
// .catch((error)=>{
//   console.log("Error: " + error)
// })














// Revision Question
// main a similar promise chain in which you are passing a number in a fn. and it that fn you are making promise and its chaining. do increment that number by 2 in every make at least 5 .thens in the chain 
// follow this Syntax:
// fn(num){
// promise - resolve
// .then
// .then
// .then
// .catch(error) =>{}
// }



// function incrementNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num < 0) {
//             return reject('Please enter a positive number');
//         }
//         resolve(num);
//     })
//     .then(result => {
//         result += 2;  
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 2;
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 2;
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 2;
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 2;
//         console.log(result);
//         return result;
//     })
//     .catch(error => {
//         console.error(`Error: ${error}`);
//     });
// }


// incrementNumber(10)















// 24 July 24
// make a fn pass a number in it .
// make a promise considering that number inside that fn
// then increment the number in the first. then by 2
// then increment the number in the first. then by 3
// then increment the number in the first. then by 4
// then increment the number in the first. then by 5
// then increment the number in the first. then by 6
// at last attach .catch
// fn(num){}


// function incrementNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num < 0) {
//             return reject('Please enter a positive number');
//         }
//         resolve(num);
//     })
//     .then(result => {
//         result += 2;
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 3;
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 4;
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 5;
//         console.log(result);
//         return result;
//     })
//     .then(result => {
//         result += 6;
//         console.log(result);
//         return result;
//     })
//     .catch(error => {
//         console.error(`Error: ${error}`);
//     });
// }


// incrementNumber(10)
   
    







// Question
// make a promise such that it sometimes resolves and somethimes reject.
// It should take 3 seconds delay to resolve 
// It should take 4 seconds delay to reject
// On resolve print "Resolved" 3 times
// On reject print "Reject" 4 times
// use fat arrow functions with .catch implementation
// please focus on code quality .with good variable names

// const createRandomePromise = new Promise((resolve, reject) => {
    
//     const isResolve = Math.random() > 0.5; 
//     console.log(isResolve)
    
//     if (isResolve) {
//       setTimeout(() => resolve("Resolved"), 3000); 
//     } else {
//       setTimeout(() => reject("Reject"), 4000); 
  
//     }
// });

// const displayMessage = (message, times) => {
//   for (let i = 0; i < times; i++) {
//     console.log(message);
//   }
// };

// createRandomePromise
// .then((message) => displayMessage(message, 3)) 
// .catch((message) => displayMessage(message, 4));




// const myDisplayer = (some) => {
//   console.log(some)
// }

// let myPromise = new Promise((resolve,reject) => {
//   let x = 0;
  
//   if(x == 0){
//     resolve("OK")
//   }else{
//     reject("Error")
//   }
// })

// myPromise
//   .then((value) => myDisplayer(value))
//   .catch( (error) => myDisplayer(error))
  
// convert the above same code with normal function arrow fn and .catch method


// let counter = 0;

// const alternatePromise = () => {
//   return new Promise((resolve, reject) => {
//     counter++;
//     if (counter % 2 === 0) {
//       resolve("Promise resolved");
//     } else {
//       reject("Promise rejected");
//     }
//   });
// };

// call each multiple time to see behaviour
// alternatePromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     for (let i = 0; i < 3; i++) {
//       console.log(message);
//     }
//   });

// !! Asked in Microsoft : starter Question
// You have to design a promise such that it sometimes resolves or somethimes rejects
// if resolves print "Resolved" 2 times
// if Reject print "Reject" 3 times
// use fat arrow functions

// formulae to generate any number range betn Math.floor(Math.random() * 9) + 1;
// other way to do it without random()

// const seconds = new Date().getSeconds(); // Get the current seconds (0-59)
// console.log(seconds)
// seconds % 2 === 0

// const isResolvePromise = new Promise((resolve, reject)=>{
//   const randomNum = Math.random() * 100; 
//   console.log(Math.floor(randomNum))
//   if(randomNum < 101){
//     resolve("Resolved")
//   }
//   else{
//     reject("Reject")
//   }
// })



// isResolvePromise
// .then(
//   (result) =>{
//     for(let i = 0; i < 2; i++){
//       console.log(result)
//     }
//   }
// )
// .catch((error) =>{
//     for(let i = 0; i < 3; i++){
//       console.log(error)
//     }
//   }
// )


// Question:  make a promise do some mathematical comparison in it using if-else and reject the promise.
// after resolving promise print "Promise rejected" 3 times
// use fat arrow functions

// const rejectPromise = new Promise((resolve, reject)=>{
  
//   if(10 < 2){
//     resolve("Promise resolevd")
//   }
//   else{
//     reject("Promise reject")
//   }
// })


// rejectPromise
// .then( (result) => console.log(result),
// (error) => {
//   for (let i = 0; i < 3; i++){
//     console.log(error);
//   }
// })

// Question:  make a promise do some mathematical comparison in it using if-else and resolve the promise.
// after resolving promise print "Promise resolevd"
// use fat arrow functions
// const myPromise = new Promise((resolve, reject)=>{
  
//   if(10 > 2){
//     resolve("Promise resolevd")
//   }
//   else{
//     reject("Promise not resolved")
//   }
// })

// myPromise.then((result) => console.log(result),(error) => console.log(error))














// 23 July 24
// Promises

// make a promise. resolve it and print the result after 3 seconds
// const promise = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     reject("Promise reject after 3 seconds")
//   }, 3000)
// })

// promise
// .then((result) => console.log(result), (error) => console.log(error))


// syntax
// let promise = new Promise(function(resolve, rejcet) {
// resolve('bat')
// })
// promise.then(function (success){
// console.log(success)
// }, function(errormsg){
// console.log(success)
// })




// 2.Question
// create a function named processArray that takes an Array and a callback  function as a parameter,
// the callback fn should be called to sum each element in a result in the array
// then print that result after 2 seconds use arrow functions


// const processArray = (arr, parameters) => {
//   // ! if the interviewer ask to make own Pollyfill make it 
//   // let updatedSum = 0;
  
//   for(let value of arr){
//     updatedSum += value
//   }
//   setTimeout(() => {
//     parameters(updatedSum)
//   }, 2000)
// }

// const arr = [1,2,3,4,5]
// processArray(arr, (result) => {console.log(result)})



// 1.Question
// ! write a function named fetchData that simulates that using setTImeout and calls a callback function with printing data received after 2 seconds . 
// fn(){print data recived after 2 seconds}fetchData(fn) fn -> callback fn.

// const fetchData = (callback) => {
//   setTimeout(() => {
//     const data  = "Data received after 3 seconds";
//     callback(data)
//   }, 3000);
// }

// fetchData((data) => {
//   console.log(data)
// })


// const printData = (data) => {
  // console.log(data)
// }
// fetchData(printData)














//  22 July 24
// callback
// ! Asked interviewer for how to solve this Question using callback ***** or just normal callback
// make a fn. make a callback fn. In main fn pass 2 numbers in it with a callback fn
// in that callback fn add the numbers and pass result to another callback fn
//  in that callback fn double the result and pass result to another callback fn
//  in that callback fn divide it by 3  and pass result to another callback fn
//  in that callback fn take sqrt of that numbers and pass result to another callback fn


// function main(n1,n2,callback){
// callback(n1,n2, (result) => {
//   callback(result * 2, (result) => {
//     callback(result / 3, (result) => {
//       callback(Math.sqrt(result), (res) => {
//         // console.log(5,6,result);
//       })
//     })
//   })
// })  
// }

// main(5,2,(result,callback) => {
//   console.log(`add : ${result},
//   doubled : ${result},
//   divide by 3 : ${result},
//   sqrt : ${result}
//   `)
// })

// function main1(n1, n2, callback) {
//   callback(n1 + n2, function(result) {
//     callback(result * 2, function(result) {
//       callback(result / 3, function(result) {
//         callback(Math.sqrt(result).toFixed(2), function(result) {
//           console.log(`sqrt : ${result}`);
//         });
//       });
//     });
//   });
// }

// main1(5, 2, function(result, nextCallback) {
//   nextCallback(result);
// });


// sj code
// function main(num1, num2, callback){
//       callback(num1 + num2, (result) =>{
//       callback(result * 2, (result)=>{
//       callback(result / 3, (result)=>{
//       callback(Math.sqrt(result), (result)=>{
//       console.log("hello"+result);?
//                 });
//             });
//         });
//     });
// }
// main(5,2, (result, callback) =>{console.log(`Addition: ${result}, Double: ${result}, Division: ${result},SquarRoot: ${result}`);});

function displayRes(result) {
  console.log(result);
}

function addNumbers(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

function doubleResult(result, callback) {
  const doubled = result * 2;
  callback(doubled);
}


function divideByThree(result, callback) {
  const divided = result / 3;
  callback(divided);
}


function sqrtResult(result, callback) {
  const guess = Math.sqrt(result)
  callback(guess);
}


function mainFunction(num1, num2) {
  addNumbers(num1, num2, function(sum) {
    doubleResult(sum, function(doubled) {
      divideByThree(doubled, function(divided) {
        sqrtResult(divided, function(sqrt) {
          // console.log(sqrt)
          displayRes(sqrt)
        });
      });
    });
  });
}

// mainFunction(5,2);





// Basic Question callback
// function displayRes(result){
//   console.log(result)
// }

// function getMultiplication(num1,num2, callback){
//   multi = num1 * num2;
//   callback(multi)
// }

// getMultiplication(5,2,displayRes)


//! Asked in Facebook London : Do you know every thing in javascript is object.
// prototype means ancestore 
// CTC is 70 LPA => obj1__proto__.__proto__ refer below notes for that


  // ! MNC Based Question
// Question : demonstrate function chaining with 5 fuction in every function 
// print something while calling every function in chain.  

// initial value named Number in function in initial fn from which you make object.
// In first function calling, make the number tripled.
// In Second function calling, minus number by 2.
// In Third function calling, make number / 5.
// In fourth function calling, add 56 to the number.
// In Fifth function calling take the square root of the number.

// print the number in every function

// function operation(){
//   this.number = 122;
//   return this;
// }


// operation.prototype.triple = function (){
//   this.number *= 3;
//   console.log(`After tripling: ${this.number}`);
//   return this;
// }

// operation.prototype.minusTwo = function () {
//   this.number -= 2;
//   console.log(`After minus two: ${this.number}`);
//   return this;
// }

// operation.prototype.divisibleByFive = function () {
//   this.number /= 5;
//   console.log(`After dividing five: ${this.number}`);
//   return this;
// }

// operation.prototype.addFiftySix = function () {
//   this.number += 56;
//   console.log(`After adding fifty six: ${this.number}`);
//   return this;
// }

// operation.prototype.squareRoot = function () {
//   this.number = Math.floor(Math.sqrt(this.number))
//   console.log(`After taking square root: ${this.number}`);
//   return this;
// }

// const calculatedNum = new operation()

// calculatedNum.triple().minusTwo().divisibleByFive().addFiftySix().squareRoot()



// Question : demonstrate function chaining with 5 fuction in every function 
// print something while calling every function in chain
// function zero(){
//   console.log("zero'th function called")
// }
// zero.prototype.one = function(){
//   console.log("first function Called!")
//   return this
// }
// zero.prototype.two = function (){
//   console.log("Second function Called!")
//   return this
// }
// zero.prototype.three = function (){
//   console.log("Third function Called!")
//   return this
// }
// zero.prototype.four = function (){
//   console.log("Fourth function Called!")
//   return this
// }
// zero.prototype.five = function (){
//   console.log("Fifth function Called!")
//   return this
// }
// const printSomething = new zero()

// printSomething.one().two().three().four().five()


















// 21 July is Off Sunday 
// An extra class 20 July 24


// demonstrate same thing inside a class based  


// const obj = {
//   arr: [],

//   get printArr() {
//     // this.arr.slice(4);
//     return this.arr.slice(this.arr.length - 3);
//   },
//   set setData(data) {
//     this.arr.push(data);
//   },
// };

// function pushData (n) {
//     for(let i = 0; i < n; i++){
//         obj.setData = i
//     }
// }
// pushData(7)


// obj.setData = 1;
// obj.setData = 2;
// obj.setData = 3;
// obj.setData = 4;
// obj.setData = 5;
// obj.setData = 6;
// obj.setData = 7;

// console.log(obj.printArr);

// class Array {
  // constructor() {
//     this.arr = [];
//   }

//   get printArr() {
//     return this.arr.slice(this.arr.length - 3);
//   }

//   set setData(data) {
//     this.arr.push(data);
//   }

//   pushData(n) {
//     for (let i = 1; i <= n; i++) {
//       this.setData = i;
//     }
//   }
// }

// const obj = new Array();
// obj.pushData(7);

// console.log(obj.printArr);


// Question
// const obj = {
//     arr : [1,2,3,4,5,6,7],
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// console.log(obj.getSubArray)

// demonstrate the same thing in a class while making an object.
// Make that setter fn inside class. and access it through object.


// class Array {
//     constructor(){
//         this.arr = [1,2,3,4,5,6,7]
//     }
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// const resultantArr = new Array()

// console.log(resultantArr.getSubArray)




// Practice Question

// const obj = {
//     arr : [1,2,3,4,5,6,7],
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// console.log(obj.getSubArray)



















// 19 July 24

// Getters and setters
// Question 5 for make a class


//   stringArr : ["Hello", "Mr", "Som", "Jaina"],
  
//   get getCumulativeString(){
  
//     wholeString = ""
  
//     for(let str of this.stringArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
// }

// console.log(object.getCumulativeString)


// class LanguageClass {
//   constructor() {
//     this.log = [];
//   }

//   set current(name) {
//     this.log.push(name);
//   }
// }

// const myLanguage = new LanguageClass();
// myLanguage.current = 'EN';
// myLanguage.current = 'HN';
// myLanguage.current = 'MR';
// console.log(myLanguage.log);  // Output: ['EN']

// class Language {
//   constructor(){
//     this.arr = []
//     // this.arr = arr;
//   }
//   set setLanguages(name){
//     this.arr.push(name)
//   }
// }

// const lang1 = 

// const Language = {
//   set current(name){
//     this.log.push(name)
//   },
//   log: []
// }

// Language.current = 'EN'

// Question 4
// const Person = {
//   str1 : "I",
//   str2 : "am not",
//   str3 : "IronMan",
  
//   get fullStrings(){
//     return `${this.str1} ${this.str2} ${this.str3}`
//   },
  
//   set fullStrings(stringArr){
//     const parts = stringArr.split(' ')
//     this.str1 = parts[0];
//     this.str2 = parts[1];
//     this.str3 = parts[2];
//   }
// }

// console.log(Person.fullStrings)
// Person.fullStrings = "I am batman"
// // console.log(`${Person.str1} ${Person.str2} ${Person.str3}`)
// console.log(Person.fullStrings)

// console.log(Person.str1)
// console.log(Person.str2)
// console.log(Person.str3)

// Question 2 :
 // const object = {
//   stringArr : ["Hello", "Mr", "Som", "Jaina"],
  
//   get getCumulativeString(){
  
//     wholeString = ""
  
//     for(let str of this.stringArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
// }

// console.log(object.getCumulativeString)




// Question 3 from the above
// demonstrate  same thing in a class and call the getter by making an object of class
// class PrintString {
   
//   constructor(strArr) {
//     this.strArr = strArr;
//     // this.strArr = ["Hello", "Mr", "Som", "Jaina"];
//   }
   
//     get getCumulativeString(){
  
//     let wholeString = ""
  
//     for(let str of this.strArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
  
// }
 
// const getString = new PrintString(["Hello", "Mr", "Som", "Jaina"]) // new PrintString()
// console.log(getString.getCumulativeString)
 
 
// const object = {
//   stringArr : ["Hello", "Mr", "Som", "Jaina"],
  
//   get getCumulativeString(){
  
//     wholeString = ""
  
//     for(let str of this.stringArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
// }

// console.log(object.getCumulativeString)



// Practice Question : make an object object of 2 key value pairs, make sure to pass values as integer. 
// make a getter method/ function. Do multiply those numbers return it and print it outside object

// const object = {
//   a : 10,
//   b : 20,
//   get getMultiplication(){
//     return this.a * this.b
//   }
// }

// console.log(object.getMultiplication)

// ! classical inheritance + static members
// Practice Question
  // parent class movie
  /**
  - Type
  - noOfSongs (put 0 if no songs are there)
  - TotalNoOfCasts(no of actors)
  - mainProtagonist means (hero name)
  - languagesDubbed
  - climaxScenes
  
  child class
  specificMovie Blueprint
  - movieName
  - relaeseDate
  - duration
  - rating
  - Hollywood/Bollywood
  
  
  you have to make 5 movies.
  and dont forgot to use "static" keyword for common properties (atleast one static property) 
  you have to think which properties are lie inside static properties
  make a static fn in specificMovie to access all the properties of movie.
  use inheritance to access properties of Movie class inside specificMovie class
  */
  
  
// class Movie {
    
//   static languagesDubbed = "Hindi, English";

//   constructor(type, noOfSongs = 0, totalNoOfCasts, mainProtagonist, climaxScenes) {
//     this.type = type;
//     this.noOfSongs = noOfSongs;
//     this.totalNoOfCasts = totalNoOfCasts;
//     this.mainProtagonist = mainProtagonist;
//     this.climaxScenes = climaxScenes;
//   }
// }


// class SpecificMovie extends Movie {
//   constructor(type, noOfSongs, totalNoOfCasts, mainProtagonist, climaxScenes, movieName, releaseDate, duration, rating, hollywoodOrBollywood) {
//     super(type, noOfSongs, totalNoOfCasts, mainProtagonist, climaxScenes);
//     this.movieName = movieName;
//     this.releaseDate = releaseDate;
//     this.duration = duration;
//     this.rating = rating;
//     this.hollywoodOrBollywood = hollywoodOrBollywood;
//   }

//   static printCommonDetails() {
//     console.log(`Languages Dubbed: ${Movie.languagesDubbed}`);
//   }

//   printMovieDetails() {
//     console.log(`Movie Name: ${this.movieName}`);
//     console.log(`Type: ${this.type}`);
//     console.log(`Number of Songs: ${this.noOfSongs}`);
//     console.log(`Total Number of Casts: ${this.totalNoOfCasts}`);
//     console.log(`Main Protagonist: ${this.mainProtagonist}`);
//     console.log(`Climax Scenes: ${this.climaxScenes}`);
//     console.log(`Release Date: ${this.releaseDate}`);
//     console.log(`Duration: ${this.duration}`);
//     console.log(`Rating: ${this.rating}`);
//     console.log(`Hollywood or Bollywood: ${this.hollywoodOrBollywood}`);
//     console.log("------------------------------------------")
//   }
// }

// // instance is created for SpecificMovie 
// const movie1 = new SpecificMovie("Feature Film", 5, 20, "Aamir Khan", "Final Battle, Resolution", "3 Idiots", "2009-12-25", "170 minutes", 8.4, "Bollywood");
// const movie2 = new SpecificMovie("Feature Film", 4, 15, "Aamir Khan", "Final Exam, Reunion", "3 Idiots", "2009-12-25", "170 minutes", 8.4, "Bollywood");
// const movie3 = new SpecificMovie("Feature Film", 6, 25, "Christian Bale", "Joker Capture, Bat Signal", "The Dark Knight", "2008-07-18", "152 minutes", 9.0, "Hollywood");
// const movie4 = new SpecificMovie("Feature Film", 3, 18, "Aamir Khan", "Wrestling Match, Victory", "Dangal", "2016-12-23", "161 minutes", 8.4, "Bollywood");
// const movie5 = new SpecificMovie("Feature Film", 5, 20, "Leonardo DiCaprio", "Final Battle, Resolution", "Inception", "2010-07-16", "148 minutes", 8.8, "Hollywood");

// // Printing common details
// SpecificMovie.printCommonDetails();

// // Printing specific movie details
// movie1.printMovieDetails();
// movie2.printMovieDetails();
// movie3.printMovieDetails();
// movie4.printMovieDetails();
// movie5.printMovieDetails();
  
  
  
// class Movie {
  
//   static languagesDubbed = "Hindi, English";
  
//   constructor(type,noOfSongs = 0,TotalNoOfCasts,mainProtagonist,climaxScenes){
//     this.type = type;
//     this.noOfSongs = noOfSongs;
//     this.TotalNoOfCasts = TotalNoOfCasts;
//     this.mainProtagonist = mainProtagonist;
//     this.climaxScenes = climaxScenes;
//   }
  
 
// }

// class specificMovie extends Movie{
//   constructor(type, noOfSongs, TotalNoOfCasts,
//   mainProtagonist, climaxScenes, movieName, relaeseDate, duration, rating, hollywoodOrBollywood){
    
//     super(type, noOfSongs, TotalNoOfCasts, mainProtagonist,climaxScenes)
  
//   this.movieName = movieName;
//   this.relaeseDate = relaeseDate;
//   this.duration = duration;
//   this.rating = rating;
//   this,hollywoodOrBollywood = hollywoodOrBollywood;
  
//   }
 
 
//   static printCommonDetails () {
//     console.log(`${Movie.type}, ${Movie.noOfSongs}, ${Movie.TotalNoOfCasts}, ${Movie.languagesDubbed}`)
//   }
  
//   printMovieDetails(){
//     console.log(`${this.movieName}, ${this.mainProtagonist}, ${this.climaxScenes}, ${this.relaeseDate}, ${this.duration}, ${this.rating}, ${this.hollywoodOrBollywood} `)
//   }
// }

// const movie1 = new specificMovie("4 Idiots", "2009-12-25", "170 minutes", 8.4, "Bollywood", "Aamir Khan");

// specificMovie.printCommonDetails()

// movie1.printMovieDetails()




// 18 July 24
// Inheritance 
// Practice Question: There is a parent called Vehicle having properties:
// - tyresType(Tubles / not)
// - NoOfAirbags
// - noofseats
// - EngineHorsePower
// - lights (LED, etc)
  // +1 property of your choice here.

// there is a child called Car
// - brand, -typeOfCar(SUV, hatchback, sedan), 
// - DieselorPetrol, - Automatic, sunroof, Color
// make a method to print all the details of car 

// you have  to design 4 cars - hondaCity, BMW, Scorpio, TATA out of CAR Blueprint

// Make desired Blueprint to deign this problem

// class Vehicle {
  
//   constructor(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage){
//     this.tyresType = tyresType;
//     this.noOfAirBags = noOfAirBags;
//     this.noOfSeats = noOfSeats;
//     this.engineHorsePower = engineHorsePower;
//     this.lights = lights;
//     this.milage = milage
//   }
//     printAllDetails(){
//     console.log(`Car Details:
//     Brand: ${this.brand}
//     Type: ${this.typeOfCar}
//     Diesel or Petrol: ${this.dieselOrPetrol}
//     Automatic: ${this.isAutomatic}
//     Sunroof: ${this.sunroof}
//     Color: ${this.color}
//     Tyres Type: ${this.tyresType}
//     Number of Airbags: ${this.noOfAirBags}
//     Number of Seats: ${this.noOfSeats}
//     Engine Horse Power: ${this.engineHorsePower}
//     Lights: ${this.lights}
//     Fuel Efficiency: ${this.milage}`)
//   }
  
// }

// class Car extends Vehicle {
//   constructor(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage,
//               brand, typeOfCar, dieselOrPetrol, isAutomatic, sunroof, color){
    
//     super(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage)
    
//     this.brand = brand;
//     this.typeOfCar = typeOfCar;
//     this.dieselOrPetrol = dieselOrPetrol;
//     this.isAutomatic = isAutomatic;
//     this.sunroof = sunroof;
//     this.color = color;
//   }
  
//   printDetailsOfCar(){
//     console.log(`${this.brand}, ${this.typeOfCar}, ${this.dieselOrPetrol}, ${this.isAutomatic}, ${this.sunroof}, ${this.color}`)
//   }
  
// }

// const hondaCity = new Car("Tubeless",6,  5,  120,  "LED",  "15 km/l",  "Honda",  "Sedan",  "Petrol",  true,  true, "White");

// const bmw = new Car("Tubeless",8,5,  300,  "LED",  "12 km/l",  "BMW",  "SUV",  "Diesel",true,  true, "Black");

// const scorpio = new Car("Tubeless",4,7,140,"Halogen",  "10 km/l",  "Mahindra",  "SUV",  "Diesel",  false,  false,"Red");

// const tata = new Car("Tubeless", 2, 5,  110,  "LED",  "18 km/l",  "TATA",  "Hatchback",  "Petrol",  false,  false,  "Blue");

// // Print details of car
// hondaCity.printDetailsOfCar();
// bmw.printDetailsOfCar();
// scorpio.printDetailsOfCar();
// tata.printDetailsOfCar();

// // All the details are print 
// hondaCity.printAllDetails()
// bmw.printAllDetails()
// scorpio.printAllDetails()
// tata.printAllDetails()




// Quick Practice Question

// Design a hospital. include  properties of NoOfPatients, patientName, patientWardNo, patientAge,
// totalDoctors, totalStaff, totalBeds, pharamacyAvailable, surgeriesPending, OPD Timings, patientWeight, hospitalMobile
// admit atleast 4 new patients in hospital
// make custome fn to print all details of a patients inside Blueprint
// use static methods for which properties are in static

// class Hospital {
//   static hospitalName = "J J Hospital"
//   static totalDoctors = 50;
//   static totalStaff = 150;
//   static totalBeds = 220;
//   static pharamacyAvailable = true;
//   static surgeriesPending = 10;
//   static opdTimings = "8 AM - 2 PM";
//   static hospitalMobile = "1234567890";
  
//   constructor(patientName, patientWardNo, patientAge, patientWeight){
//     this.patientName = patientName;
//     this.patientWardNo = patientWardNo;
//     this.patientAge = patientAge;
//     this.patientWeight = patientWeight;
//   }
  
//   static DisplayInformation() {
    
//     console.log(`
//     Hospital Name: ${Hospital.hospitalName}, 
//     Total Doctors : ${Hospital.totalDoctors},
//     Total No of Beds : ${Hospital.totalBeds},
//     Total Staff : ${Hospital.totalStaff},
//     Pharamacy Available : ${Hospital.pharamacyAvailable},
//     Surgeries Pending : ${Hospital.surgeriesPending},
//     OPD Timing : ${Hospital.opdTimings},
//     Hospital Phone : ${Hospital.hospitalMobile}
//       `)
//   }
  
//   admitPatientDetails(){
//     console.log(`${this.patientName}, ${this.patientWardNo}, ${this.patientAge} Years Old, ${this.patientWeight} KG `)
//   }
  
// }


// const admitPatient1 = new Hospital("John Doe", 101, 45, 70);
// const admitPatient2 = new Hospital("Jane Smith", 102, 30, 60);
// const admitPatient3 = new Hospital("Alice Johnson", 103, 25, 55);
// const admitPatient4 = new Hospital("Bob Brown", 104, 50, 80);


// Hospital.DisplayInformation()

// admitPatient1.admitPatientDetails()
// admitPatient2.admitPatientDetails()
// admitPatient3.admitPatientDetails()
// admitPatient4.admitPatientDetails()


// 17 July 24
// Basic intro about inheritance 
// explain extends keyword and super is used to called parent constructor


// static variable and method 
// Question Design a a Blueprint name classRoom
// Add these properties - noOfStudentsInClass, sectionName, studentName, noOfSubjects, studentAge,
                          // uniformColor, schoolName,CGPA(of a student),Gender
// use static methods for which properties are in static
// Out of this classRoom make 5 students out of it.
// add a custome fn to print all the common properties.

// class ClassRoom {
//   // static varibles that are common for all students.
//   static schoolName = "Don Bosco School Pune";
//   static noOfSubjects = 6;
//   static uniformColor = "White&Black";
//   static sectionName = "A";
//   static noOfStudentsInClass = 88;
  
//   constructor(studentName,studentAge,CGPA,Gender){
//     this.studentName = studentName;
//     this.studentAge = studentAge;
//     this.CGPA = CGPA;
//     this.Gender = Gender;
//   }
//   // printing the Common Information 
//   static printCommonDetails(){
//     console.log(`Common Information: 
//     School Name : ${ClassRoom.schoolName},
//     No of Subjects : ${ClassRoom.noOfSubjects},
//     Uniform Color : ${ClassRoom.uniformColor},
//     Section Name : ${ClassRoom.sectionName},
//     No od Students: ${ClassRoom.noOfStudentsInClass}`)
//     console.log('-------------------------')
//   }
  
//   printDetails() {
//         console.log(`Student Name: ${this.studentName},
//         Student Age: ${this.studentAge},
//         CGPA: ${this.CGPA},
//         Gender: ${this.Gender}`);
//         console.log('-------------------------')
//   }
// }

// const student1 = new ClassRoom("Gimmy",   14, 3.8, "Female");
// const student2 = new ClassRoom("Mohit",   15, 3.6, "Male");
// const student3 = new ClassRoom("Hitesh",  14, 3.9, "Male");
// const student4 = new ClassRoom("Sonu",    13, 4.0, "Female");
// const student5 = new ClassRoom("Daniyal",  15, 3.7, "Male");

// ClassRoom.printCommonDetails()

// const arrOfObj = [student1,student2,student3,student4,student5]

// arrOfObj.forEach((item)=>{
//   item.printDetails()
// })

// or you can do this
// student1.printStudentDetails();
// student2.printStudentDetails();
// student3.printStudentDetails();
// student4.printStudentDetails();
// student5.printStudentDetails();




// !static properties/variable belongs to class not to object 

// class Car {
//   static air = "bags"
//   constructor(brand){
//     this.brand = brand;
//   }
//   static hello(){
//     return 'hello!!!!'
//   }
// }
// const newCar = new Car("ford")

// // Note : ! Static properties belongs to class not object

// // static function called
// console.log(Car.hello())

// // static varibale called
// console.log(Car.air)


// yesterday
// Practice Question
// Make a Blueprint mobilePhone
// Have properties like screensize (0-15), camera(megapixel), charginPort, color, 
// water resistent, os- Operating system, storage, +1 more property of your choice
// make a custome function in that  Blueprint to print all the properties of the object.
// make atleast 4 mobilePhones from Blueprint

// class mobilePhone {
// constructor(screenSize, camera, charginPort, color, 
//               waterResistent, OperatingSystem, storage, price){
//                 this.screenSize = screenSize;
//                 this.camera = camera;
//                 this.charginPort = charginPort;
//                 this.color = color;
//                 this.waterResistent = waterResistent;
//                 this.OperatingSystem = OperatingSystem;
//                 this.storage = storage;
//                 this.price = price;
//               }
              
//   printDetails = () => {
//     console.log(`Mobile phone details:
//       Screen Size: ${this.screenSize} inches
//       Camera: ${this.camera} MP
//       Charging Port: ${this.charginPort}
//       Color: ${this.color}
//       Water Resistant: ${this.waterResistent}
//       Operating System: ${this.OperatingSystem}
//       Storage: ${this.storage} GB
//       Price: ${this.price} K
//     `);
//   }
// }

// const IphoneX  = new mobilePhone(6.1, 12, 'USB-C', 'Black', true, 'iOS', 64, 35) 
// const SamsungGalaxy = new mobilePhone(6.1, 12, 'USB-C', 'Black', false, 'Android', 64, 25) 
// const SamsungS21 = new mobilePhone(6.1, 12, 'USB-C', 'Black', true, 'Android', 64, 55) 
// const Iphone15 = new mobilePhone(6.1, 12, 'USB-C', 'Black', true, 'iOS', 64, 60) 

// IphoneX.printDetails()
// SamsungGalaxy.printDetails()
// SamsungS21.printDetails()
// Iphone15.printDetails()









// 16 July 24
// OOPs started : 
// ! Class is a Blueprint to make an object.
// ! constructor is a function which is used to initalize the object. 
// ! new is operator lets developers create an instance of a user-defined object type.

// Task : Make a Blueprint Name "SuperHero"
//

// class SuperHero {
  //a constructor is a function which is used to initialize an object
// // created a constructor for all the properties name, strength....
// !! The constructor method will take a number of parameters and assign those parameters as properties to the created object.
//   constructor(name, strength, health, canFly, canTeleport, stardom, speed, intelligence, agility){
//     this._name = name
//     this._strength = strength
//     this._health = health
//     this._canFly = canFly
//     this._canTeleport = canTeleport
//     this._stardom = stardom
//     this._speed = speed
//     this._intelligence = intelligence
//     this._agility = agility 
//   }
  
//   // custome function to print all details
//   printAllDetails() {
//     console.log(`Name: ${this._name}`);
//     console.log(`Strength: ${this._strength}`);
//     console.log(`Health: ${this._health}`);
//     console.log(`Can Fly: ${this._canFly}`);
//     console.log(`Can Teleport: ${this._canTeleport}`);
//     console.log(`Stardom: ${this._stardom}`);
//     console.log(`Speed: ${this._speed}`);
//     console.log(`Intelligence: ${this._intelligence}`);
//     console.log(`Agility: ${this._agility}`);
   
//   }
  
  
//   // print sum of all integers 
//   getSumOfIntegers() {
//     let sum = this._strength + this._health + this._stardom +  this._speed + this._intelligence + this._agility
//     console.log(`Sum of All integer properties for ${this._name} : ${sum}`)
//     console.log('--------*****--------')
//   }
  
// }

// // 5 superhero's

// ! The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function
// const hero1 = new SuperHero("Captain Marvel", 500, 100, true, false, 90, 85, 95, 80);
// const hero2 = new SuperHero("Spider-Man", 300, 90, false, false, 80, 75, 90, 95);
// const hero3 = new SuperHero("Iron Man", 400, 85, true, false, 95, 80, 100, 70);
// const hero4 = new SuperHero("Thor", 500, 100, true, true, 95, 70, 85, 90);
// const hero5 = new SuperHero("Black Panther", 350, 95, false, false, 85, 90, 85, 100);

// // Printing details of each superhero

// hero1.printAllDetails();
// hero1.getSumOfIntegers();

// hero2.printAllDetails();
// hero2.getSumOfIntegers();


// hero3.printAllDetails();
// hero3.getSumOfIntegers();

// hero4.printAllDetails();
// hero4.getSumOfIntegers();

// hero5.printAllDetails();
// hero5.getSumOfIntegers();







// 13 && 14 Weekend --> 15 July 24

// What we learned till now 
// bind map reduce filter polyfills

// bind ---> function(applies). (Function.prototype)

// map, reduce, filter applies on ----> Array (Applies)


// bind ---> return a new function that can be invoked later.

// map ---> return a new Array (Array.prototype)

// Polyfill of filter 

// Array.prototype.myFilter = function(callback){
//   let resultantArr = []
//   for(let i = 0; i < this.length; i++){
//     if(callback.call(this,this[i])){ // if(callback(this[i])) it also works fine  
//       resultantArr.push(this[i])
//     }
//   }
//   return resultantArr
// }
// 

// Array.prototype.myFilter = function(callback){
//   let arr = []
//   for(let i = 0; i< this.length; i++){
//     if(callback.call(this,this[i])){
//       arr.push(this[i])
//     }
//   }
//   return arr
// }

// const arr = [77,66,89,93,32,33,13,61,15,3,1323]
// const resultantArr = arr.myFilter(num => num % 10 === 3) //[ 93, 33, 13, 3, 1323 ]

// console.log(resultantArr)

// 3. Question task find even length strings

// const arr = ["one","two","three","four", "five","six","seven","eight", "nine","ten"]
// const filteredArr = arr.myFilter((ele) => ele.length % 2 === 0)
// console.log(filteredArr)

// const data = [10,11,22,20,30,200,550,21,65,89]
// const filterLog = data.myFilter((el) => el % 5 === 0)
// console.log(filterLog)

// 3.Question task
// const arr = [10,11,22,20,30,200,550,21,65,89]
// const filterLog = arr.filter((el) => el % 5 === 0) // [ 10, 20, 30, 200, 550, 65 ]
// console.log(filterLog)

// 2.Question Revise: task -> cumulative sum of array element initialValue 83 after that multiply result with 2 and print it. 

// Array.prototype.myReduce = function (callback, initialValue) { 
//     let accumulator = initialValue;
//     for(let i = 0; i < this.length; i++){
//       accumulator = callback.call(this, accumulator, this[i])
//     }
//     return accumulator
// }


// const arr = [1, 2, 3, 4, 5, 6, 7,8,9,10];
// const result = arr.myReduce((acc, curr) => acc + curr, 83) * 2
// console.log(result)


// 1.Question Revise: task -> cumulative product of array element

// Array.prototype.myReduce = function (callback, initialValue) { 
//       let accumulator = initialValue 
//       for(let i = 0; i < this.length; i++){
//         if(accumulator){
//           accumulator = callback.call(this, accumulator, this[i])
//         }
//         else{
//           accumulator = this[i]
//         }
//       }
//       return accumulator
//     } 


// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.myReduce((acc, curr) => acc * curr)
// console.log(result)









// 12 July 24
// Polyfill of .reduce for initialValue 


// const arr = [1, 2, 3, 4, 5, 6, 7];

// Array.prototype.myReduce = function (callback, initialValue) { 
//         let accumulator = initialValue; 
//         for (let i = 0; i < this.length; i++) { 
//                 accumulator = callback.call(this,  
//                     accumulator, this[i]); 
//         } 
//         return accumulator; 
//     } 

// const average = arr.myReduce((acc, curr) => acc + curr,2)   
// console.log(average);


// Polyfill of .reduce() method
// const arr = [1, 2, 3, 4, 5, 6, 7];

// Array.prototype.myReduce = function (callback, initialValue) { 
//         let accumulator = initialValue; 
//         for (let i = 0; i < this.length; i++) { 
            
//             if (accumulator) { 
//                 accumulator = callback.call(this,  
//                     accumulator, this[i]); 
//             } 
//             else { 
//                 accumulator = this[i]; 
//             } 
//         } 
//         return accumulator; 
//     } 

// const average = arr.myReduce((acc, curr) => acc + curr ) / arr.length 
// console.log(average);


// refactor the below code
// const average = arr.map((val, idx) => (val * 2 + 32) - idx).reduce((acc, curr) => acc + curr, 0) / arr.length; 

// console.log(average); // Output: 37


// const arr = [1,2,3,4,5,6,7]

// const newArr = arr.map((val,idx)=> ((val*2)+ 32) - idx) // [34, 35, 36, 37, 38, 39, 40]

// const sum = newArr.reduce((accumulator, currentValue) => (accumulator + currentValue)) // 259

// const average = sum / arr.length 

// console.log(average) // 37

// ! its not working bcz =>  Arrow Function Issue:

// Arrow functions do not have their own this context. Instead, they inherit this from the lexical scope in which they are defined.
// When you use an arrow function to define myMap, this inside myMap does not refer to the array instance arr, but to the global context or the enclosing lexical context where myMap is defined. As a result, this.length is undefined, and the loop does not execute.
// Solution:

// Use a regular function (not an arrow function) to define myMap. Regular functions have their own this context, which correctly refers to the array instance on which the method is called.

// Array.prototype.myMap = (fn) =>  {
//   let array = []
//   for(let i = 0; i < this.length; i++){
//     array.push(fn(this[i],i))
//   }
//   return array
// }

// const result = arr.myMap((value,index) => (value * 23 + index) / 3) 
// console.log(result)



// Polyfill of map
// const arr = [1,2,3,4,5,6,7]

// Array.prototype.myMap = function(fn) {
//   let array = []
//   for(let i = 0; i < this.length; i++){
//     array.push(fn(this[i],i))
//   }
//   return array
// }

// const result = arr.myMap((value,index) => (value * 23 + index) / 3) 
// console.log(result)

// const result = arr.map((ele,index) => ele - 11 + index)
// or
// const result = arr.map((ele,index) => {return ele - 11 + index})
// console.log(result)

// !RevisePollyfill of bind method 
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }
// const getData = function(place1,place2){
//   console.log(`My name is ${this.firstName} ${this.lastName} and age is ${this.age}. from ${place1} & ${place2}`)
// }

// Function.prototype.myBind = function(...args){
//   // reference to the object
//   let gettingData = this
//   const para =args.slice(1)
//   return function(){
//     gettingData.apply(args[0],para)
//   }
// }

// let getDataFromBind = getData.myBind(personDetails,"Delhi","Mumbai","Pune")
// getDataFromBind()









// 11 July 24
// namaste friend
// !! Q3. Pollyfill of
// Array.prototype.myMap = function(callback){
//     let temp=[];
//     // let callback = this
//     for(let i = 0;i < this.length; i++)
//     { 
//         temp.push(callback(this[i]*2,i))
//         // temp.push(callback(this[i]*2,i));
//         console.log(callback(this[i]*2,i))
//     }
//     return temp;
// };
// //Performing map method through custom made map called myMap
// const nums = [1,2,3,4];
// const multiply=nums.myMap((x)=>{
//     return x
// })
// console.log(multiply);

// !! Q2.make a Pollyfill for bind having functionality to pass arguments.Pass at least 2 arguments
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }
// const getData = function(place1, place2){ // function(...place) all the rest of the list is print
//   console.log(`My name is ${this.firstName} ${this.lastName} ${place1} & ${place2}, and age is ${this.age}`)
//   // console.log(`${place}`)

  
// }

// // Pollyfill of bind method 
// Function.prototype.bmbind = function(...args){
//   let gettingData = this
//   const params = args.slice(1)
//   return function(){
//     gettingData.apply(args[0],params)
//   }
// }

// let getDataFromBind = getData.bmbind(personDetails,"Delhi","Mumbai")
// getDataFromBind()

// !! Q1. Demonstrate a Pollyfill of .bind

// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }
// const getData = function(){
//   console.log(`My name is ${this.firstName} ${this.lastName} and age is ${this.age}`)
// }

// // Pollyfill of bind method 
// Function.prototype.bmbind = function(...args){
//   let gettingData = this
//   return function(){
//     gettingData.call(args[0])
    
//   }
// }

// let getDataFromBind = getData.bmbind(personDetails)
// getDataFromBind()

// .bind method
// Question  Demonstate .bind method and pass 3 parameters in the .bind method and function.
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// const getData = function(...data) {
//   console.log(`${this.firstName}, ${data}`)
// }

// let getPassedData = getData.bind(personDetails,"Delhi","Mumbai","Goa")
// getPassedData()

// ! Revision question pass the whole array in .apply method and access each element using for loop. Demonstate it.
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
//   }
// }

// // // .apply method 
// const getPlaces = function(...arrOfPlaces){
//   for(let place of arrOfPlaces) {
//   console.log(`${place}`)
//   }
// }
// getPlaces.apply(personDetails,['India','New York','USA'])

// ! Revision question demonstrate .call and .apply Method

// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
//   }
// }
  

// const getAddress = function(streetNo) {
  // console.log(`Address : streetNo. ${streetNo} ${this.address.city} zip : ${this.address.zip}`) 
// } 

// getAddress.apply(personDetails,["123"])

// const getAge = function() {
//   console.log(`Age is ${this.age}`) 
// }
// getAge.call(personDetails)










// 10 july 24.
// call Method
// 1.question
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
//   }
// }

// // // .apply method 
// const getPlaces = function(...arrOfPlaces){
//   for(let place of arrOfPlaces) {
//   console.log(`${place}`)
//   }
// }
// getPlaces.apply(personDetails,['India','New York','USA']) // "Hello from India, New York, John Doe"

// const getPlaces = function(place){

  // console.log(`Hello from ${place}, ${this.firstName} ${this.lastName} `)
// }
// getPlaces.apply(personDetails,['India','New York','USA'])

// .call method
// function printFullName(){
  // console.log(`printFullName, ${this.firstName} ${this.lastName}`)
// }

// const getFullName = function(place){
  // console.log(`Hello from ${place}, ${this.firstName} ${this.lastName} `)
// }
// getFullName.call(personDetails,"India")

// !! Note : Yes it will not work. Because we have to store a function in a variable 
// const getData = () => {
//   console.log(`getData, ${this.firstName} ${this.lastName}`)
// }

// printFullName.call(personDetails)
// getData.call(personDetails)

// question 
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const clonedArr = [...arr]
// const SubArr = clonedArr.slice(0,4)
// console.log(SubArr) // [1,2,3,4]
// const extendedArr = SubArr.concat([2,66,8,"a"])
// console.log(extendedArr) // [1, 2, 3, 4, 2, 66, 8,'a']

// Copy arr
// concatenat
// const arr = [1,2,3,4,5]
// const extendedArr = arr.concat([6,7,8])
// console.log(extendedArr) // [ 1, 2, 3, 4, 5, 6, 7, 8]

// question is to make an array of your choice and extract a subarray from index 0 to 5
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const extractedArr = arr.slice(0,6)
// console.log(extractedArr) // [ 1, 2, 3, 4, 5 ]


// const arr = [1,2,3, "hello", "a","Sam","b"]
// const clonedArr = [...arr]
// another way

// console.log(clonedArr) // [ 1, 2, 3, 'hello', 'a', 'Sam', 'b' ]




// 4 level object
// let weatherApp = { // level 1
//   user: { // level 2
//     id: 1,
//     name: "John Doe",
//     location: { // level 3
//       latitude: 40.7128,
//       longitude: -74.0060,
//       city: "New York",
//       country: "USA",
//       address: { // level 4
//         street: "5th Avenue",
//         number: 123,
//         postalCode: "10001"
//       }
//     }
//   }
// }





// Revision of shallow copy

// Asked in interivews 
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
// }
// }

// // Deep copy created using spread operator
// // const newObj = {...personDetails}
// const newObj = JSON.parse(JSON.stringify(personDetails))

// newObj.firstName = "James"

// console.log(newObj.firstName) // James
// console.log(personDetails.firstName) // John

// // Deep copy is not affected for multilevel object 
// newObj.address.city = "Delhi"
// console.log(newObj.address.city) // Delhi
// console.log(personDetails.address.city) // New York


// Get Object Keys
// Create an object called student with a property called name. 
// Add a property to the Object prototype called getKeys() 
// that returns an array of all the keys in the object.

// const student = {
// 	name:"Bhavesh",
//     age:20
// }
// Object.prototype.getKeys = function(){
// 	return Object.keys(this)
// }
// const keys = student.getKeys()
// console.log(keys)

// 9 july 24
// const arr = [1,2,3,4,5]
// const clonedArr = ["a","batman",...arr,"b"]
// console.log(clonedArr) // [ 'a', 'batman', 1, 2, 3, 4, 5 ]


// 8 july 24

// const studentObj = {
//   name : "Akshay",
//   rollNo : 44,
//   city: "pune",
//   phone: 3214343,
//   result: "pass",
//   class: 9
// }

// //  shallow copy created using spread operator
// const newObj = {...studentObj}

// newObj.name = "bhavesh"
// console.log(newObj.name) // bhavesh
// console.log(studentObj.name) // Akshay



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     city: "New York"
// };

// // shallow copy created using Object.assign({},objectName) 
// // const newObj = Object.assign({jobId:"1234"},person)
// const newObj = JSON.parse
// console.log(newObj.firstName)
// console.log(newObj.jobId)
// // console.log(newObj.jobId))

// newObj.lastName = "smith" 

// console.log(person.lastName) // Doe
// console.log(newObj.lastName) // smith



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     city: "New York"
// };

// // Deep copy created using Object.assign({},objectName) 

// const newObj = JSON.parse(JSON.stringify(person,{}))

// newObj.age = 25
// console.log(newObj.jobId)
// console.log(newObj.age) // 25
// console.log(person.age) // 30


// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college"
//     }
// }
// }
// // shallow copy created using spread operator
// const newObj = {...personDetails}

// newObj.firstName = "James"

// console.log(newObj.firstName) // James
// console.log(personDetails.firstName) // John

// newObj.address.city = "Delhi"
// console.log(newObj.address.city) // Delhi
// console.log(personDetails.address.city) // Delhi



