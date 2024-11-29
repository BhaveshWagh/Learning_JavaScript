const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    //Write your code here and print the required output
    let num = n;
    let reversed = 0
    while(n !== 0){
      let digit = n % 10
      reversed = reversed * 10 + digit
      n = Math.floor(n / 10)
    }
    // console.log(num,reversed)
    if(num == reversed){
      console.log("true")
    }
    else{
      console.log("false")
    }
    readline.close();
  });