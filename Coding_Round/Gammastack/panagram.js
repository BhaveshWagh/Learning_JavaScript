// Asked In Machine Coding Round

// A JavaScript Program to check if the given
// string is a pangram or not

// Returns true if the string is pangram else false
// Good Approach Explain interviewer 
function checkPangram(str) {
  // Create a hash table to mark the characters
  // present in the string
  mark = new Array(26).fill(false);

  // For indexing in mark[]
  let index;

  // Traverse all characters
  for (let i = 0; i < str.length; i++) {
    // If uppercase character, subtract 'A'
    // to find index.
    if ("A" <= str[i] && str[i] <= "Z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    }
    // If lowercase character, subtract 'a'
    // to find index.
    else if ("a" <= str[i] && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    }
    // If this character is other than english
    // lowercase and uppercase characters.
    else continue;

    mark[index] = true;
    // console.log(mark)
  }

  // Return false if any character is
  for (let i = 0; i <= 25; i++) if (mark[i] == false) return false;

  // If all characters were present
  return true;
}

// Driver Program to test above functions

let str = "The quick brown fox jumps over the lazy dog";

if (checkPangram(str) == true) console.log("is a pangram");
else console.log("\nis not a pangram");

/**
 * function toGetSortedString(str) {
  let removeSpaces = str.toLowerCase().split(" ").join("");
  let uniq = "";
  for (let i = 0; i < removeSpaces.length; i++) {
    if (uniq.includes(removeSpaces[i]) === false) {
      uniq += removeSpaces[i];
    }
  }
  if (uniq.length === 26) {
    return true;
  } else {
    return false;
  }
}

//   const str = "The quick brown fox jumps over the lazy dog"
const str = "abc de fg h ijk lm n opq rs tu v x yz";
console.log(toGetSortedString(str));

 */
