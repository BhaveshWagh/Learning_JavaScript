// Three Ways to Reverse a String in JavaScript

// 1. Reverse a String With Built-In Functions

// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.

// function reverseStr(str){
//     var reverseStr = str.split('').reverse().join('')
//     console.log(reverseStr)
// }

// reverseStr("Hello")

// 2. Reverse a String With a Decrementing For Loop

// function reverseStr(str){
//     var newStr = ""
//     for(let i = str.length - 1; i >= 0; i--){
//         newStr += str[i]
//     }
//     console.log(newStr)
// }

// reverseStr("Bhavesh")

// 3. Reverse a String With Recursion
function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  
  Each call: str === "?"        	                reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  }
  reverseString("hello");
// Ref : https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/