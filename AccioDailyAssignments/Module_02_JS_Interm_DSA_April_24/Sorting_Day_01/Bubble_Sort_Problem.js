// Bubble Sort Problem
// https://course.acciojob.com/idle?question=29cbcea0-c4c1-4b3b-a2c3-038dfb499b85

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(' ').map(Number);
  bubbleSort(arr, n);
});

function bubbleSort(a, n) {
  //Write your code here
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - 1; j++){
            let left = a[j]
            let right = a[j + 1]
            if(left > right){
                let temp = a[j]
                a[j] = a[ j + 1] 
                a[j + 1] = temp
                count++
            }
        }
    }
    console.log(count)
    console.log(a[0])
    console.log(a[a.length - 1])
}