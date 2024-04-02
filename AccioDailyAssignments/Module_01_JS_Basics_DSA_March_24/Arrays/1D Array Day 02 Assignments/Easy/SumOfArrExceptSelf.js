
// Sum of Array Except Self
// https://course.acciojob.com/idle?question=3cf411ff-c59c-4202-ae5c-6b0292d31764

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumArrayExceptSelf(nums, n) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(sum - nums[i]);
  }
  return ans;
}

readline.question("", (n) => {
  let nums = [];
  readline.on("line", (num) => {
    nums = num.split(" ").map(Number);
    let ans = sumArrayExceptSelf(nums, n);
    console.log(ans.join(" "));
    readline.close();
  });
});
