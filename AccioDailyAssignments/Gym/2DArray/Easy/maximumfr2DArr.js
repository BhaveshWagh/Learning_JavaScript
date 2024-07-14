// Maximum in 2D array
// https://course.acciojob.com/idle?question=36680076-d278-4c86-8863-6e428a9f0ad6
function findMax(array) {
    // return the max value
    // do not console.log
    let maxEle = -Infinity;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] > maxEle) {
          maxEle = array[i][j];
        }
      }
    }
    return maxEle;
  }
  
  const array = [
    [3, 7, 5],
    [2, 8, 4],
    [1, 6, 9],
  ];
  
  console.log(findMax(array))