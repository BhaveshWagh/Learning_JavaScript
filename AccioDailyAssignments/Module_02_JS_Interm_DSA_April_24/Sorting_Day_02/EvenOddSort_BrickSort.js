// Even Odd Sorting
// https://course.acciojob.com/idle?question=42659f22-4f9e-4b44-bfc0-a492903cf954
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


function oddEvenSort(arr) {
  const n = arr.length;
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;

    //odd
    for (let j = 1; j <= n - 2; j += 2) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSorted = false;
      }
    }

    //even
    for (let j = 0; j <= n - 2; j += 2) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSorted = false;
      }
    }
  }

  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  console.log(arr.join(" "));
}

readline.question('', n => {
  readline.question('', array => {
    array = array.split(' ').map(Number);
    oddEvenSort(array, n);
    readline.close();
  });
});