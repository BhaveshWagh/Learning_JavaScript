function indexOfIgnoreCase(str, subStr) {
    const strLower = str.toLowerCase();
    const subStrLower = subStr.toLowerCase();
    
    if (subStrLower === "") {
        return 0; // Empty substring is always found at index 0
    }
    
    for (let i = 0; i <= str.length - subStr.length; i++) {
        if (strLower.substring(i, i + subStr.length) === subStrLower) {
            return i;
        }
    }
    
    return -1; // substring not found
}
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
console.log(indexOfIgnoreCase("test", "aaa")); // Output: -1
