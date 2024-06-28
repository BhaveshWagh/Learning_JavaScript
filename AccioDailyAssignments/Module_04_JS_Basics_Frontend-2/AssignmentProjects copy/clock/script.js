// Function to update the timer element with the current date and time
function updateTimer() {
    // Get the current date and time
    const now = new Date();
    // console.log(now)

    // Format the date and time to a string
    const dateTimeString = now.toLocaleString();

    // console.log(dateTimeString)
    // Update the content of the timer element
    document.getElementById('timer').textContent = dateTimeString;
}
updateTimer();

// Function to start updating the timer every second
function startTimer() {
    // Initial call to display the timer immediately
    updateTimer();

    // Set interval to update the timer every second
    setInterval(updateTimer, 1000);
}

// Call the function to start updating the timer
startTimer();
