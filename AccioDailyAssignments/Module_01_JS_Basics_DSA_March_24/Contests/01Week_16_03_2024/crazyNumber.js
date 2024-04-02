const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("", (n) => {
    let ans = numberPattern(parseInt(n));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (ans[i][j] === -1) {
          process.stdout.write(" ");
        } else {
          process.stdout.write(ans[i][j].toString());
        }
      }
      console.log();
    }
    readline.close();
  });
  
  function numberPattern(n) {
    // your code here
    let resArr = [];
    let num = 1;
    for (let row = 1; row <= n; row++) {
      let currRow = [];
  
      for (let space = 1; space <= n - row; space++) {
        currRow.push(" ");
      }
      for (let i = 1; i <= row; i++) {
        currRow.push(num);
        num++;
        if (num > 9) {
          num = 1;
        }
      }
      resArr.push(currRow);
      // console.log();
    }
    return resArr;
  }
  
  // function crazyNumber(n) {
  //   let num = 1;
  //   for (let row = 1; row <= n; row++) {
  //     for (let space = 1; space <= n - row; space++) {
  //       process.stdout.write(" ");
  //     }
  //     for (let i = 1; i <= row; i++) {
  //       process.stdout.write(num + "");
  //       num++;
  //       if (num > 9) {
  //         num = 1;
  //       }
  //     }
  //     console.log();
  //   }
  // }