// // Composite Numbers
// // https://course.acciojob.com/idle?question=80db79bf-2724-4684-b35a-e13d506c7098


function removeComposites(N, arr) {
    // Helper function to check if a number is prime
    let result = [];

    for (let i = 0; i < N; i++) {
        let isComposite = false;

        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                isComposite = true;
                break;
            }
        }

        if (!isComposite || arr[i] === 1) {
            result.push(arr[i]);
        }
    }

    return result;
}

// Driver code using readline interface
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (N) => {
    readline.question('', (arr) => {
        N = parseInt(N);
        arr = arr.split(' ').map(Number);
        console.log(removeComposites(N, arr).join(' '));
        readline.close();
    })
});
