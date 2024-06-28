document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const button = document.querySelector('input[type="button"]');
    
    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Get the select element
        const colorSelect = document.getElementById('colorSelect');
        
        // Get the selected option' index
        const selectedIndex = colorSelect.selectedIndex;
        
        // If an option is selected (selectedIndex is not -1)
        if (selectedIndex !== -1) {
            // Remove the selected option
            colorSelect.options[selectedIndex].remove();
        }
    });
});
