// Shortcut functions
// https://course.acciojob.com/open-web-editor?question=5819b0fe-62d1-4180-b0b1-6d9762588405
// function shortcut(str1, str2) {
//     // Using substring and toUpperCase methods
//     let initial1 = str1.substring(0, 1).toUpperCase();
//     let initial2 = str2.substring(0, 1).toUpperCase();
//     return initial1 + initial2;
// }

// function shortcut(str1, str2) {
//     // Manual approach without built-in functions
//     let initial1 = '';
//     let initial2 = '';

//     // Check if str1 is not empty and extract initial letter manually
//     if (str1 !== '') {
//         initial1 = str1[0].toUpperCase();
//     }

//     // Check if str2 is not empty and extract initial letter manually
//     if (str2 !== '') {
//         initial2 = str2[0].toUpperCase();
//     }

//     // Return the concatenation of initial letters
//     return initial1 + initial2;
// }
function shortcut(s1, s2) {
    // Check if either string is empty
    if (s1 === '' || s2 === '') {
        return '';
    }

    // Extract initial letters and convert to uppercase
    let initial1 = s1[0];
    let initial2 = s2[0];

    // Return the concatenated initial letters
    return initial1 + initial2;
}

console.log(shortcut("Amnesty", "International"))
console.log(shortcut("Amnesty", ""))
console.log(shortcut("", "International"))
console.log(shortcut("", ""))