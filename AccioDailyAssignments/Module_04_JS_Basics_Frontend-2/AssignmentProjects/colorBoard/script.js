//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');

    // Create 800 squares
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Add hover effect
        square.addEventListener('mouseover', () => {
            changeColor(square);
        });

        board.appendChild(square);
    }
});

function changeColor(element) {
    const randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;

    setTimeout(() => {
        element.style.backgroundColor = 'rgb(29,29,29)';
    }, 1000); // Revert after 1 second
}

function getRandomColor() { 
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// //your JS code here. If required.
// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');

//     // Create 800 squares
//     for (let i = 0; i < 800; i++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
        
//         // Add hover effect
//         square.addEventListener('mouseover', () => {
//             changeColor(square);
//         });

//         board.appendChild(square);
//     }
// });

// function changeColor(element) {
//     const randomColor = getRandomColor();
//     element.style.backgroundColor = randomColor;

//     setTimeout(() => {
//         element.style.backgroundColor = '#ffffff';
//     }, 1000); // Revert after 1 second
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
