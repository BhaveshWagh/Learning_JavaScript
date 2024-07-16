// ! 13 && 14 Weekend --> 15 July 24

// ! Polyfill of filter 

// Array.prototype.myFilter = function(callback){
//   let resultantArr = []
//   for(let i = 0; i < this.length; i++){
//     if(callback.call(this,this[i])){ // if(callback(this[i])) it also works fine  
//       resultantArr.push(this[i])
//     }
//   }
//   return resultantArr
// }
// 

Array.prototype.myFilter = function(callback){
    let arr = []
    for(let i = 0; i< this.length; i++){
      if(callback.call(this,this[i])){
        arr.push(this[i])
      }
    }
    return arr
  }
  
  const arr = [77,66,89,93,32,33,13,61,15,3,1323]
  const resultantArr = arr.myFilter(num => num % 10 === 3) //[ 93, 33, 13, 3, 1323 ]
  
  console.log(resultantArr)
  
  // 3. Question task find even length strings
  
  // const arr = ["one","two","three","four", "five","six","seven","eight", "nine","ten"]
  // const filteredArr = arr.myFilter((ele) => ele.length % 2 === 0)
  // console.log(filteredArr)
  
  // const data = [10,11,22,20,30,200,550,21,65,89]
  // const filterLog = data.myFilter((el) => el % 5 === 0)
  // console.log(filterLog)
  
  // 3.Question task
  // const arr = [10,11,22,20,30,200,550,21,65,89]
  // const filterLog = arr.filter((el) => el % 5 === 0) // [ 10, 20, 30, 200, 550, 65 ]
  // console.log(filterLog)
  
  // 2.Question Revise: task -> cumulative sum of array element initialValue 83 after that multiply result with 2 and print it. 
  
  // Array.prototype.myReduce = function (callback, initialValue) { 
  //     let accumulator = initialValue;
  //     for(let i = 0; i < this.length; i++){
  //       accumulator = callback.call(this, accumulator, this[i])
  //     }
  //     return accumulator
  // }
  
  
  // const arr = [1, 2, 3, 4, 5, 6, 7,8,9,10];
  // const result = arr.myReduce((acc, curr) => acc + curr, 83) * 2
  // console.log(result)
  
  
  // 1.Question Revise: task -> cumulative product of array element
  
  // Array.prototype.myReduce = function (callback, initialValue) { 
  //       let accumulator = initialValue 
  //       for(let i = 0; i < this.length; i++){
  //         if(accumulator){
  //           accumulator = callback.call(this, accumulator, this[i])
  //         }
  //         else{
  //           accumulator = this[i]
  //         }
  //       }
  //       return accumulator
  //     } 
  
  
  // const arr = [1, 2, 3, 4, 5, 6, 7];
  // const result = arr.myReduce((acc, curr) => acc * curr)
  // console.log(result)