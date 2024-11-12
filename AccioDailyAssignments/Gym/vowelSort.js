// https://course.acciojob.com/idle?question=a45c6fc3-4bcd-4d13-a591-54c4858cb58c
// Vowel Sort

function vowelSort(arr) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Separate strings into those that start with a vowel and those that start with a consonant
  let vowelArr = arr.filter((word) => vowels.has(word[0]));
  let consonantArr = arr.filter((word) => !vowels.has(word[0]));

  // Sort both arrays lexicographically
  vowelArr.sort();
  consonantArr.sort();

  // Concatenate the sorted vowel and consonant arrays
  return vowelArr.concat(consonantArr);
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber === 1) {
    logic();
    readline.close();
  }
}

function logic() {
  const N = parseInt(inputArr[0], 10); // Read N
  const Arr = inputArr[1].split(" "); // Split the input string into an array of words

  // Output the result of the vowelSort function
  console.log(vowelSort(Arr).join(" "));
}
