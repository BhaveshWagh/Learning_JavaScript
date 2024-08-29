// Display the original properties of array
// Prototype

const array = [1, 2, 3, 4, 5];

for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const element = array[key];
    console.log(element);
  }
}
// array.forEach(element => {
//     console.log(element)
// });
