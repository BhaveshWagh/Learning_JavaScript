// String Challenge
// Have the function StringChallenge(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every third character with an X


function StringChallenge(str) {
    // Reverse the input string
    var reversedStr = str.split('').reverse().join('');
  
    // Concatenate with ChallengeToken
    var finalOutput = reversedStr + "qmg9376";
  
    // Replace every third character with an X
    var result = finalOutput.split('').map(function (char, index) {
      return (index % 3 === 2) ? 'X' : char;
    }).join('');
  
    return result;
  }
  
  // Example usage:
  var inputString = "Hello World and Coders";
  var output = StringChallenge(inputString);
  console.log(output);
  