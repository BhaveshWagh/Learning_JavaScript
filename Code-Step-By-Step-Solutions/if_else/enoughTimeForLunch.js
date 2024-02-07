function enoughTimeForLunch(hour1, minute1, hour2, minute2) {
    // Convert hours into minutes
    let hour1_to_min = hour1 * 60 + minute1;
    let hour2_to_min = hour2 * 60 + minute2;
  
    let time = hour2_to_min - hour1_to_min;
  
    if (time >= 45 && hour2_to_min > hour1_to_min) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(enoughTimeForLunch(11, 00, 11, 59));
  console.log(enoughTimeForLunch(12, 30, 13, 00)); // false
  console.log(enoughTimeForLunch(12, 30, 13, 15)); // true
  console.log(enoughTimeForLunch(14, 20, 17, 02)); // true
  console.log(enoughTimeForLunch(12, 30, 9, 30)); // false
  console.log(enoughTimeForLunch(12, 00, 11, 55)); // false
  