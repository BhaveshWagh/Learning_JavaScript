function rangeOfNumbers(n1, n2) {
  const array = [];
  if (n1 === n2) {
    console.log(n1);
  } else if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
      array.push(i);
    }
  } else if (n1 > n2) {
    for (let i = n1; i >= n2; i--) {
      array.push(i);
    }
  }
  console.log(array.join(","));
}
rangeOfNumbers(8, 10);
rangeOfNumbers(18, 10);
rangeOfNumbers(10, 10);
