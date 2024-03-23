const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question("", (n) => {
    let [a, b] = n.split(" ");
    a = Number(a);
    b = Number(b);
    //Write your code here
    const LHS = (a + b) ** 3;
    const RHS = a ** 3 + b ** 3 + 3 * (a ** 2 * b) + 3 * a * b ** 2;
    if (LHS == RHS) {
      console.log(LHS);
      console.log(RHS);
      console.log("VERIFIED");
    } else {
      console.log(LHS);
      console.log(RHS);
      console.log("NOT VERIFIED");
    }
    readline.close();
  });
  