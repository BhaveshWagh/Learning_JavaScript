// Distinct Char
// https://course.acciojob.com/idle?question=174f8119-4e09-4ffc-8eb9-ee42e7b9aa3f
function findLongestSubstring(s) {
    let left = 0, right = 0;
     let maxLength = 0;
     let charSet = new Set();
 
     while (right < s.length) {
         if (!charSet.has(s[right])) {
             charSet.add(s[right]);
             maxLength = Math.max(maxLength, right - left + 1);
             right++;
         } else {
             charSet.delete(s[left]);
             left++;
         }
     }
 
     return maxLength;
 }
 
 
 
 
 var readline = require("readline").createInterface(process.stdin);
 let inputArr = [];
 var lineNumber = -1;
 
 readline.on("line", readInputs);
 
 function readInputs(line) {
   inputArr.push(line);
   lineNumber++;
  
   if (lineNumber ==  0) {
     logic("s");
     readline.close();
   }
 }
 
 
 
 function logic(input) {
     
     let word1=inputArr[0];
   
     console.log(findLongestSubstring(word1));
     
 }
 
 