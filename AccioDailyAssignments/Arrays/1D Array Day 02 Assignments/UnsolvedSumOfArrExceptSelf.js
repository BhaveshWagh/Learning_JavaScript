// ****Note Once the problem is Solved then remove Unsolved... from file name 
// Sum of Array Except Self
// https://course.acciojob.com/idle?question=3cf411ff-c59c-4202-ae5c-6b0292d31764

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function sumArrayExceptSelf(arr, n) {
  arrNew = [];
  // Write your code here
  for (let i = 0; i < n; i++) {
    skipEle = arr[i];
    sum = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        continue;
      }
      sum += arr[j];
    }
    arrNew.push(sum);
  }
  return arrNew
}
// sumArrayExceptSelf([4, 3, 2, 10], 4);

  readline.question('', n => {
    let nums = [];
    readline.on('line', num => {
      nums = num.split(' ').map(Number);
        let ans = sumArrayExceptSelf(nums, n);
        console.log(ans.join(' '));
        readline.close();
    });
  });
