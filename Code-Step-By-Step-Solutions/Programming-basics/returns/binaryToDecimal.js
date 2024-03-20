
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