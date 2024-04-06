// Module 01 JS -> DSA (Basic) =>  04/04/2024 Points : 20 EASY
function oddNumExtSum(num) {
    let sum = 0;
    while(num !== 0 ){
        let digit = num % 10
        if(digit % 2 == 1){
            sum += digit
        }
        num = Math.floor(num / 10)
    }
    return sum
  }
  
  
  let num = 43217
  const res = oddNumExtSum(num)
  console.log(res)
  