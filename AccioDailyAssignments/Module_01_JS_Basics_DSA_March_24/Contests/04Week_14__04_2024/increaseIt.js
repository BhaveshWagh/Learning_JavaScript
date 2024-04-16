function increaseIt(arr, n) {
  let coins = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (arr[i] <= arr[i - 1]) {
      coins += arr[i - 1] - arr[i] + 1;
      arr[i] = arr[i - 1] + 1;
    }
  }
  return coins;
}
const res = increaseIt([2, 4, 2, 4], 4);
console.log(res);
increaseIt([1, 1, 1], 3);

//   console.log("coins needed", coins);
// console.log(`line 7:  ${coins} += ${arr[i - 1]} - ${arr[i]} + 1`)
// console.log(`line 8:  ${coins}`)
// console.log(`line 10: ${i} = ${arr[i]} : coins Needed : ${coins} `)
//   console.log(arr);
