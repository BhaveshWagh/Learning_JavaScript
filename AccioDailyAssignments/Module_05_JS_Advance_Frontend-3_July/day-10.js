// An extra class 20 July 24
// !! imp: Question on method chainging Asked in following companies for FrontEnd interviews

// - Ola 
// - skype 
// - dropbox
// ! general questioner :  where we use method chaining
// Ans : When we have to call multiple functions together to make changes simultaneously

// Method chaining
// make a Method chaining of  5 functions. in each functions 
// ur printing something .call  them in a sequntial manner.

// function getDetails() {

//     this.firstName = '';
//     this.lastName = 'Kumar';
//     this.age = 14;
//     this.city = '';
// }

// getDetails.prototype.getFirstName = function (name){
//     this.firstName = name;
//     return this;
// }

// getDetails.prototype.getLastName = function (){
//     this.lastName;
//     return this;
// }

// getDetails.prototype.getAge = function (age){
//     this.age = age;
//     return this;
// }

// getDetails.prototype.getCity = function (){
//     this.city = "Mumbai";
//     return this;
// }

// getDetails.prototype.getAllDetails = function (){
//     console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.city}`)
//     return this;
// }

// let details = new getDetails()

// details.getFirstName("Akshay").getLastName().getAge(13).getCity().getAllDetails()



// Question make an object you have to use Getters to log the Array.
// and initalize a key value pairs. values as Array.
// array should consist of  7 elements, push them using setters fn, and log the last 3 elements (SubArr) of array

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
//   constructor() {
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
