function countTriplets(arr, X) {
    let count = 0;
  
    // Sort the array to make finding distinct triplets easier
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length - 2; i++) {
      if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
        let left = i + 1;
        let right = arr.length - 1;
  
        while (left < right) {
          const sum = arr[i] + arr[left] + arr[right];
  
          if (sum === X) {
            count++;
  
            // Skip duplicates
            while (left < right && arr[left] === arr[left + 1]) left++;
            while (left < right && arr[right] === arr[right - 1]) right--;
  
            left++;
            right--;
          } else if (sum < X) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return count;
    //  let count = 0;
    //  for(let i = 0; i < arr.length; i++){
    //   for(let j = 0; j < arr.length; j++){
    //     for(let k = 0; k < arr.length; k++){
    //       if(i+j+k == X){
    //         count += 1
    //         console.log(`Count: ${count}, X = ${X}, Triplets = (${i},${j},${k})`)
    //       }
    //     }
    //   }
    //  }
    //  return count;
  }
  
  var readline = require("readline").createInterface(process.stdin);
  
  let inputArr = [];
  var lineNumber = -1;
  
  readline.on("line", readInputs);
  
  function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
      size = parseInt(inputArr[0]);
    }
  
    if (lineNumber == 3 * size) {
      logic("s");
      readline.close();
    }
  }
  
  function logic(input) {
    const T = size;
    for (let i = 1; i <= T * 3; i = i = i + 3) {
      let N = parseInt(inputArr[i]);
      let X = parseInt(inputArr[i + 2]);
      let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));
  
      console.log(countTriplets(Arr, X));
    }
  }
  