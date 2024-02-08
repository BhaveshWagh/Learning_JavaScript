function rollTwoDice(num) {
    while (true) {
      let die1 = Math.floor(Math.random() * 6) + 1;
      let die2 = Math.floor(Math.random() * 6) + 1;
      const sum = die1 + die2;
      console.log(`${die1} and ${die2} = ${sum}`);
      if (sum === num) {
        break;
      }
    }
  }
  
  rollTwoDice(9);