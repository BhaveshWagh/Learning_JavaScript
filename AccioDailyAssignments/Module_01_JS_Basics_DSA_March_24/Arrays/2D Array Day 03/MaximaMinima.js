// Find The Way
// Link: https://course.acciojob.com/idle?question=60d37a31-7584-48eb-baad-ee073ffc7acf
function findTheWay(matrix) {
    //Write code here
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    let i = 0;
    let j = 0;
    let facing = 0;
  
    while (true) {
      // 1. if the cell is 1
      if (matrix[i][j] == 1) {
        matrix[i][j] = 0;
        facing = (facing + 1) % 4;
      }
  
      // 2. move forward
      if (facing == 0) {
        j++;
      } else if (facing == 1) {
        i++;
      } else if (facing == 2) {
        j--;
      } else if (facing == 3) {
        i--;
      }
  
      // 3. check whether you are out and return lastbox
      if (i == -1) {
        return [0, j];
      } else if (j == cols) {
        return [i, cols - 1];
      } else if (i == rows) {
        return [rows - 1, j];
      } else if (j == -1) {
        return [i, 0];
      }
    }
  }
  