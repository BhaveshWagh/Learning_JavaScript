// StringChallenge(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.
// Examples
// Input: "Noel - sees Leon"
// Output: true


function StringChallenge(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var varOcg = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(varOcg)
    // Check if the cleaned string is a palindrome
    var isPalindrome = varOcg === varOcg.split('').reverse().join('');
  
    return isPalindrome;
  }
  
  // Example usage:
  var inputString1 = "Anne, I vote more cars race Rome-to-Vienna";
  var output1 = StringChallenge(inputString1);
  console.log(output1);  // Output: true
  
  var inputString2 = "Noel - sees Leon";
  var output2 = StringChallenge(inputString2);
  console.log(output2);  // Output: true
  