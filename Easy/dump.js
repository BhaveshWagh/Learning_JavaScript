function average(array){
    let sum = 0;
    let lengthOfArray = array.length
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;        
    }
    let average = sum / lengthOfArray 
    return average;
}

console.log(average([1,2,3,4,5]))
console.log(average([8,7,5,7,8,9,5,8,9,10]))
// function compareArray(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//     //   console.log(arr1);
//       if (arr1[i] === arr2[j]) {
//         arr1.splice(i, 1);
//         arr1.push(0);
//         // console.log(arr1);
//       }
//     }
//   }
//    for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//     //   console.log(arr1);
//       if (arr1[i] === arr2[j]) {
//         arr1.splice(i, 1);
//         arr1.push(0);
//         // console.log(arr1);
//       }
//     }
//   }

//   return arr1;
// }

// arr1 = [3, 4, 3, 4, 4, 3];
// arr2 = [3, 4];
// compareArray(arr1, arr2);
// console.log(arr1);
// function wordCounts(words) {
//   // Initialize an empty object to store the frequency count
//   let counts = {};

//   // Check if the array is empty
//   if (words.length === 0) {
//     return counts;
//   }

//   // Iterate through the array and count the frequency of each word
//   for (let word of words) {
//     // Increment the count for the current word in the object
//     counts[word] =( counts[word] || 0) + 1;
//   }

//   return counts;
// }

// // Example usage:
// let words = ["To", "be", "or", "not", "to", "be"];
// const result = wordCounts(words);
// console.log(result);
