function binaryToDecimal(num) {
  let decimal = 0;
  let myArr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  for (let i = 0; i < myArr.length; i++) {
    decimal = decimal * 2 + myArr[i];
  }
  return decimal;
}

let num = 101111;

console.log(binaryToDecimal(num));

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('', n => {
//   n = parseInt(n);
//   //write code here
//     for(let i = 0; i < n; i++){
//         const hashes = i + 1;
//         const spaces = n - hashes;
//         for(let space = 0; space < spaces ; space++){
//             process.stdout.write(" ")
//         }for(let hash = 0; hash < hashes ; hash++){
//             process.stdout.write("* ")
//         }
//         console.log()
//     }
//     for(let i = n; i > 0 ; i--){

//      for(let j = i; j > 0; j--){
//       process.stdout.write("* ")
//      }
//       console.log()
//   }
//   readline.close();
// });
