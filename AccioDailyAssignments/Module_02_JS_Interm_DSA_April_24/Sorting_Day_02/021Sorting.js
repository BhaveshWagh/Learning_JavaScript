// 0-2-1 Sorting
// https://course.acciojob.com/idle?question=3549dcbb-4218-4d81-8ee8-74e1bc96e067
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      let ans = Sorting021(n, arr);
      console.log(ans.join(' '));
      readline.close();
    });
  });
  
  // function swapPos(arr, cntSplit) {
  //   let start = cntSplit;
  //   let end = arr.length - 1;
  //   while (start < end) {
  //     let temp = arr[start];
  //     arr[start] = arr[end];
  //     arr[end] = temp;
  //     start++;
  //     end--;
  //   }
  //   return arr;
  // }
  function Sorting021(n, arr) {
   
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] === 0) {
        count0++;
      }
      if (arr[i] === 1) {
        count1++;
      }
      if (arr[i] === 2) {
        count2++;
      }
    }
    let ans = [];
    for (let i = 0; i < count0; i++) ans.push(0);
    for (let i = 0; i < count2; i++) ans.push(2);
    for (let i = 0; i < count1; i++) ans.push(1);
  
    return ans;
      // Another Way to solve using direct sort function
    //   arr.sort((a, b) => a - b);
    //     let cntSplit = 0;
    // for (let i = 0; i < n; i++) {
    //   if (arr[i] == 0) {
    //     cntSplit += 1;
    //   }
    // }
    // swapPos(arr, cntSplit);
    // return arr;
    
  }