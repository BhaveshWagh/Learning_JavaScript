const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user with readline
rl.question("", function (userInput) {
  if (userInput > 90) {
    console.log("Excellent");
  } else if (userInput > 80 && userInput <= 90) {
    console.log("Good");
  } else if (userInput > 70 && userInput <= 80) {
    console.log("Fair");
  } else if (userInput > 60 && userInput <= 70) {
    console.log("Meets Expectations");
  } else if (userInput <= 60) {
    console.log("Below Expectations");
  }

  // Close the readline interface
  rl.close();
});
