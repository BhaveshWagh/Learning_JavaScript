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
    // let max1 = -Infinity; // Initialize maximum and second maximum values
    // let max2 = -Infinity;
    // let min1 = Infinity; // Initialize minimum and second minimum values
    // let min2 = Infinity;

    // for (let num of nums) {
    //     if (num > max1) { // Update maximum and second maximum
    //         max2 = max1;
    //         max1 = num;
    //     } else if (num > max2) {
    //         max2 = num;
    //     }

    //     if (num < min1) { // Update minimum and second minimum
    //         min2 = min1;
    //         min1 = num;
    //     } else if (num < min2) {
    //         min2 = num;
    //     }
    // }

    // return (max1 * max2) - (min1 * min2); 
    
}