// Print all subsequences of a string
// https://course.acciojob.com/idle?question=47e066fc-64ac-4ce9-ab5f-3a3d6d522765
const readline = require('readline');
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
     });
   rl.on('line', (input) => {
     printSubsequence(input);
     rl.close();
     });

function printSubsequence(str,ans="") {
   
    // not on github
    if(str === ""){
        process.stdout.write(ans + " ")
        return
    }
    const curr = str[0]
    printSubsequence(str.substr(1),ans+curr)
    printSubsequence(str.slice(1),ans)
}