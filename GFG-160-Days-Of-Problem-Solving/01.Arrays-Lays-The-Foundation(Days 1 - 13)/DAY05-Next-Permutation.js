// JavaScript Program to find the next permutation by 
// generating only next

function nextPermutation(arr) {
    const n = arr.length; 

    // Find the pivot index
    let pivot = -1; 
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            pivot = i;
            break;
        }
    }

    // If pivot point does not exist, reverse the
    // whole array
    if (pivot === -1) {
        arr.reverse();
        return;
    }

    // find the element from the right that
    // is greater than pivot
    for (let i = n - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
            break;
        }
    }

    // Reverse the elements from pivot + 1 to the 
    // end to get the next permutation in place
    let left = pivot + 1;
    let right = n - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

const arr = [2, 4, 1, 7, 5, 0];
nextPermutation(arr);    
console.log(arr.join(" "));