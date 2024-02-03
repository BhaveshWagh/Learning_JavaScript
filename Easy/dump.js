let sumOfEvenNo = 0;
function sumOfEvenNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumOfEvenNo = array[i] + sumOfEvenNo;
    }
  }
  return sumOfEvenNo;
}
Array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(sumOfEvenNumber(Array));
