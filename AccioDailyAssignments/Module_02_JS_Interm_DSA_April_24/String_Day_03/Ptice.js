// Ptice
// https://course.acciojob.com/idle?question=9e8aaa54-86e5-4a82-bba6-deaaacb9700c
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function ptice(n, ans) {
    // Write your code here and print output in this function
    let Adrian = "ABC";
    let Bruno = "BABC";
    let Goran = "CCAABB";
  
    let a = 0;
    let b = 0;
    let g = 0;
    for (let i = 0; i < ans.length; i++) {
      // Adrian[i % 3] its repeating the cycle ABC again start from ABC
      // **** Whenever u have compare or checking start to end and again start 0,1,2,3,0,1,2,3
      // Always Remember **** Module for repeating a cycle
  
      if (Adrian[i % 3] === ans[i]) {
        a += 1;
      }
      if (Bruno[i % 4] === ans[i]) {
        b += 1;
      }
      if (Goran[i % 6] === ans[i]) {
        g += 1;
      }
    }
    const max = Math.max(a,b,g)
    console.log(max)
    if(max === a){
      console.log("Adrian")
    }
    if(max === b){
      console.log("Bruno")
  
    }
    if(max === g){
      console.log("Goran")
    }
  }
  
  readline.question("", (n) => {
    readline.question("", (key) => {
      ptice(parseInt(n), key);
      readline.close();
    });
  });
  