function luckySeven(arr) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] + arr[i + 2] == 7) {
      flag = true;
    }
  }
  return flag;
}

arr = [2, 1, 5, 1, 0];
console.log(luckySeven(arr));
