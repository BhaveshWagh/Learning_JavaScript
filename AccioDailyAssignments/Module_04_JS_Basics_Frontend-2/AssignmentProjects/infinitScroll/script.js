document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('infi-list');
    let listItemCount = 0;

    // Function to add list items
    function addListItems(count) {
        for (let i = 0; i < count; i++) {
            const li = document.createElement('li');
            li.textContent = `List Item ${listItemCount + 1}`;
            list.appendChild(li);
            listItemCount++;
        }
    }

    // Add initial 10 list items
    addListItems(10);

    // Function to check if user reached the end of the list
    function checkScroll() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight - 10) { // Small buffer to ensure it works properly
            addListItems(2);
        }
    }

    // Add scroll event listener
    list.addEventListener('scroll', checkScroll);
});

