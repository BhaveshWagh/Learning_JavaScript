let str = "  Ram   is   dancing   on   the   floor   ";
let arr = str.trim("")
console.log(arr)
for(let t of arr){
  console.log(t.trim())
  
}

// function secondHighest(arr) {
//     //Write your code here
//     arr.sort((a,b)  => a - b)
//     return arr[arr.length - 2]    
// }
// console.log(secondHighest([1,34,31,-1,32]))
// function Main() {
//     var n = prompt("Enter the number of elements");
//     var arr = [];
//     for (var i = 0; i < n; i++) {
//         arr[i] = prompt("Enter element " + (i+1));
//     }
//     alert(secondHighest(arr));
// }
// Main();

// let str = "abc"
// let reverse = ""
// for(let i = str.length - 1; i >= 0;  i--){
//   reverse += str[i]
// }
// console.log(str, reverse)

// let personalDetails = {
//     name: "John",
//     age: 30,
//     city: "Delhi"
// };

// let medicalHistory = {
//     disease: "Fever",
//     treatment: "Paracetamol"
// };

// let experience = {
//     company: "Google",
//     years: 5
// };

// let resume = {};

// // Add properties from personalDetails
// for (let key in personalDetails) {
//     resume[key] = personalDetails[key];
// }

// // Add properties from medicalHistory
// for (let key in medicalHistory) {
//     resume[key] = medicalHistory[key];
// }

// // Add properties from experience
// for (let key in experience) {
//     resume[key] = experience[key];
// }

// console.log(resume);

// let resume = {
//     ...personalDetails,
//     ...medicalHistory,
//     ...experience
// };

// console.log(resume);
// let resume = {
//     personalDetailsResume: personalDetails,
//     medicalHistoryResume: medicalHistory,
//     experienceResume: experience
// };

// console.log(resume);

// a1 = [1,2,3,4]
// b1 = [1,2,3,4]

// let object = {
//   "name":"name",
//   "20":30
// }

// // console.log(object."20")
//   console.log(object)

// sum = []

// for(let i = 0; i < a1.length; i++){
//   sumOfCorresponding = a1[i] + b1[i]
//   sum.push(sumOfCorresponding)
// }

// console.log(sum)

// function printUniqueElements(arr) {
//     const uniqueElements = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.lastIndexOf(arr[i]) === i) {
//             uniqueElements.push(arr[i]);
//         }
//     }

//     console.log(uniqueElements)
// }

// // Example usage
// const arr = ["a", "b", "c", "a", "b"];
// printUniqueElements(arr);
// function printVowels(arr) {
//     const vowels = 'aeiouAEIOU';

//     for (let i = 0; i < arr.length; i++) {
//         if (vowels.indexOf(arr[i]) !== -1) {
//             console.log(arr[i]);
//         }
//     }
// }

// // Example usage
// const arr = ["a", "b", "c", "I", "b"];
// printVowels(arr);

// console.log("Hello, World!");

// let color = "red"

// color === "red" ? console.log("stop") : (color === "green" ? : console.log("go") : console.log("slow"))

// odd even
// let num = 1204;
// const arr = []
// while(num > 0){
//   let digit = num % 10
//   if(digit % 2 === 0){
//     // console.log(digit)
//     arr.unshift(digit)
//   }
//   num = Math.floor(num / 10)
// }
// console.log(arr)
// for(let i = 0; i < arr.length; i++){
//   console.log(i)
// }

// function hello(){
//   console.log("hello world")
// }

// let x = hello()
// console.log("x",x)
function sum(...x){
    console.log(x)
    let sum = 0;
    for(let i of x){
      sum += i
    }
    console.log(sum)
  }
  let c = sum
  console.log(c)
  sum(10,20,30)