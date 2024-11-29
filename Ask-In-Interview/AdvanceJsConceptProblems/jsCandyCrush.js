//JS Candy Crush
// https://course.acciojob.com/idle?question=3da5e143-e553-4b7a-813f-880423c91b2a
const findCost = (N) => {
  // write code here
  // do not console.log the answer
  // return the answer as a number

  let totalCost = 0;
  let group = 1;
  while (N > 0) {
    let G = Math.ceil(N / 3); // Number of groups
    // console.log("group" +group +" -> "+ G)
    group++;
    totalCost += G * G; // Cost incurred in this step
    // console.log("Total cost ->",totalCost)
    N -= G; // Reduce the number of candies by G
    // console.log("Reduce the number of candies by G",N)
  }

  return totalCost;
};

console.log(findCost(8));
