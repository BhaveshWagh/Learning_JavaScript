// Write a function named printPay that computes and prints the amount of money an employee should earn. Your function accepts two parameters: anumber for the employee's hourly salary, and an integer for the number of hours the employee worked. Every hour over 8 is paid at 1.5x the normal salary. For example, the call of printPay(10.00, 11) should print the following output:

// Hours worked: 11
// Pay earned: $125.00
// You may assume that the value passed for the salary and hours are non-negative.

// Use the console.log() function to print each line of output and n.toFixed(2) to get a string of a number n to the precision of one decimal point. For example, if n is 1.2345, n.toFixed(2) would return "1.23"

function printPay(hourlySalary, hoursWorked) {
    if (hoursWorked === 0) {
      let salary = 0
      console.log(`Hours worked: ${hoursWorked}`);
      console.log(`Pay earned: $${salary.toFixed(2)}`);
    }
    else if(hoursWorked > 8){
      const regularHours = 8;
    const overTimeHours = hoursWorked - regularHours;
  
    const regularPay = regularHours * hourlySalary;
    const overTimePay = overTimeHours * (hourlySalary * 1.5);
  
    const finalPay = regularPay + overTimePay;
  
    console.log(`Hours worked: ${hoursWorked}`);
    console.log(`Pay earned: $${finalPay.toFixed(2)}`)
    }
    else {
      const regularPay = hourlySalary * hoursWorked
      console.log(`Hours worked: ${hoursWorked}`);
    console.log(`Pay earned: $${regularPay.toFixed(2)}`)
    }
  }
  
  printPay(5.5, 3);
  printPay(5.5, 0);
  