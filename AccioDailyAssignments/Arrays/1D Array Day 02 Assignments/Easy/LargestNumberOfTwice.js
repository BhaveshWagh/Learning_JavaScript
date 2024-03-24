// Largest Number At Least Twice of Others
// https://course.acciojob.com/idle?question=cb7fb253-f3f5-47ad-a261-53b8d4fdd033

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function LargestElement(nums, n) {
    // Write your code here
    let maxEle = 0;
    let maxEleIndex = -Infinity;
    let flag = false;
  
    function getMaxEle() {
      for (let i = 0; i < n; i++) {
        if (nums[i] > maxEle) {
          maxEle = nums[i];
          maxEleIndex = i;
        }
      }
    }
    function isLargestTwice() {
      for (let j = 0; j < n; j++) {
        if (j != maxEleIndex && nums[j] * 2 > maxEle) {
          flag = true;
        }
      }
    }
    getMaxEle()
    isLargestTwice()
    
    return flag ? -1 : maxEleIndex;
  }
  
  readline.question("", (n) => {
    readline.question("", (nums) => {
      nums = nums.split(" ").map(Number);
      console.log(LargestElement(nums, n));
      readline.close();
    });
  });
  