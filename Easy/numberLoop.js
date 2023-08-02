// Note : Double Forward Slash means comment in javascript 
// 1    
// 22   
// 333  
// 4444 
// 55555
let result = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    result += i;
  }
  result += "\n";
}
console.log(result);