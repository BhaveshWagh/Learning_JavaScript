function average(array){
    let sum = 0;
    let lengthOfArray = array.length
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;        
    }
    let average = sum / lengthOfArray 
    return average;
}

console.log(average([8,7,5,7,8,9,5,8,9,10]))