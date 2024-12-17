// 2. way Using Toggle functionality

const toggleButton = document.getElementById("toggle-theme");
const body = document.body;
const heading = document.querySelector("h1");

toggleButton.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    // Switch to Light Mode
    body.style.backgroundColor = "white";
    heading.style.color = "black";
    toggleButton.textContent = "Switch to Dark Mode";
  } else {
    // Switch to Dark Mode
    body.style.backgroundColor = "black";
    heading.style.color = "white";
    toggleButton.textContent = "Switch to Light Mode";
  }
});

// 4. way
// const toggleButton = document.getElementById("toggle-theme");
//       const body = document.body;

//       toggleButton.addEventListener("click", () => {
//         body.classList.toggle("dark-mode");
//         toggleButton.textContent = body.classList.contains("dark-mode")
//           ? "Switch to Light Mode"
//           : "Switch to Dark Mode";
//       });

// 3. one more optimized way :
// const toggleButton = document.getElementById("toggle-theme");
// const body = document.body;

// toggleButton.addEventListener("click", () => {
//   // Toggle dark-mode class on the body
//   body.classList.toggle("dark-mode");

//   // Update button text based on the current theme
//   if (body.classList.contains("dark-mode")) {
//     toggleButton.textContent = "Switch to Light Mode";
//   } else {
//     toggleButton.textContent = "Switch to Dark Mode";
//   }
// });

// 1. Normal Approach The above is toggle fuctionality the code is more optimized.

// const dark = document.getElementById("dark-mode");
// const light = document.getElementById("light-mode");
// const heading = document.querySelector("h1");

// dark.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
//   heading.style.color = "white";
//   console.log("dark btn clicked!");
// });

// light.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
//   heading.style.color = "black";
// });
