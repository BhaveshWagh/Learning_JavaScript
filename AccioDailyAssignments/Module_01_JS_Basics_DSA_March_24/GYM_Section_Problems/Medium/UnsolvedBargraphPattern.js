function printBarGraph(N, arr) {
    // Find the maximum value in arr to determine the maximum height of the bars
    const maxBarHeight = Math.max(...arr);

    for (let i = maxBarHeight; i >= 1; i--) {
        let row = '';
        for (let j = 0; j < N; j++) {
            if (arr[j] >= i) {
                row += '*\t'; // Add asterisk for bars with height >= current row
            } else {
                row += ' \t'; // Add space for bars with height < current row
            }
        }
        console.log(row);
    }

    // Print the x-axis
    // console.log('-'.repeat(N * 2 - 1));
    // console.log(arr.join('\t'));
}

// Specify the value of N and the array arr
const N = 5;
const arr = [1, 2, 7, 4, 5];
printBarGraph(N, arr);
