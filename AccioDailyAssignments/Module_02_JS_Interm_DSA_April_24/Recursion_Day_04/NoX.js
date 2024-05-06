// No X
// https://course.acciojob.com/idle?question=2aff4e35-b341-4902-b262-4c095ed174f9
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  console.log(noX(input));
  rl.close();
});
function noX(s, index = 0, ans = "") {
  // Write your code here

  if (index === s.length) {
    return ans;
  }
  if (s[index] !== "x") {
    ans += s[index];
    console.log(ans);
  }
  return noX(s, index + 1, ans);
}
// Another way 
function removeX(str, idx, ans) {
  if (idx == str.length) return ans;

  // not consider
  if (str[idx] == "x") {
    console.log(ans)
    return removeX(str, idx + 1, ans);
  }

  // consider
  return removeX(str, idx + 1, ans + str[idx]);
}