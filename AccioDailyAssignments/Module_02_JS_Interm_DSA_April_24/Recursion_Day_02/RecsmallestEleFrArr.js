// Smallest Number in an Array using Recursion
// https://course.acciojob.com/idle?question=f35ea8a2-6832-4e44-8318-c24f708421e3

function findSmallest(arr, currentIndex, smallest) {
  // not submitted
  if (currentIndex >= arr.length) {
    return smallest;
  }
  if (arr[currentIndex] < smallest) {
    smallest = arr[currentIndex];
  }
  return findSmallest(arr, currentIndex + 1, smallest);
}

// Function to read user input
function readInput() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("", (n) => {
    let size = parseInt(n);

    readline.question("", (elements) => {
      let arr = elements.split(" ").map(Number);

      let smallest = findSmallest(arr, 0, arr[0]);
      console.log(smallest);

      readline.close();
    });
  });
}

// Call the function to read input
readInput();
