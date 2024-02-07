
function flipCoinThreeHeads() {
    let consecutiveHeads = 0;
    let max = 1
    let min = 0

    while (consecutiveHeads < 3) {
        // Simulate a coin flip (0 for tails, 1 for heads)
        const result = Math.floor(Math.random() * (max - min)) + min < 5 ? 'H' : 'T' 
        
        // const result = Math.random() < 0.5 ? 'T' : 'H';

        // Display the result
        process.stdout.write(result + ' ');

        // Reset consecutiveHeads if tails, otherwise increment it
        consecutiveHeads = result === 'H' ? consecutiveHeads + 1 : 0;
    }

    console.log('\nThree heads in a row!');
}

// Call the function
flipCoinThreeHeads();



function flipCoinThreeHeads1() {
    let consecutiveHeads = 0;

    while (consecutiveHeads < 3) {
        // Simulate a coin flip (0 for tails, 1 for heads)
        const result = Math.random() < 0.5 ? 'T' : 'H';

        // Display the result
        process.stdout.write(result + ' ');

        // Reset consecutiveHeads if tails, otherwise increment it
        consecutiveHeads = result === 'H' ? consecutiveHeads + 1 : 0;
    }

    console.log('\nThree heads in a row!');
}

// Call the function
// flipCoinThreeHeads1();