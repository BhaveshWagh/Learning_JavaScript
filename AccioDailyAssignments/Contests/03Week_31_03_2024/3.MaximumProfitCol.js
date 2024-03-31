// Maximum profit column

function maximumProfit(mat,m,n){
    let maxSumCol = 0
    for(let r = 0; r < m; r++){
        let colSum = 0
        for(let c = 0; c < n;c++){
            colSum += mat[c][r]
        }
        maxSumCol = Math.max(maxSumCol,colSum)
    }
    console.log(maxSumCol)
}
const mat = [[1,1,0],[0,1,0],[0,1,0]]
const m = 3 
const n = 3

maximumProfit(mat,m,n)
