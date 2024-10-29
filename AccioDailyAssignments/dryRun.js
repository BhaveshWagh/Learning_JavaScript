function multiplesOf3Or5(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multiplesOf3Or5(1000));
// Paindrome strings in the array
// https://course.acciojob.com/idle?question=d58c6dde-e25e-4709-beb0-473d98b831cf
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findPalindromes(arr) {
  const palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  return palindromes;
}
const arr = ["racecar", "hello", "level", "radar", "civic"];
// console.log(findPalindromes(arr))

// console.log(parseInt(num, 16));
// console.log(num === Object(num)) // true

let obj = {};
// console.log(obj === Object(obj)) // false

// const arr = [1, 2, 3]; // typeof object
// console.log(typeof arr);

const fun = () => {};
// console.log(typeof fun); // typeof function

// Important note:
// ! typeof null returns "object" even though it's a primitive value.
let num1 = null;
// console.log(typeof num1); // typeof object

// function maxColSum(mat) {
//   // do not console.log here
//   // return the sum
//   const maxSumArr = [];
//   let sum = 0;
//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[i].length; j++) {
//       sum += mat[j][i];
//       console.log(sum)
//     }
//     console.log(sum)
//     maxSumArr.push(sum);
//   }
//   return Math.max(...maxSumArr);
// }

// const mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(maxColSum(mat))

// function isSmaller(S, T) {
//   // Convert strings to arrays, sort them, and join back to strings
//   let sortedS = S.split('').sort().join('');
//   let sortedT = T.split('').sort().join('');

//   // Compare characters one by one
//   for (let i = 0; i < sortedS.length; i++) {
//       if (sortedS[i] < sortedT[i]) {
//           return "YES";
//       }
//   }
//   return "NO";
// }

// // Example usage
// let S1 = "efgh";
// let T1 = "abcd";
// canRearrange(S1, T1);  // Output: NO

// let S2 = "abcd";
// let T2 = "efgh";
// canRearrange(S2, T2);  // Output: YES

// let S3 = "dcba";
// let T3 = "abcd";
// canRearrange(S3, T3);  // Output: NO

// GFG Article Top 10 Array Questions;
// const maxSubArraySum = (arr) => {
//   let max_current = arr[0];
//   let max_global = arr[0];
//   let start = 0,
//     end = 0,
//     tempStart = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max_current + arr[i]) {
//       max_current = arr[i];
//       tempStart = i;
//     } else {
//       max_current += arr[i];
//     }

//     if (max_current > max_global) {
//       max_global = max_current;
//       start = tempStart;
//       end = i;
//     }
//   }

//   const maxSubArray = arr.slice(start, end + 1);
//   return { maxSum: max_global, maxSubArray: maxSubArray };
// };

// Test cases
// console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));
// Output: { maxSum: 7, maxSubArray: [4, -1, -2, 1, 5] }

// console.log(maxSubArraySum([2]));
// Output: { maxSum: 2, maxSubArray: [2] }

// console.log(maxSubArraySum([5, 4, 1, 7, 8]));
// Output: { maxSum: 25, maxSubArray: [5, 4, 1, 7, 8] }

// async await

// function three() {
//     console.log("three")
// return "four"
// }

// console.log("one");

// async function two() {
//   console.log("two");
//     let call = await three(); // ye sabse last mein call hoga ok
//     console.log(call)
// }

// two();
// console.log("five");

// const maxSubArraySum = (arr) => {
//   let max_current = arr[0];
//   let max_global = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     max_current = Math.max(arr[i], max_current + arr[i]);
//     if (max_current > max_global) {
//         console.log(max_current)
//       max_global = max_current;
//     }
//   }

//   return max_global;
// };

// Test cases
// console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7
// console.log(maxSubArraySum([2])); // Output: 2
// console.log(maxSubArraySum([5, 4, 1, 7, 8])); // Output: 25

// // arr = [1,2,3,4,5]
// // target sum = 7;
// // you have do sum of the two numbers and if the sum === target sum push that values inside arr like below
// // o/p : [[3,4],[2,5]]

// function getPairsSumWithNumber (arr, targetValue){
//     const pairs = []
//     const seen = new Set()
//     console.log(seen)

//     for(let num of arr){
//         const complement = targetValue - num;
//     console.log(complement)
//         if(seen.has(complement)){
//             pairs.push([complement, num])
//         }
//         seen.add(num)
//         console.log(seen)
//     }
//     return pairs
// }

// console.log(getPairsSumWithNumber([1,2,3,4,5],8))
