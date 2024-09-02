// ! Asked in samespace intern position

// arr = [1,2,3,4,5]
// target sum = 7;
// you have do sum of the two numbers and if the sum === target sum push that values inside arr like below
// o/p : [[3,4],[2,5]] 

function getPairsSumWithNumber (arr, targetValue){
    const pairs = []
    const seen = new Set()
    console.log(seen)

    for(let num of arr){
        const complement = targetValue - num;
    console.log(complement)
        if(seen.has(complement)){
            pairs.push([complement, num])
        }
        seen.add(num)
        console.log(seen)
    }
    return pairs
}

console.log(getPairsSumWithNumber([1,2,3,4,5],8))