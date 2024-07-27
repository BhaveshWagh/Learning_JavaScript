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
