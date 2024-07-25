// https://course.acciojob.com/open-web-editor?question=a40ae602-ff36-4464-a833-5260b2d7538e

//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
    // Get the input value
    const input = document.getElementById('ip').value;
    const number = parseFloat(input);
  
    // Ensure the input is a valid number
    if (isNaN(number)) {
      document.getElementById('output').textContent = 'Please enter a valid number.';
      return;
    }
  
    // Function to create a promise that resolves after a delay
    function delayPromise(value, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(value);
        }, delay);
      });
    }
  
    // Create a promise that resolves after 2 seconds with the initial number
    delayPromise(number, 2000)
      .then(result => {
        document.getElementById('output').textContent = `Result: ${result}`;
        // Chain the next promise that multiplies the number by 2
        return delayPromise(result * 2, 1000);
      })
      .then(result => {
        document.getElementById('output').textContent = `Result: ${result}`;
        // Chain the next promise that subtracts 3
        return delayPromise(result - 3, 1000);
      })
      .then(result => {
        document.getElementById('output').textContent = `Result: ${result}`;
        // Chain the next promise that divides by 2
        return delayPromise(result / 2, 1000);
      })
      .then(result => {
        document.getElementById('output').textContent = `Result: ${result}`;
        // Chain the final promise that adds 10
        return delayPromise(result + 10, 1000);
      })
      .then(result => {
        document.getElementById('output').textContent = `Final Result: ${result}`;
      })
      .catch(error => {
        // Handle any errors that occur in the promise chain
        document.getElementById('output').textContent = `Error: ${error}`;
      });
  });
  