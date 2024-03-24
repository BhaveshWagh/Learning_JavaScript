// https://course.acciojob.com/idle?question=163324ba-e963-404d-bcf0-5ab5117ac516
/**
 * FACING THE SUN
Given an array h representing heights of buildings. You have to count the buildings which will see the sunrise (Assume : Sun rise on the side of array starting point).

Input Format
line 1: contains an integer n denoting size of array.

line 2: contains n spaced integers denoting elements of array.

Output Format
Print a single integer denoting the number of buildings which will see the sunrise.

Example 1
Input

5
7 4 8 2 9
Output

3
Explanation

7 can watch the sunrise, 4 can't, then 8 can but 2 can't and lastly 9 can watch the sunrise too, hence 3 buildings can watch the sunrise.

Example 2
Input

6
6 2 8 4 11 13
Output

4
 */

function facingSun(n, arr) {
    //Write your code here
    let count = 1;
    let maxEle = arr[0]
    for (let i = 1; i < n; i++) {
      if (arr[i] > maxEle) {
        count++;
        maxEle = arr[i]
      }
    }
    console.log(count);
    // return count;
  }
  
  let n = 5;
  const arr = [7, 4, 8, 2, 9];
  facingSun(5, [1000, 10001, 10001, 293, 10000000]);
  // facingSun(n,arr)
  // facingSun(6,[6, 2, 8, 4, 11, 13])
  // facingSun(4,[1,1,1,1])
  