// Ultra Fast Mathematician
// https://course.acciojob.com/idle?question=613d8b6d-2bb3-4d1d-aeba-47116b9351fd
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (A) => {
  rl.on('line', (B) => {
    let a = A.split('');
    let b = B.split('');
    let c = solve(a, b);
    console.log(c.join(''));
    rl.close();
  });
});

function solve(a, b) {
  // your code here
    let c = []
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            c.push('1')
        }
        else{
            c.push('0')     
        }
    }
    return c
}