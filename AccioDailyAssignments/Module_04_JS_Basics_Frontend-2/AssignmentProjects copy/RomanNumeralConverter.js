// !! First understand this code !! 
// Roman Numeral Converter
// https://course.acciojob.com/open-web-editor?question=56eef07b-42a2-48ef-8ba5-e5a2e545a227
function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['CM', 900],
        2: ['D', 500],
        3: ['CD', 400],
        4: ['C', 100],
        5: ['XC', 90],
        6: ['L', 50],
        7: ['XL', 40],
        8: ['X', 10],
        9: ['IX', 9],
        10: ['V', 5],
        11: ['IV', 4],
        12: ['I', 1]
    };

    // Initialize the result as an empty string
    let result = '';

    // Iterate through the object and build the Roman numeral
    for (let i = 0; i <= 12; i++) {
        let symbol = obj[i][0];
        let value = obj[i][1];

        // Append the symbol to the result while num is greater than or equal to the value
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example usage:
console.log(convertToRoman(36));   // Output: XXXVI
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII

// do not edit below this line
module.exports = convertToRoman;


// do not edit below this line
// module.exports = convertToRoman;