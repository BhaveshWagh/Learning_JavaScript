
/**
 * @param {string} str
 * @return {string}
 */


function longestUniqueSubstr(s) {
    let maxLength = 0;
    let start = 0; // Start of the current window
    let longestSubstring = '';
    let seenChars = new Map(); // Map to store the last seen index of characters

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the map and within the current window
        if (seenChars.has(char) && seenChars.get(char) >= start) {
            start = seenChars.get(char) + 1; // Move the start forward
        }

        // Update the map with the current character's index
        seenChars.set(char, end);

        // Update the maximum length and the substring if the current window is larger
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = s.slice(start, end + 1);
        }
    }

    return longestSubstring;
}

// Test cases
console.log(longestUniqueSubstr('aaaaa'));  // 'a'
console.log(longestUniqueSubstr('abcabc')); // 'abc', 'bca', or 'cab'
console.log(longestUniqueSubstr('a12#2'));  // 'a12#'
