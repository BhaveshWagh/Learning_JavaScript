// Distinct Palindromic SubStrings
// https://course.acciojob.com/idle?question=a2253264-33ae-4cd3-85ce-ba0f6f461418
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (s) => {
  palindromeSubStrs(s);
  rl.close();
});

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function generateSubstrings(s, start, end, result) {
    if (start > end) {
        return;
    }

    for (let i = start; i <= end; i++) {
        const substring = s.substring(start, i + 1);
        if (isPalindrome(substring) && !result.includes(substring)) {
            result.push(substring);
        }
    }

    generateSubstrings(s, start + 1, end, result);
}

function palindromeSubStrs(s) {
    const result = [];
    const n = s.length;
    generateSubstrings(s, 0, n - 1, result);
    result.sort(); 

    for (const substring of result) {
        console.log(substring);
    }
}