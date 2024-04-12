// Pangrams
// https://course.acciojob.com/idle?question=7eee469e-1a6d-4b5f-bbe0-a31fdc15e47d
// your code here
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = inputArr[0];
  console.log(isPangram(str));
}

function isPangram(sentence) {
  sentence = sentence.toLowerCase();

  const bucket = new Array(26).fill(false);

  for (let i = 0; i < sentence.length; i++) {
    const ch = sentence[i];
    if (ch >= "a" && ch <= "z") {
      const charCode = ch.charCodeAt();
      const index = charCode - 97;
      bucket[index] = true;
    }
  }
  //   console.log(bucket)

  let isPangram = true;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === false) {
      isPangram = false;
      break;
    }
  }
  return !isPangram ? "not pangram" : "pangram" 
}
