// MathChallenge(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8.
// Examples
// Input: "100101"
// Output: 37



function MathChallenge(str) {
    // Convert binary string to decimal
    var binaryToDecimal = parseInt(str, 2);
  
    return binaryToDecimal;
  }
  
  // Example usage:
  var inputString = "100101";
  var output = MathChallenge(inputString);
  console.log(output);  // Output: 37
  