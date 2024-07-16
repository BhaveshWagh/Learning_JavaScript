// 16 July 24
// OOPs started : 

// 13 && 14 Weekend --> 15 July 24
// bind map reduce filter polyfills

// bind ---> function(applies). (Function.prototype)

// map, reduce, filter applies on ----> Array (Applies)


// bind -----> return a new function that can be invoked later.

// map ------> return a new Array (Array.prototype)

// reduce ---> return single value (Array.prototype)

// filter ---> returns A new array (Array.prototype)

// deep clone shallow clone
// deep Object 
// slice

// .call(this(reference), parameters)
// .apply(this(reference), parameters list of Array)
// .bind(this(reference), parameters)

// applies on a function
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

Array.prototype.myFilter = function(callback){
  let arr = []
  for(let i = 0; i< this.length; i++){
    if(callback.call(this,this[i])){
      arr.push(this[i])
    }
  }
  return arr
}

const arr = [77,66,89,93,32,33,13,61,15,3,1323]
const resultantArr = arr.myFilter(num => num % 10 === 3) //[ 93, 33, 13, 3, 1323 ]

console.log(resultantArr)

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



