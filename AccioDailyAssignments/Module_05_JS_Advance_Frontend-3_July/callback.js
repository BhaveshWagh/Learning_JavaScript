function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
  }
  
  // Define the callback function
  function callbackFunction(result) {
    console.log("Result: " + result);
  }
  
  // Call the main function with the callback function
  mainFunction(callbackFunction);
  //This code is contributed by Veerendra Singh Rajpoot
  

// function main(n, m, callback) {
//   let sum = n + m;
//   console.log("inside main")
//   callback(sum, divide);
// }

// function divide(res, callback){
//     let ans = res / 2;
//     console.log("inside divide")
//     callback(ans, mult)
// }

// const mult = (res,callback) => {
//     const ans = res * 2;
//     console.log("inside multi", ans)
//     callback(ans, sub)
// }


// const sub = (res,callback) => {
//     const ans = res - 4;
//     console.log("inside sub", ans)
//     callback(ans, printRes)
// }

// function printRes(ans){
//     console.log("final result printed "+ ans)
// }


// main(5,3, divide)
