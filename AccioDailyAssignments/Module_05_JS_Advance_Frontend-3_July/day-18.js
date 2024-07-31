// !30 july 2024 last class of module f3

// Project chatApp using sockets : https://github.com/rishabhjajoriya/Socket-io-Chat-App.git
// Sockets:
// !sockets works like Directed graph 
// learn about graph and DP
// Mosh for frontend very good and striver playlist
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
