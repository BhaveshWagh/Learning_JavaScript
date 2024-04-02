const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("", (month) => {
    //Write your code here
    if (month == 1) {
      console.log("31");
    } else if (month == 2) {
      console.log("28");
    } else if (month == 3) {
      console.log("31");
    } else if (month == 4) {
      console.log("30");
    } else if (month == 5) {
      console.log("31");
    } else if (month == 6) {
      console.log("30");
    } else if (month == 7) {
      console.log("31");
    } else if (month == 8) {
      console.log("31");
    } else if (month == 9) {
      console.log("30");
    } else if (month == 10) {
      console.log("31");
    } else if (month == 11) {
      console.log("30");
    } else if (month == 12) {
      console.log("31");
    }
  
    readline.close();
  });
  