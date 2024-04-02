// Adding Array
// let suppose the 2 arrays are given you should add thos array elements
// like  arr1 = [1,2,3,4] arr2 = [1,2,3,4] so the output should be 1+1,2+2,3+3,4+4 = 2 4 6 8
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calSum(a, b, n, m) {
  // Write your code here
  let i = n - 1;
  let j = n - 1;

  let result = [];
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = 0;
    if (i >= 0) sum += a[i];
    if (i >= 0) sum += b[j];
    sum += carry;

    result.push(sum % 10);
    carry = parseInt(sum / 10);
    i--;
    j--;
  }
  if (carry == 1) {
    result.push(1);
  }
  result.reverse();
  return result;
}

readline.question("", (n1) => {
  readline.question("", (arr1) => {
    readline.question("", (n2) => {
      readline.question("", (arr2) => {
        arr1 = arr1.split(" ").map(Number);
        arr2 = arr2.split(" ").map(Number);
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        let res = calSum(arr1, arr2, n1, n2);
        console.log(res.join("\n"));
        readline.close();
      });
    });
  });
});
