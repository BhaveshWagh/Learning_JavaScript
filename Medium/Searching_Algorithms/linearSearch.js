// Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

function linearSearch(array, num) {
  for (let index = 0; index < array.length - 1; index++) {
    const element = array[index];
    if (element == num) {
      return index;
    }
    return -1;
  }
}
array = [1, 2, 40, 33, 20];
console.log(linearSearch(array, 3));
