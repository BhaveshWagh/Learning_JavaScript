function sumOfOddSubArr(arr) {
    let n = arr.length;
    let sum = 0;
  
    for (let r = 0; r < n; r++) {
      let sumOfSubArr = 0;
      for (let c = r, length = 1; c < n; c++, length++) {
        // str+= arr[i] + ' '
        sumOfSubArr += arr[c];
        if (length % 2 !== 0) {
          sum += sumOfOddSubArr;
        }
      }
    }
    return sum;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const res = sumOfOddSubArr(arr);
  console.log(res);