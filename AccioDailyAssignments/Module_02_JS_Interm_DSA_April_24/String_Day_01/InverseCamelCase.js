// Inverse Camel Case
// https://course.acciojob.com/idle?question=8d50680f-6db2-4d60-b9b6-f298660d9e13
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (str) => {
  solution(str);
  rl.close();
});

function solution(str) {
    let words = [];
  let currentWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      if (currentWord.length > 0) {
        words.push(currentWord);

        currentWord = ""; // Reset currentWord
      }
    }
    // Add the current character to the currentWord
    currentWord += str[i];
  }

  // Add the last word to the words array
  if (currentWord.length > 0) {
    words.push(currentWord);
  }

  // Print each word in a new line
  for (let word of words) {
    console.log(word);
  }
}

// const res = solution("IAmAJavaProgrammer");
// console.log(res);
