function reverseArr(arr){
    // In the Contenst there start and end values are given already
    let start = 0
    let end = arr.length - 1 
    for(let i = 0; i < arr.length; i++){
        while(start < end){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
    return arr
}

const arr = [1,2,4,3,5,0]
console.log(reverseArr(arr))