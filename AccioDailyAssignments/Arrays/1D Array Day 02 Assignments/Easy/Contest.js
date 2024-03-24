// A Contest JS
// https://course.acciojob.com/idle?question=0363c617-a2d0-41a5-a2a3-f5736d1c36f7
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (a) => {
	rl.on('line',(b) =>{
		const [n,k] = a.split(' ').map(Number);
		const arr = b.split(' ').map(Number);
		printFindParticipants(arr, n, k);
		rl.close();
	})
});

function printFindParticipants(arr, n, k) {
  // Write your code here
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] >= arr[k-1]) {
        count += 1;
      }
    }
  }
  console.log(count);
}