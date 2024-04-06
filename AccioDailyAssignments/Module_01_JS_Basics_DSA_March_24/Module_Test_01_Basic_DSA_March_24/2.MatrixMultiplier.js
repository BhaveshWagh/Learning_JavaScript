// Module 01 JS -> DSA (Basic) =>  04/04/2024 Points : 40 MEDIUM
function matrixMultiplier(A,B){
    const p = A.length
    const q = A[0].length
    const r = B[0].length
  
    if(q !== B.length){
      return
    }
  
    let res = []
  
    for(let i = 0; i < p; i++){
      res.push([])
      for(let j = 0; j < r; j++){
        res[i][j] = 0
        for(let k = 0; k < q; k++){
          res[i][j] += A[i][k] * B[k][j]
        }
      }
    }
    return res
  }
  
  let A = [[2,4,1],[4,1,1]]
  let B = [[5,2,1,4],[1,1,4,4],[3,3,2,1]]
  
  const result = matrixMultiplier(A,B)
  console.log(result)