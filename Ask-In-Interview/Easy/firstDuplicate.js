function firstDuplicate(str) {
    // TC : worst-case time complexity is O(n²).
    // SC : the space complexity is O(n).
  let seen = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < seen.length; j++) {
      if (seen[j] === str[i]) {
        return str[i];
      }
    }
    seen.push(str[i]);
  }
  return null;

  /** Best Approach: Time and Space complexity is O(n)
     * Optimized Approach Analysis
     * Time Complexity: O(n) because checking and adding in a Set are constant-time operations.
     * Space Complexity: O(n) to store the unique characters in the Set.
    
    let seen = new Set();
    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            return str[i];
        }
        seen.add(str[i]);
    }
    return null;
     */
}

console.log(firstDuplicate("abca")); // Output: 'a'
console.log(firstDuplicate("abcdefe")); // Output: 'e'
console.log(firstDuplicate("abcdef")); // Output: null
