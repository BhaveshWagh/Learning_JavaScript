// Count1
// https://course.acciojob.com/idle?question=9c4cf63c-6578-4027-ba5e-e736058a929d
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function count1(n,count = 0) {
  //Write code here
    // not submitted
   if(n === 0){
       return count
   }
    let digit = n % 10
    if(digit === 1){
        count++
    }
    return count1(Math.floor(n/10),count)
}

rl.on('line', (n) => {
  console.log(count1(Number(n)));
  rl.close();
});