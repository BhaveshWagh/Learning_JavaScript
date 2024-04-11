// Count words in a given string
// https://course.acciojob.com/idle?question=f6f001ea-3a4d-4155-bfe3-0cea7ccf4945
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (t) => {
  t = Number(t);
  let count = 0;
  rl.on("line", (input) => {
    if (count < t) {
      console.log(countWords(input));
      count++;
    }
    if (count === t) {
      rl.close();
    }
  });
});

function countWords(s) {
  // your code here
  let wordCount = 0;
  let inWord = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (inWord) {
        wordCount++;
        inWord = false; // Reset inWord flag
      }
    } else {
      inWord = true;
    }
  }

  // Check if the last character was a word
  if (inWord) {
    wordCount++;
  }

  return wordCount;
}


// Another way

function countWords2(s) {
  // your code here
 return s.split(' ').length
}

const res = countWords2("How are you")
console.log(res)