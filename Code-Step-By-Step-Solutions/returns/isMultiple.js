// Write a function isMultiple that accepts two non-negative number parameters a and b, and returns true if a is a multiple of b, and false otherwise. For example, the call of isMultiple(15, 5) would return true because 15 = 5 * 3. You may assume that a and b are non-negative integers and that b is not 0.

function isMultiple(a,b){
    
    if(a % b === 0){
       return true
    }
    else{
       
        return false
    }
}


console.log(isMultiple(15,0))