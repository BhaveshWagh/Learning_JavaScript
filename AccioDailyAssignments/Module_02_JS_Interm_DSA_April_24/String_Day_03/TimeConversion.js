// Time Conversion
// https://course.acciojob.com/idle?question=354f7964-86b9-4bcc-8f31-d070f1336bce
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function timeConversion(str) {
    // Write your code here
      const period = str.substring(8);
  const hour = str.substring(0, 2);
  
  // console.log(period,hour)`
  let res = "";
  if (period == "AM" && hour == "12") {
    res = "00";
  } else if (period == "AM") {
    res = hour;
  } else if (period == "PM" && hour != "12") {
    let hrInteger = parseInt(hour) + 12;
    res = res + hrInteger;
  } else {
    res = "12";
  }
  let remaining = str.substring(2, 8);
  res = res + remaining;
  console.log(res);   
  }
  
  readline.question('', s => {
    timeConversion(s);
    readline.close();
  });