// ! important to understand this code then go ahead
// String Evaluation [Javascript]
// https://course.acciojob.com/idle?question=2167d9ff-eda4-4612-afd4-c05236402b57
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  let str = line.trim();
  console.log(EvaluateString(str));
});

const EvaluateString = (str) => {
  // Your code here.
  if (/^[+\-*/]|[+\-*/]$/.test(str)) {
    return "Invalid String";
  }

  try {
    // Evaluate the expression using the eval function
    // Note: eval is dangerous if the input can come from an untrusted source
    // It's safe here because we control the input format and content
    let result = eval(str);

    // Check if result is an integer
    if (!Number.isInteger(result)) {
      result = Math.floor(result);
    }

    return result;
  } catch (e) {
    return "Invalid String";
  }
};
