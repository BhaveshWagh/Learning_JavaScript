// Divisibility Test
// https://course.acciojob.com/idle?question=830d4edd-5dcf-450b-8bd9-6d305b01e3c7
const readline = require('readline');

function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= 10; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (userInput) => {
    const n = parseInt(userInput);

    // Ensure the input is a valid number
    if (!isNaN(n)) {
        const result = countDivisors(n);
        console.log(result);
    } else {
        console.log();
    }

    rl.close();
});
