// 23 July 24
// Promises
// Promises:-
// JavaScript Promises used to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code. 
// syntax
// let promise = new Promise(function(resolve, reject){
    //do something
// });


// make a promise. resolve it and print the result after 3 seconds
const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
      reject("Promise reject after 3 seconds")
    }, 3000)
  })
  
  promise
  .then((result) => console.log(result), (error) => console.log(error))
  
  
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
  
  //Callback Hell
  // Callbacks are nested within other callbacks several levels deep, making the code difficult to read and maintain. This can lead to issues in understanding the flow and debugging the code.
// This is called Callback hell

// Your array of words
let words = ['hesop', 'dska', 'jdka', 'kdalm'];

// Function to simulate the animation
const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
                setTimeout(() => {
                    animate(words[3]);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Function to animate a single word
// const animate = (word) => {
//     console.log(`Animating: ${word}`); // Simulate animation by logging to the console
// }

// // Start the animation process
// animateAll(animate)

  
  
  // 1.Question
  // ! write a function named fetchData that simulates that using setTImeout and calls a callback function with printing data received after 2 seconds . 
  // fn(){print data recived after 2 seconds}fetchData(fn) fn -> callback fn.
  
  const fetchData = (callback) => {
    setTimeout(() => {
      const data  = "Data received after 3 seconds";
      callback(data)
    }, 3000);
  }
  
  // fetchData((data) => {
  //   console.log(data)
  // })
  
  
  // const printData = (data) => {
    // console.log(data)
  // }
  // fetchData(printData)
  