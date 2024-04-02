/**
 * 
 * @param {
*
*       *
*       *       *
*       *       *       *
*       *       *       *       *
*       *       *       *
*       *       *
*       *
*
} rows 
 */
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*\t';
        }
        console.log(pattern);
    }

    for (let i = rows - 1; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*\t';
        }
        console.log(pattern);
    }
}

// Specify the number of rows for the pattern
const rows = 5;
printPattern(rows);
