//your JS code here. If required.
// Function to change the background color of the other squares
function changeColors(exceptId, color) {
    // Get all squares
    var squares = document.getElementsByClassName('square');
    
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change color of squares except the one with id equal to exceptId
        if (squares[i].id !== exceptId) {
            squares[i].style.backgroundColor = color;
        }
    }
}

// Function to handle mouseover event
function handleMouseOver(event) {
    // Change color of other squares to Coffee
    changeColors(event.target.id, '#6F4E37');
}

// Function to handle mouseout event
function handleMouseOut(event) {
    // Change color of other squares back to Lavender
    changeColors(event.target.id, '#E6E6FA');
}

// Attach event listeners to each square
var squares = document.getElementsByClassName('square');
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', handleMouseOver);
    squares[i].addEventListener('mouseout', handleMouseOut);
}
