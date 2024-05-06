// your code here
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let strings = [];

rl.question('', (n) => {
    
    let count = 0;

    rl.on('line', (input) => {
        strings.push(input.trim());
        count++;

        if (count === n) {
            rl.close();
            printMinLengthString(strings);
        }
    });
});

function printMinLengthString(strings) {
    let minLength = Infinity;
    let minString = '';

    for (let str of strings) {
        if (str.length < minLength) {
            minLength = str.length;
            minString = str;
        }
    }

    console.log(minString);
}

