// 25 July 2024
const asyncAwait = async (n1,n2) => {
    console.log("Execution start")

    const sum = n1 + n2;
    console.log(sum)
    
    const difference = await n1 - n2;
    console.log(difference)

    
    const multiple = await n1 * n2;
    console.log(multiple)

    
    const divide = await n1 / n2;
    console.log(divide)

    
    const modulo = await n1 % n2;
    console.log(modulo)

    console.log("Execution ends")
}

asyncAwait(10,2)


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

const addTwoNumbers = async (a, b) => {
  console.log("Javascript waits for none!");
  return a + b;
};

const demonstrateAsyncAwait = async () => {
  console.log("Starting async function...");

  const num1 = 3;
  const num2 = 7;

  console.log(`Initial numbers: ${num1}, ${num2}`);

  const sum = await addTwoNumbers(num1, num2);
  console.log(`Sum of ${num1} and ${num2}: ${sum}`);

  const doubleSum = await addTwoNumbers(sum, sum);
  console.log(`Double of the sum: ${doubleSum}`);

  console.log("Async function completed.");
};

demonstrateAsyncAwait();

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
