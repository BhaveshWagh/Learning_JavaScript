function banish(a1, a2) {
    // Check if a2 is an empty array
    if (a2.length === 0) {
        return;
    }

    let currentIndex = 0;

    for (let i = 0; i < a1.length; i++) {
        // Check if the current element in a1 is not present in a2
        if (!a2.includes(a1[i])) {
            // Shift the element to the left and update the currentIndex
            a1[currentIndex] = a1[i];
            console.log(a1[currentIndex])
            currentIndex++;
            console.log("curr",currentIndex)
            
        }
    }

    // Fill the remaining elements with 0
    console.log("outer curr",currentIndex)
    console.log("lenght a1",a1.length)
    for (let i = currentIndex; i < a1.length; i++) {
        a1[i] = 0;
        console.log(a1)
    }
}

// Example usage:
let a1 = [1, 42, 2222, 9, 5, 1];
let a2 = [42, 2222, 9];
banish(a1, a2);

console.log(a1);

