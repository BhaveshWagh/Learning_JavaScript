// Boolean Matrix Problem
// https://course.acciojob.com/idle?question=280b0fc0-6c4d-4aae-9364-5044e0e9bbce

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', m_n => {
    const [m, n] = m_n.split(' ').map(Number);
    let mat = [];
    let count = 0;
    readline.on('line', line => {
      mat.push(line.split(' ').map(Number));
      count++;
      if(count === m) {
        let ans = BooleanMatrixProblem(m, n, mat);
        for(let i = 0; i < m; ++i) {
          console.log(ans[i].join(' '));
        }
        readline.close();
      }
    });
  });
  
  function BooleanMatrixProblem(m, n, mat) {
    
      // Write your code here
      for(let r = 0; r < m; r++){
          for(let c = 0; c < n; c++){
              if(mat[r][c] == 1){
                  // c = 0;
                  for(let c = 0; c < n; c++){
                      mat[r][c] = 1
                  }
                  break
              }
          }
      }
      return mat
      
  }


  /**dry run 
   * function printElements(mat, n, m){
    for(let r = 0; r < n; r++){
        for(let c = 0; c < m; c++){
            if(mat[r][c] == 1){
                // c = 0;
                for(let c = 0; c < m; c++){
                    mat[r][c] = 1
                }
                break
            }
        }
    }
    return mat
}
const mat = [[0,1,0,0],[0,0,0,0],[1,0,0,0]]
let n = 3;
let m = 4;
const res = printElements(mat,n,m)
console.log(res)

   */