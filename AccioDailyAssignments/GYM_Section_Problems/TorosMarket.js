

// function supermarketTotalCost(N, K, prices) {
//     // Sort the prices array in ascending order
//     prices.sort((a, b) => a - b);

//     // Ignore the 2 cheapest items
//     prices = prices.slice(2);
//     console.log(prices)

//     // Take the next K items
//     const selectedItems = prices.slice(0, K);
//     console.log(selectedItems)

//     // Calculate the total cost of selected items
//     const totalCost = selectedItems.reduce((sum, price) => sum + price, 0);

//     return totalCost;
// }

// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var N;
// var K;
// readline.on("line", readInputs);

// function readInputs(line) {
//     inputArr.push(line);
//     lineNumber++;
//     if (lineNumber == 0) {
//         [N, K] = inputArr[0].split(" ").map((x) => parseInt(x));
//     }

//     if (lineNumber === 1) {
//         const prices = inputArr[1].split(" ").map(x => parseInt(x));
//         console.log(supermarketTotalCost(N, K, prices));
//         readline.close();
//     }
// }
