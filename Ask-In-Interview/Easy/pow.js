// pow(2,3) means 2 multiply itself 3 times like : pow(2, 3) : 2 * 2 * 2 : Ans will be : 8
// pow(2,4) --> 2 * 2 * 2 * 2 : 16




function pow(x, n) {
    let result = 1;
    
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log(pow(2,4))
  console.log(pow(2, 3));