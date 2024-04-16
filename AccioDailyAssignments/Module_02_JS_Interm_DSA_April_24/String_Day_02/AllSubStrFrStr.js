// Medium Score : 40
// All substrings of a string
// https://course.acciojob.com/idle?question=94779a98-b326-4d58-a107-b50cc370b894
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SubString(str) {
  // Write code here
  // Simple Approach
  let n = str.length;
  for (let i = 0; i < n; i++) {
    let subs = "";
    for (let j = i; j < n; j++) {
      subs += str[j];
      console.log(subs);
    }
  }
  // Another
  // let newStr = str.split("");
  // let subStr = "";
  // for (let k = 0; k < newStr.length; k++) {
  //   for (let start = k; start < newStr.length; start++) {
  //     for (let end = start; end <= start; end++) {
  //       subStr += newStr[end];
  //     }
  //     console.log(subStr);
  //   }
  //   subStr = ""
  // }
}
rl.on('line', (str) => {
  SubString(str);
  rl.close();
});