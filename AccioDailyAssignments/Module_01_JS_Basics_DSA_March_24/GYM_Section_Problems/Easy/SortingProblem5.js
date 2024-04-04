// AS Sorting Problem 5
// https://course.acciojob.com/idle?question=ca2dcb7c-136e-4658-b34c-ba9e95d5c5a3
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (N) => {
	rl.on('line',(a) => {
		const nums = a.split(' ').map(Number);
		const ans = sorting5(N, nums);
		console.log(ans);
		rl.close();
		
	})
});

function sorting5(n, nums) {
  // Write your code here
  nums.sort((a,b) => a - b)
  let maxDiff = nums[n - 1] * nums[n - 2] - nums[0] * nums[1] 

 return maxDiff;
}