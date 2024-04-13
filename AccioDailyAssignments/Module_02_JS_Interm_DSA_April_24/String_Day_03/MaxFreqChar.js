// Maximum Frequency Character
// https://course.acciojob.com/idle?question=91f4bd09-cfa9-42f9-8b32-9edebcc8cd24
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', s => {
    console.log(MaximumFrequencyChar(s));
    readline.close();
  });
  
  function MaximumFrequencyChar(s) {
      let maxChar = '';
      let maxCount = 0;
  
      // Initialize an array to store the count of each character
      const charCount = Array(26).fill(0);
  
      // Count the occurrences of each character in the string
      for (let i = 0; i < s.length; i++) {
          const charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
          charCount[charIndex]++;
      }
  
      // Find the character with the maximum frequency
      for (let i = 0; i < 26; i++) {
          if (charCount[i] > maxCount) {
              maxCount = charCount[i];
              maxChar = String.fromCharCode(i + 'a'.charCodeAt(0));
          }
      }
  
      return maxChar;
  }
  
// this approach is not passed all test cases
// function MaximumFrequencyChar(s) {
//   let freqCntArr = new Array(26).fill(0);
//   let count = 1;
//   let maxFreqChar = s[0];
//   for (let i = 0; i < s.length; i++) {
//     let ch = s[i];
//     if (ch >= "a" && ch <= "z") {
//       const charCode = ch.charCodeAt();
//       const index = charCode - 97;
//       freqCntArr[index] = 1;
//     }
//   }
//   for (let j = 1; j < s.length; j++) {
//     let ch = s[j]
//     if (ch === maxFreqChar) {
//       count++;
//     } else {
//       maxFreqChar = s[j];
//       count = 1;
//     }
//     for(let i = 0; i < freqCntArr.length; i++){
//         let charCodePos = ch.charCodeAt() - 97
//         freqCntArr[charCodePos] = count

//     }
//   }
//   let maxFreEle = freqCntArr[0]
//   for(let i = 1; i < freqCntArr.length; i++){
//     if(freqCntArr[i] > maxFreEle){
//         maxFreEle = freqCntArr[i]
//     }
//   }
//   // const maxFreEle = Math.max(...freqCntArr) + 97;
// //   console.log(freqCntArr.indexOf(maxFreEle))
//     return String.fromCharCode(freqCntArr.indexOf(maxFreEle) + 97)
// }
// const s = "abbbc";
// const res = MaximumFrequencyChar(s);
// console.log(res);
