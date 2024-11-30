function pushZerosToEnd(arr) {
  //code
  const n = arr.length;
  const temp = new Array(n);

  let j = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp[j++] = arr[i];
      // console.log(temp)
    }
  }
  // console.log(j)
  while (j < n) {
    temp[j++] = 0;
    // console.log(temp)
  }
  // copy from temp[] to arr[]
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  console.log(arr);
}

// arr = [1, 2, 0, 4, 3, 0, 5, 0];
// arr = [10, 20, 30]
// arr = [0,0]

arr = [3, 5, 0, 0, 4];
pushZerosToEnd(arr);
