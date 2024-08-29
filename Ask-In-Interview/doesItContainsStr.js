function doesItContain(mainString, subString) {
    // return line.includes(substring)
    // another way
    // Get lengths of both strings

    const mainLength = mainString.length;
    const subLength = subString.length;

    // Loop through the mainString
    for (let i = 0; i <= mainLength - subLength; i++) {
      // Check if substring matches
      let found = true;
      for (let j = 0; j < subLength; j++) {
        if (mainString[i + j] !== subString[j]) {
          found = false;
          break;
        }
      }
      // If substring matches, return true
      if (found) {
        return true;
      }
    }
    // If no match found, return false
    return false;
  }

  // Example usage:
  console.log(doesItContain("Hi World world", "world")); // Output: true
  console.log(doesItContain("hi hi hi", "hello")); // Output: false
  console.log(doesItContain("12585", "8")); // Output: