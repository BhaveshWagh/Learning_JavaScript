//your JS code here. If required.


document.getElementById('change_button').addEventListener('click', function() {
    // Get the block ID and color from input fields
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items' background color to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'transparent');

    // Change the background color of the specified grid item
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID');
    }
});

document.getElementById('reset_button').addEventListener('click', function() {
    // Reset all grid items' background color to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'transparent');
});
