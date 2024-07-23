// 22 July 24
// callback
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
//         callback(Math.sqrt(result), function(res) {
//           console.log(`add: ${n1 + n2},
//   doubled: ${result},
//   divide by 3: ${result},
//   sqrt: ${res}
//   `);
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
  
  mainFunction(5,2);
  
  
  
  
  
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
  
  