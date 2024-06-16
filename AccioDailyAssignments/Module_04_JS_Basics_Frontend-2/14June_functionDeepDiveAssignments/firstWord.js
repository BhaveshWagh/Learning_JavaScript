// First word Function
// 14 jun Assignments
function firstWord(str) {
    // your code here
    // edge case
    // Trim leading and trailing whitespace
    str = str.trim();
  
    // Find the index of the first space
    let indexOfSpace = str.indexOf(' ');
  
    // If no space found, return the entire trimmed string
    if (indexOfSpace === -1) {
        return str;
    }
  
    // Otherwise, return the substring up to the first space
    return str.slice(0, indexOfSpace);
  }
  
  console.log(firstWord("he bsda asdas"));