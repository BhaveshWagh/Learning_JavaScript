// Reverse a Subarray
// https://course.acciojob.com/idle?question=aebae36f-8959-4ecf-8065-7572fa190b83
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (N) => {
	rl.on('line',a => {
		const arr = a.split(' ').map(Number);
		const result = solve(N, arr);
		console.log(result ? 'Yes' : 'No');
		rl.close();	
	})
});

function solve(N, arr) {
  // Write your code here
  let start = -1;
  for (let i = 0; i < N; i++) {
    if (arr[i] > arr[i + 1]) {
      start = i;
      break;
    }
  }
  let end = -1;
  for (let i = N; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      end = i;
      break;
    }
  }
  // console.log({ start, end });

  // Now think about the edge cases
  /*1. if start to end, array is not in decreasing order, it can't be sorted by reversing*/
  for (let i = start; i < end; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }

  //start element should not greater than end+1 element.
  if (arr[start] > arr[end + 1]) {
    return false;
  }

  //end element  should not smaller than the start+1 element
  if (arr[end] < arr[start - 1]) {
    return false;
  }

  return true;
}