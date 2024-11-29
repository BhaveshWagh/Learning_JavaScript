// what is recursion ?
// function calls itself till the condition meets
// if ? : else
function pow(x,n){
    return (n == 1) ? x : (x * pow(x, n-1))
}
console.log(pow(2,5))