function checkNumberType(N) {
  const numStr = N.toString();
  let count = 1;
  let prevDigit = numStr.charAt(0);
  let isAwesome = false;

  for (let i = 1; i < numStr.length; i++) {
    const currentDigit = numStr.charAt(i);

    if (currentDigit === prevDigit) {
      count++;
    } else {
      count = 1;
    }

    if (count >= 3 && currentDigit !== "0") {
      isAwesome = true;

      break;
    }

    prevDigit = currentDigit;
  }

  return isAwesome ? "Awesome" : "Good";
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (N) => {
  const numberType = checkNumberType(N);
  console.log(numberType);

  rl.close();
});
