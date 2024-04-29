// Countabc
// https://course.acciojob.com/idle?question=8dff7ba2-333c-4674-90b7-d39b0bc7a070
const readline = require('readline');
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
     });
   rl.on('line', (input) => {
     console.log(CountABC(input, 0));
     rl.close();
     });



function CountABC(str,i,ans = 0) {
    // not submiited
    if(i === str.length - 2){
        return ans
    }
        const  curr = str.slice(i, i+3)
    if(curr === "abc" || curr === "aba"){
        ans++
    }
    return CountABC(str,i+1,ans)
}


/**
 *    function CountABC(str, i, ans = 0) {
  // if(i >= str.length - 2){
  //     return ans
  // }
  for (let i = 0; i < str.length - 2; i++) {
    let curr = "";
    for (let j = i; j < i + 3; j++) {
        curr += str[j];
    }
    console.log(curr);
    
    if(curr === "abc" || curr === "aba"){
        ans++
        
    }
  }
  console.log(ans)
}
CountABC("abcxaba", 0)
 */