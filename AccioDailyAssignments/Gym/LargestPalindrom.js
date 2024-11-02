// Largest Palindrom FreecodeCamp Project eular question
function largestPalindromeProduct(n) {
    let maxPalindrome = 0;
    const upperLimit = Math.pow(10, n) - 1; // Largest n-digit number
    const lowerLimit = Math.pow(10, n - 1); // Smallest n-digit number

    for (let i = upperLimit; i >= lowerLimit; i--) {
        for (let j = i; j >= lowerLimit; j--) { // Only loop down from i to avoid duplicate pairs
            const product = i * j;
            if (product <= maxPalindrome) break; // No need to proceed if product is already smaller than maxPalindrome
            if (isPalindrome(product)) {
                maxPalindrome = product;
            }
        }
    }

    return maxPalindrome;
}

// Helper function to check if a number is a palindrome
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}


largestPalindromeProduct(3); // Expected output: 906609
