// 27 July 24 - promise.all, PostMan API, JSON fetch

// ! given an array [] multiply each element by 3 using map then filter all the elements 
// which are divisible by 2 then sum all the elements using reduce
// use only polyfills. Don't use inbuilt functions

const arr = [32, 43, 55, 66, 7];

// map polyfill
Array.prototype.myMap = function (callback) {
   const resultantArr = [];
 
  for (let i = 0; i < this.length; i++) {
    resultantArr.push(callback(this[i], i))
  }
  return resultantArr;
};

// filter polyfill
Array.prototype.myFilter = function (callback){
  const resultantArr = [];
  
  for(let i = 0; i < this.length; i++){
    if(callback(this[i],i)){
      resultantArr.push(this[i])
    }
  }
  return resultantArr;
}

// reduce polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  
  for (let i = 0; i < this.length; i++) {
    
    if (accumulator) {
      accumulator = callback.call(this, accumulator, this[i]);
    } 
    
    else {
      accumulator = this[i];
    }
  }
  return accumulator;
};



const resultArr = arr.myMap((ele) => ele * 3);
console.log(resultArr);

const filterArr = resultArr.myFilter((ele) => ele % 2 === 0)
console.log(filterArr);

const reducedSum = filterArr.myReduce((acc, curr) => acc + curr)
console.log(reducedSum);




// Postman -  API 
// JSON :
// URL --> we have JSON object. You have to access a property in that JSON Object. 
// How would you do that?

// const data = {
//   menu: "high",
//   price: "low",
//   foods: [1,2,3,{
//     people:[72,27]
//   }]
// }
 
//console.log(data.foods[3].people[1])
 
 
 
// const fetchData = async () => {
//   const response = await fetch("")
//   const data = await response.json()
//   console.log(data.foods[3].people[1])
// } 
// fetchData()





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


