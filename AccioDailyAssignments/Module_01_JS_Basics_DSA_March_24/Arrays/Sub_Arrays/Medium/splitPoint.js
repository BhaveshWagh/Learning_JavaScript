const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question('',(N) => {
	readline.question('',(arr) => {
		N = parseInt(N);
		arr = arr.split(' ').map(Number);
		splitArray(N,arr);
	})
})


function findSplitPointOptimal(arr, n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }

  let lsum = 0; // runningSum
  for (let i = 0; i < n; i++) {
    lsum += arr[i];
    const rsum = total - lsum;
    if (lsum == rsum) {
      return i;
    }
  }

  // you will reach here only when no split is possible
  return -1;
}

function splitArray(N, arr) {
  // Write your code here
  // const split = findSplitPoint(arr, N);
  const split = findSplitPointOptimal(arr, N);

  if (split == -1) {
    console.log("Not Possible");
    return;
  }

  for (let i = 0; i <= split; i++) {
    process.stdout.write(arr[i] + " ");
  }
  console.log();
  for (let i = split + 1; i < N; i++) {
    process.stdout.write(arr[i] + " ");
  }
}
