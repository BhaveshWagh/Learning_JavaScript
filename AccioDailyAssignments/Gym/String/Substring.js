// Substrings
// https://course.acciojob.com/idle?question=6bf07170-4a43-4c05-8dbd-80dca21f8ef4
function doesItContain(line1, ch) {
    // write code here
    // return the output , do not use console.log here
      return line1.includes(ch);


    //   another aprroach
//     let n = line1.length;
//   let m = ch.length;
  
//   if (m > n) {
//     return false;
//   }
  
//   for (let i = 0; i <= n - m; i++) {
//     let j;
//     for (j = 0; j < m; j++) {
//       if (line1[i + j] !== ch[j]) {
//         break;
//       }
//     }
//     if (j === m) {
//       return true;
//     }
//   }
  
//   return false;
  }
  
  const rl = require("readline");
  
  const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  reader.on("line", (line) => {
    const [line1, ch, hc] = line.split(",");
  
    console.log(doesItContain(line1, ch));
  });
  
  