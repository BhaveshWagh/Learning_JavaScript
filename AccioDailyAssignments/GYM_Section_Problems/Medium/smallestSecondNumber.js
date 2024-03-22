// Take input from the user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the number of elements (N): ', numElements => {
    numElements = parseInt(numElements);
    readline.question(`Enter ${numElements} space-separated natural numbers for the array: `, inputArr => {
        const arr = inputArr.split(' ').map(Number);
        // Now you can write your logic to find the 2nd smallest element in the array here
        arr.sort((a,b) => a - b)
        console.log(arr[1])

        readline.close();
    });
});
