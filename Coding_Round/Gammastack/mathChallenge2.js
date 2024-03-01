// GameChallenge(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board. The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging from 1 to 8. Your program should determine the number of spaces the knight can move to from a given location. For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces from position x=4 and y=5.
// Examples
// Input: "(1 1)"
// Output: 2 

function GameChallenge(str) {
    // Extract x and y coordinates from the input string
    var match = str.match(/\((\d) (\d)\)/);
    console.log(match)
    var x = parseInt(match[1]);
    var y = parseInt(match[2]);
  
    // Define possible moves for the knight
    var possibleMoves = [
      [x - 1, y - 2], [x - 2, y - 1],
      [x - 2, y + 1], [x - 1, y + 2],
      [x + 1, y - 2], [x + 2, y - 1],
      [x + 2, y + 1], [x + 1, y + 2]
    ];
  
    // Count valid moves within the chessboard boundaries
    var varOcg = possibleMoves.filter(move => move[0] >= 1 && move[0] <= 8 && move[1] >= 1 && move[1] <= 8).length;
  
    return varOcg;
  }
  
  // Example usage:
  var inputString = "(4 5)";
  var output = GameChallenge(inputString);
  console.log(output);  // Output: 8
  



