function removeDuplicates(arr) {
    // Create a new array to store unique elements
    const uniqueArray = [];
  
    // Iterate through each element in the original array
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        
        // Check if the element is already in the uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
  
        // If the element is not a duplicate, add it to the uniqueArray
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]