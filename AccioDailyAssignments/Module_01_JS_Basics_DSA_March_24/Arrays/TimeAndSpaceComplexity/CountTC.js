// Write calculate the time complexity and write it down
// TC = n*n => O(n^3)
function hw1(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            console.log("*")
            break
        }
    }
}

function hw2(n){
    let i = 1
    while(i ** 2 <= n){
        i = i + 1
    }
}

function hw3(m,n){
    while( m != n){
        if(m > n){
            m = m - n
        }
        else{
            n = n - m
        }
    }
}