// Rotate array
//https://course.acciojob.com/idle?question=444d4b46-efef-467a-8833-e3fede7d22f0

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function solve() {
  readline.question('', n => {
    let arr = [];
    readline.question('', elements => {
      arr = elements.split(' ').map(Number);
      readline.question('', k => {
        rotateArray(arr, Number(n), Number(k));
        readline.close();
      });
    });
  });
}

function rotateArray(arr, n, k) {
  // Write code here
    for (let i = 0; i < k; i++) {
    const firstEle = arr[0];
    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[n - 1] = firstEle;
  }
  for(let k = 0; k < n; k++){
      process.stdout.write(arr[k] + " ")
  }
}

solve();

// another way to do 
// const newArr = [];
// for (let i = k; i < n; i++) {
//   newArr.push(arr[i]);
// }
// for (let j = 0; j < k; j++) {
//   newArr.push(arr[j]);
// }
// console.log(newArr.join(' '))