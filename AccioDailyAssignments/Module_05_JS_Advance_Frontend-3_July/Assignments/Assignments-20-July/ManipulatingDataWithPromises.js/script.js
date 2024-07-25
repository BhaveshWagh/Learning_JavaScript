function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to update the output div with the provided text
function updateOutput(text) {
  document.getElementById("output").textContent = text;
}

// Chained promises
getNumbers()
  .then((numbers) => {
    // Filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        updateOutput(evenNumbers.join(","));
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledEvenNumbers = evenNumbers.map((num) => num * 2);
        updateOutput(doubledEvenNumbers.join(","));
        resolve(doubledEvenNumbers);
      }, 2000);
    });
  });
// function getNumbers() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([1, 2, 3, 4]);
//         }, 3000);
//     });
// }

// // Function to update the text of the output div
// function updateOutput(text) {
//     document.getElementById('output').textContent = text;
// }

// // Chain the promises
// getNumbers()
//     .then(numbers => {
//         // Filter out odd numbers after 1 second
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const evens = numbers.filter(num => num % 2 === 0);
//                 updateOutput(evens.join(',')); // Update with even numbers
//                 resolve(evens);
//             }, 1000);
//         });
//     })
//     .then(evens => {
//         // Multiply even numbers by 2 after another 2 seconds
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const doubled = evens.map(num => num * 2);
//                 updateOutput(doubled.join(',')); // Update with doubled numbers
//                 resolve(doubled);
//             }, 2000);
//         });
//     });

// // old code
// // Function that returns a promise resolving with an array after 1 second
