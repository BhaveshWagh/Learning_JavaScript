/**
 * Four friends are in a mystery room and they aim to get out of the mystery room by cracking the final trail. The mystery room is divided into four chambers and each chamber will have two boxes storing balls. Now if both the boxes have blue balls, it must belong to chamber 1. Similarly if the first box has red balls and second box has blue balls, they must belong to chamber 2. If both the boxes have red balls, they must belong to chamber 3. Finally if the first box has blue balls and second box has red balls, it must belong to chamber 4.

You are given number of balls in each box and if the number has a negative sign it means the balls are red else the balls are blue if the sign is positive. Determine the chamber the two boxes belong to given the number and type of balls in each box.

Note: Assume there will always be non-zero number of balls in each box.
Input
The input consists of two lines.
The first line of input denotes the number and type of balls in the first box.
The second line of input denotes the number and type of balls in the second box.
Output
Output the chamber number (1, 2, 3 or 4) for the given count of balls in each box.

*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (x) => {
  rl.on("line", (y) => {
    //write code here
    if (x > 0 && y > 0) {
      console.log("1");
    } else if (x < 0 && y > 0) {
      console.log("2");
    } else if (x < 0 && y < 0) {
      console.log("3");
    } else if (x > 0 && y < 0) {
      console.log("4");
    }

    rl.close();
  });
});
