const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Prompt the user with readline without a message
rl.question('', function(userInput) {
// Display the user input
for(let i = 1; i <= userInput; i++){
    process.stdout.write(i + " ")
}

// Close the readline interface
rl.close();
});
