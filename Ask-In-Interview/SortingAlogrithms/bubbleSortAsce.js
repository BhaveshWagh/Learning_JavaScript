function bubbleSortDesc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap it
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const inpArr = [1, 4, 2, 3, 5, -1, -2];
console.log(bubbleSortDesc(inpArr));
