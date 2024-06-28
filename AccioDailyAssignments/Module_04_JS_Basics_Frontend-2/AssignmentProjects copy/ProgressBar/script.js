// document.addEventListener("DOMContentLoaded", function () {
//   const circles = document.querySelectorAll(".circle");
//   const prevButton = document.getElementById("prev");
//   const nextButton = document.getElementById("next");
//   let currentActive = 0;

//   updateButtons();

//   nextButton.addEventListener("click", function () {
//     currentActive++;
//     updateProgress();
//   });

//   prevButton.addEventListener("click", function () {
//     currentActive--;
//     updateProgress();
//   });

//   function updateProgress() {
//     circles.forEach((circle, index) => {
//       if (index <= currentActive) {
//         circle.classList.add("active");
//       } else {
//         circle.classList.remove("active");
//       }
//     });

//     updateButtons();
//   }

//   function updateButtons() {
//     if (currentActive === 0) {
//       prevButton.disabled = true;
//     } else {
//       prevButton.disabled = false;
//     }

//     if (currentActive === circles.length - 1) {
//       nextButton.disabled = true;
//     } else {
//       nextButton.disabled = false;
//     }
//   }
// });
//your JS code here. If required.

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    if (currentActive === 1) {
        prevButton.disabled = true;
    } else if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}