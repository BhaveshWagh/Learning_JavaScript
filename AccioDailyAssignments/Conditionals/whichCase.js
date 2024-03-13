const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', char => {
    // Your code here
    // char = char.trim();

    // Checking if the character is an uppercase alphabet
    if (char >= 'A' && char <= 'Z') {
      console.log(1);
    }
    // Checking if the character is a lowercase alphabet
    else if (char >= 'a' && char <= 'z') {
      console.log(0);
    }
    // If the character is not an alphabet
    else {
      console.log(-1);
    }
    readline.close();
  });
