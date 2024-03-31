// Contest 31/03/2024
// 1. Problem : Reverse and flip (means change the valuse if 1 to 0 and 0 to 1) the matrix
function reverseFlip(mat, m, n){
    let reversedArr = []
    for(let r = 0; r < m; r++){
        reversedArr.push(mat[r].reverse())
    }
    for(let r = 0; r < m; r++){
        for(let c = 0; c < mat[r].length; c++){
            if(mat[r][c] == 1){
                mat[r][c] = 0
            }
            else{
                mat[r][c] = 1
            }
        }
    }
    console.log(reversedArr)
}

const mat = [[1,1,0],[0,1,0],[0,0,0]]
const m = 3 
reverseFlip(mat,m)
// const n = 3