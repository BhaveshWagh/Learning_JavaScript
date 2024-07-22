//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
  
    // Validation to ensure inputs are not empty
    if (!name || !age) {
      alert('Please fill in both fields.');
      return;
    }
  
    // Create a promise that resolves or rejects based on age
    const agePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });
  
    // Handle the promise resolution or rejection
    agePromise
      .then(message => {
        alert(message);
      })
      .catch(error => {
        alert(error);
      });
  });
  
  