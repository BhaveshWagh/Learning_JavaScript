// Add an event listener to the 'Start New Timer' button
document.getElementById("start-timer").addEventListener("click", startTimer);

// Array to store active timers
let timers = [];

// Function to start a new timer
function startTimer() {
  // Get the input values for hours, minutes, and seconds
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  // Calculate the total time in seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Only proceed if the total time is greater than 0
  if (totalSeconds > 0) {
    // Create a new timer object
    const timer = {
      id: Date.now(), // Unique ID for the timer
      remainingTime: totalSeconds, // Time remaining in seconds
      interval: null, // Placeholder for the interval ID
    };

    // Add the new timer to the timers array
    timers.push(timer);

    // Display the timer on the page
    displayTimer(timer);
    document.querySelector('.no-timers').style.display = 'none';
    // Start the countdown for the timer
    runTimer(timer);
  }
}

// Function to display a timer on the page
function displayTimer(timer) {
  // Create a new div element for the timer
  const timerElement = document.createElement("div");
  timerElement.className = "timer";
  timerElement.id = `timer-${timer.id}`;

  // Set the inner HTML of the timer element
  timerElement.innerHTML = `
    <span>${formatTime(timer.remainingTime)}</span>
    <button onclick="stopTimer(${timer.id})">Delete</button>
  `;

  // Add the timer element to the timers container
  document.getElementById("timers-container").appendChild(timerElement);
}

// Function to run the timer countdown
function runTimer(timer) {
  // Set an interval to decrement the timer every second
  timer.interval = setInterval(() => {
    // Decrease the remaining time by 1 second
    timer.remainingTime--;

    // Update the displayed time
    const timerElement = document.querySelector(`#timer-${timer.id} span`);
    if (timer.remainingTime > 0) {
      timerElement.textContent = formatTime(timer.remainingTime);
    } else {
      // Clear the interval to stop the countdown
      clearInterval(timer.interval);

      // Change the appearance of the timer to indicate it has ended
      document.getElementById(`timer-${timer.id}`).classList.add("ended");

      // Update the timer text to "Timer is Up!"
      timerElement.textContent = "Timer is Up!";

      // Play a sound to notify the user
      playSound();
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Function to stop and delete a timer
function stopTimer(timerId) {
  // Find the index of the timer in the timers array
  const timerIndex = timers.findIndex((timer) => timer.id === timerId);

  // If the timer exists, proceed to remove it
  if (timerIndex !== -1) {
    // Clear the interval to stop the countdown
    clearInterval(timers[timerIndex].interval);

    // Remove the timer element from the page
    document.getElementById(`timer-${timerId}`).remove();

    // Remove the timer from the timers array
    timers.splice(timerIndex, 1);
    if (timers.length === 0) {
      document.querySelector('.no-timers').style.display = 'block';
    }
  }
}
c;
// Function to format the time as HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return ` ${ hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Function to play a sound when the timer ends
function playSound() {
  const audio = new Audio("alarm.mp3");
  audio.play();
}
