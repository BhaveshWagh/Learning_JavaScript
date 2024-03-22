const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate_nCr(n, r) {
    // write code here
      let divisor = n - r;
  let factOfN = 1;
  let factOfDivisor = 1
  let factOfR = 1
  for(i = 1; i <= n; i++){
    factOfN = factOfN * i
  }
  for(i = 1; i <= divisor; i++){
    factOfDivisor = factOfDivisor * i
  }
  for(i = 1; i <= r; i++){
    factOfR = factOfR * i
  }
  let result = factOfN/(factOfDivisor * factOfR)
  return result
  }
  
  readline.question('', input => {
    const [n, r] = input.split(' ').map(Number);
    const ans = calculate_nCr(n, r);
    console.log(ans);
    readline.close();
  });