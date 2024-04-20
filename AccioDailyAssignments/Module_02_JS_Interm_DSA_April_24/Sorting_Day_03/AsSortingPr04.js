// AS Sorting 4
// https://course.acciojob.com/idle?question=b999b5d4-ca48-45be-9159-10790d371b98
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(' ').map(Number);
  let l = parseInt(input[2]);

  let ans = sorting4(n, arr, l);
  console.log(ans);
});

function sorting4(n, arr, l) {
  // Write your code here
  arr.sort((a,b) => a - b)
  let count = 0 
  for(let i = 0; i < n - 2; i++){
    let x = arr[i]
    for(let j = i + 1; j < n-1; j++){
      let y = arr[j]
      for(let k = j + 1; k < n; k++){
        let z = arr[k]
        // console.log({x,y,z})
        let diff = z - x
        if(diff <= l){
          count++
        }
      }
    }
  }
  return count;
  // Another Approach
  // for(let i = 0; i < n - 2; i++){
  //   let x = arr[i]
  //   for(let j = i + 2; j < n; j++){
  //     let z = arr[j]
  //     let diff = z - x
  //     console.log({x,z,diff})
  //     if(diff <= l){
  //       count += j - i - 1
  //     }
  //   }
  // }
  
}