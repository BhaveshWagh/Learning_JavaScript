// Linear Search
function linearSearch(array,num){
    for(let i = 0; i <= array.length;i++){
        if(array[i] === num){
            return i
        }
    }
    console.log("Not found")
}

array = [24,21,23,42,435]
num = 435
console.log(linearSearch(array,num))