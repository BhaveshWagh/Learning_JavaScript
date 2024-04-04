// running sum of subArr
function getSubArr(arr, n) {
    let str = ""
  for (let i = 0; i <= arr.length - n; i++) {
    for (let j = i; j < n + i; j++) {
    //   process.stdout.write(arr[j] + " ");
      str += arr[j] + " "
       console.log(str)
    }
    console.log();
  }
}

const n = 5;
const arr = [10, 20, 30, 40, 50];
getSubArr(arr, n);


// template helps to solve Subarr 1 to 3 problems in subarray section
// function solve(arr, n) {
//   // Write your code here
//   for (let i = 0; i <= arr.length - n; i++) {
//     for (let j = i; j < i + n; j++) {
//       process.stdout.write(arr[j] + " ");
//     }
//     console.log();
//   }
// }
// const n = 4;
// let arr = [8, 6, 3, 4, 5, 9, 12, 7, 20, 22, 31, 38];
// solve(arr, n);

// How to generate SubArray
// array = [1,2,3,4]
// o/p : [(1),(2),(3),(4),(1,2),(2,3),(3,4),(1,2,3),(2,3,4),(1,2,3,4)] this are the subArr of array
// n*n(n+1)/2

// function genSubArr(arr) {
// //   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let subArr = []
//     for(let j = i; j < arr.length; j++){
//         for(let k = i; k <= j; k++ ){
//             process.stdout.write(arr[k] + " ")
//             subArr.unshift()
//         }
//         console.log()
//     }
//   }
// }

// arr = [1,2,3,4];
// genSubArr(arr)
// Sum Zero
// function subArrSumZero(arr){

//     for(let start = 0; start < arr.length; start++){
//         let subArr = ""
//         // let sum = 0
//         for(let end = start; end < arr.length; end++){
//             subArr += arr[end]
//             // sum += arr[end]
//             console.log(subArr + " ")
//             // console.log(start,end,subArr,sum)
//         }
//         // console.log()
//     }
// }
// arr

// how to get subarray
// function getSubArr(arr) {
//   let subStr = "";
//   // console.log("outer",subStr)
//   for (let i = 0; i < arr.length; i++) {
//     subStr = subStr + arr[i] + " ";
//     console.log(i, arr[i], subStr);
//   }
// }
// arr = [10, 20, 30, 40];
// getSubArr(arr)
// Its tideous task to do every time
// the efficient way is

// // Find Split Point
// // Link: https://course.acciojob.com/idle?question=c0af5738-5a1c-4a05-a68c-789f38a620d1
// function findSplitPoint(arr, n) {
//   for(let split = 0; split < n - 1; split++){
//     lsum = 0
//     for(let i = split; i <= split; i++){
//       lsum += arr[i]
//       // console.log("leftSplit",arr[i],lsum)
//     }
//     rsum = 0
//     for(let i = split + 1; i < n; i++){
//       rsum += arr[i]
//       // console.log("rightSplit",arr[i],rsum)
//     }
//     if(lsum == rsum){
//       console.log(split)
//     }
//     // console.log()
//   }

//   // you will reach here only when no split is possible
//   return - 1
// }
// n = 5
// arr = [10,1,2,3,4]
// findSplitPoint(arr,n)

// function getSubArray(arr, n) {
//   let maxSum = 0;
//   for (let start = 0; start < n; start++) {
//     let sum = 0;
//     let subStr = "";
//     for (let end = start; end < n - 1; end++) {
//       sum += arr[end];
//       subStr += arr[end];

//       maxSum = Math.max(sum, maxSum);
//     }
//   }
//   // console.log(maxSum);
//   return maxSum
// }
// // n = 5;
// // arr = [1, 2, -1, 4];
// let n = 5;
// let arr = [2, 3, 1, -1, 0];
// getSubArray(arr, n);
