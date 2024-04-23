// Find Indices
// https://course.acciojob.com/idle?question=ba5e0f11-6785-42a7-a9a8-46fa03379de9
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', input => {
    const inputs = input.split(' ');
    const n = parseInt(inputs[0]);
    const x = parseInt(inputs[1]);
    readline.question('', arrayInput => {
      const arr = arrayInput.split(' ').map(Number);
      findX(arr, n, x);
      readline.close();
    });
  });
  
  function findX(arr, n, x, i=0, indices = []) {
    // write code here
       if(i > n){
      return console.log(indices.join(' '))
    }
    if(arr[i] === x){
      indices.push(i)
    }
    return findX(arr,n,x,i+1,indices)
  
  }
  