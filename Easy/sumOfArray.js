let sum = 0;
function sumOfArray() {
  for (let i = 0; i < Array.length; i++) {
    sum = Array[i] + sum;
  }
  return sum;
}

Array = [1, 2, 3, 4, 5];

console.log(sumOfArray(Array));

