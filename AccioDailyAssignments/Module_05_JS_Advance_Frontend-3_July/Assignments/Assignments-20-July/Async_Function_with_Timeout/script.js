//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value, 10);
  
  // Ensure the delay is a number and greater than or equal to 0
  if (isNaN(delay) || delay < 0) {
    alert('Please enter a valid delay in milliseconds.');
    return;
  }
  
  await displayMessageWithDelay(text, delay);
});

async function displayMessageWithDelay(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  document.getElementById('output').innerText = message;
}
