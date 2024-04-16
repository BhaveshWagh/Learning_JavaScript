// Word From KeyBoard
// https://course.acciojob.com/idle?question=ceab1561-febd-488e-9db7-a53053b6086f
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline.question("", (num) => {
  n = parseInt(num);
  readArray(0);
});

function readArray(i) {
  if (i < n) {
    readline.question("", (word) => {
      arr.push(word);
      readArray(i + 1);
    });
  } else {
    let result = getStrings(arr);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    readline.close();
  }
}

function getStrings(arr) {
  let ans = [];
  for (let word of arr) {
    let lastRow = getRow(word[0]);
    let isWrong = false;
    for (let char of word) {
      const currRow = getRow(char);
      if (lastRow !== currRow) {
        isWrong = true;
        break;
      }
    }
    if (!isWrong) {
      ans.push(word);
    }
  }
  return ans;
}

function getRow(str) {
  const row1 = "qwertyuiop";
  const row2 = "asdfghjkl";
  const row3 = "zxcvbnm";

  if (row1.includes(str)) {
    return 1;
  } else if (row2.includes(str)) {
    return 2;
  } else if (row3.includes(str)) {
    return 3;
  } else {
    return -1;
  }
}
// const res = getStrings(["jass", "peter","shyam"]);
// console.log(res)
