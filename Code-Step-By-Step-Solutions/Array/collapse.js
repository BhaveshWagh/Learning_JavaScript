
function collapse(arr){
    let arr2 = []
    let item = 0
    for (let i = 0; i < arr.length; i+=2){
        if(arr[i] + arr[i + 1] === 0){
            arr2.push(0)
        }
        else{

            item = arr[i] + arr[i + 1] || arr[i]
            arr2.push(item)
        }
        // console.log(item)
        
    }
    return arr2
}



const arr = [100,-100]
console.log(collapse(arr))