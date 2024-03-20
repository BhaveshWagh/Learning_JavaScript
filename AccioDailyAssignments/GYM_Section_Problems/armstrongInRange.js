// Input

// 0 160
// Output

// 0 1 2 3 4 5 6 7 8 9 153

// Armstrong Numbers in Range
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', (line) => {
      let [m, n] = line.split(' ').map(Number);
      
      // Write the code here
      for(let i = m; i <= n; i++){
        // 1.find number of digits first
        let count = 0
        let temp = i;
        while(temp != 0){
            temp = parseInt(temp/10)
            count++;
        }
        // 2. find  sum of digit ^ numdigit
        let sum = 0;
    temp = i;
    while (temp != 0) {
      const lastDigit = temp % 10;
      temp = parseInt(temp / 10);
      sum += lastDigit ** count;
    }

    // 3. check armstrong
    if (sum == i) {
      process.stdout.write(String(i));
    }
      }
      
      readline.close();
  });