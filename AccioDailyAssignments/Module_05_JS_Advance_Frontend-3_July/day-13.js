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


function incrementNumber(num) {
    return new Promise((resolve, reject) => {
        if (num < 0) {
            return reject('Please enter a positive number');
        }
        resolve(num);
    })
    .then(result => {
        result += 2;
        console.log(result);
        return result;
    })
    .then(result => {
        result += 3;
        console.log(result);
        return result;
    })
    .then(result => {
        result += 4;
        console.log(result);
        return result;
    })
    .then(result => {
        result += 5;
        console.log(result);
        return result;
    })
    .then(result => {
        result += 6;
        console.log(result);
        return result;
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
}


incrementNumber(10)
   
    







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
