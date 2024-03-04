function largestNumber(arr){
    let i;
    let max = arr[0]
    for(i = 1; i < arr.length; i++ ){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
array = [1234543,12,34,2,3123,34324,33]
// array.sort((a, b) => a -  b)
console.log(array)
// console.log(largestNumber(array))

