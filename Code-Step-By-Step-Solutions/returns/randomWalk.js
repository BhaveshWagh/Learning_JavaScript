// Write a function named randomWalk that simulates a 1-dimensional "random walk" algorithm. A random walk is where an integer value is repeatedly increased or decreased by 1 randomly many times until it hits some threshold. Your function should accept the integer threshold as a parameter, then start an integer at 0 and adjust it by +1 or -1 repeatedly until its value reaches positive or negative threshold. For example, if the call of randomWalk(3) is made, your function would randomly walk until it hits 3 or -3. Each time the value is adjusted, it is printed in the format shown. When you have reached the threshold, report the number of steps that were taken from the starting point of 0, as well as the maximum position that was reached during the walk. (If the walk ever reaches positive threshold, that is the maximum position.)

// The log below shows the console output from an example call of randomWalk(3). You should match the output format below exactly, though the numbers are randomly generated. Use Math.random and give an equal chance of moving by +1 and -1 on each step, and use console.log to print each line to the console. If the threshold parameter passed to your function is not greater than 0, your function should produce no output.

// Position = 0
// Position = 1
// Position = 0
// Position = -1
// Position = -2
// Position = -1
// Position = -2
// Position = -3
// Finished after 7 step(s)
// Max position = 1

function randomeWalk(num) {
    if (num <= 0) {
      return;
    }
    let position = 0;
    let steps = 0;
    let maxPosition = 0;
    while (Math.abs(position) < num) {
    
      const randomStep = Math.random() < 0.5 ? 1 : -1;
      position += randomStep;
      maxPosition = Math.max(maxPosition, Math.abs(position));
      console.log(`Position = ${position}`);
      steps++;
    }
    console.log(`Finished after ${steps} step(s)`);
    console.log(`Max position = ${maxPosition}`);
   
  }
  randomeWalk(5);
  