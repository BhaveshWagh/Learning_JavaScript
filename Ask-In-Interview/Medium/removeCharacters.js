/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  let result = input.split(""); // Convert string to an array for manual manipulation
  let changed = true; // To track changes in the string

  while (changed) {
    changed = false; // Reset the flag
    let temp = []; // Temporary array to rebuild the string

    for (let i = 0; i < result.length; i++) {
      if (result[i] === "b") {
        changed = true; // Skip 'b', mark a change
      } else if (
        result[i] === "a" &&
        i + 1 < result.length &&
        result[i + 1] === "c"
      ) {
        changed = true; // Skip 'ac', mark a change
        i++; // Skip the next character ('c')
      } else {
        temp.push(result[i]); // Add the character to the new string
      }
    }

    result = temp; // Update the result with the processed string
  }

  return result.join(""); // Convert the array back to a string
}

console.log(removeChars("ab")); // 'a'
console.log(removeChars("abc")); // ''
console.log(removeChars("cabbaabcca")); // 'caa'
