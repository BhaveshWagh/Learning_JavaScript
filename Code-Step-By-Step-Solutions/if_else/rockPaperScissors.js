function rockPaperScissors(move1, move2) {
  if (move1.toLowerCase() === move2.toLowerCase()) {
    if (
      move1.toLowerCase() !== "rock" &&
      move1.toLowerCase() !== "paper" &&
      move1.toLowerCase() !== "scissors" &&
      move2.toLowerCase() !== "rock" &&
      move2.toLowerCase() !== "paper" &&
      move2.toLowerCase() !== "scissors"
    ) {
      console.log(`Invalid moves of ${move1} and ${move2}!`);
    } else {
      console.log("TIE!");
    }
  } else if (
    move1.toLowerCase() !== "rock" &&
    move1.toLowerCase() !== "paper" &&
    move1.toLowerCase() !== "scissors" &&
    move2.toLowerCase() !== "rock" &&
    move2.toLowerCase() !== "paper" &&
    move2.toLowerCase() !== "scissors"
  ) {
    console.log(`Invalid move of ${move1} and ${move2}!`);
  } else if (
    move1.toLowerCase() !== "rock" &&
    move1.toLowerCase() !== "paper" &&
    move1.toLowerCase() !== "scissors"
  ) {
    console.log(`Invalid move of ${move1}!`);
  } else if (
    move2.toLowerCase() !== "rock" &&
    move2.toLowerCase() !== "paper" &&
    move2.toLowerCase() !== "scissors"
  ) {
    console.log(`Invalid move of ${move2}!`);
  } else if (
    move1.toLowerCase() === "rock" &&
    move2.toLowerCase() === "scissors"
  ) {
    console.log("Player 1 wins!");
  } else if (
    move1.toLowerCase() === "scissors" &&
    move2.toLowerCase() === "rock"
  ) {
    console.log("Player 2 wins!");
  } else if (
    move1.toLowerCase() === "scissors" &&
    move2.toLowerCase() === "paper"
  ) {
    console.log("Player 1 wins!");
  } else if (
    move1.toLowerCase() === "paper" &&
    move2.toLowerCase() === "scissors"
  ) {
    console.log("Player 2 wins!");
  } else if (
    move1.toLowerCase() === "paper" &&
    move2.toLowerCase() === "rock"
  ) {
    console.log("Player 1 wins!");
  } else if (
    move1.toLowerCase() === "rock" &&
    move2.toLowerCase() === "paper"
  ) {
    console.log("Player 2 wins!");
  }
}

rockPaperScissors("sCissors", "paper");
