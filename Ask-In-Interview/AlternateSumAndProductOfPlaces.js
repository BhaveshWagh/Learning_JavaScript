const AlternateSumProduct = (N, Arr) => {
    // Your code here
    // do not return anything print the alternate sum and product value.
    let sumEven = 0;
    let productOdd = 1;
  
    for (let i = 0; i < N; i++) {
      if ((i + 1) % 2 === 0) {
        // ! even position (1-based)
        sumEven += Arr[i];
      } else {
        // odd position (1-based)
        productOdd *= Arr[i];
      }
    }
    console.log(`${sumEven} ${productOdd}`);
  };
  
  const N = 5;
  const Arr = [1, 2, 3, 4, 5];
  console.log(AlternateSumProduct(N, Arr)); // Output: "6 15"
  