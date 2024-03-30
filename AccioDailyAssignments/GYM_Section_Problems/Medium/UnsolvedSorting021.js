// The solution is not optimal. it takes long time to complete
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
    let cntSplit = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 1; j < n - i; j++) {
        if (arr[i] > arr[j + i]) {
          // if yes then swap there positions
          let temp = arr[i];
          arr[i] = arr[j + i];
          arr[j + i] = temp;
        }
      }
      if (arr[i] == 0) {
        cntSplit += 1;
      }
    }
    //   now swap the positions of 1's and 2's
    swapPos(arr, cntSplit);
    return arr;
  }
  
  console.log(sortArr([2, 0, 1, 0, 2, 1, 1], 7));
  
  // function sortArray(arr) {
  //     let low = 0; // Pointer for 0s
  //     let high = arr.length - 1; // Pointer for 2s
  //     let mid = 0; // Current element being processed
  
  //     while (mid <= high) {
  //         if (arr[mid] === 0) {
  //             // Swap arr[low] and arr[mid]
  //             [arr[low], arr[mid]] = [arr[mid], arr[low]];
  //             low++;
  //             mid++;
  //         } else if (arr[mid] === 1) {
  //             // Move to the next element
  //             mid++;
  //         } else if (arr[mid] === 2) {
  //             // Swap arr[mid] and arr[high]
  //             [arr[mid], arr[high]] = [arr[high], arr[mid]];
  //             high--;
  //         }
  //     }
  
  //     return arr;
  // }
  
  // // Example usage
  // const inputArr = [2, 0, 1, 0, 2, 1, 1];
  // const sortedArr = sortArray(inputArr);
  // console.log(sortedArr)
  