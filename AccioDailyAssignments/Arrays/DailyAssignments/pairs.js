const { diffieHellman } = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (a) => {
	rl.on('line',(b) => {
		const [n, k] = a.split(' ').map(Number);
		arr = b.split(' ').map(Number);
		console.log(Pairs(arr,k));
		rl.close();
	})
});

function Pairs(arr, k) {
  // Write your code here
  let countOfPairs = 0
  let n = arr.length
  for(let i = 0; i < n; i++){
      for(let j = i + 1; j < n; j++){
          const diff = Math.abs(arr[i] - arr[j])
          if(diff == k){
              countOfPairs++
            }
            // console.log(i,j,arr[i],arr[j],diff)
        }
    }
    return countOfPairs;
}