// 0-2-1 Sorting 
// https://course.acciojob.com/idle?question=3549dcbb-4218-4d81-8ee8-74e1bc96e067
function swapPos(arr, cntSplit) {
  let start = cntSplit;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
function sortArr(arr, n) {
  arr.sort((a, b) => a - b);
  let cntSplit = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      cntSplit += 1;
    }
  }
  swapPos(arr, cntSplit);
  return arr;

}

console.log(sortArr([2, 0, 1, 0, 2, 1, 1], 7));
