function maxOccurence(arr) {
  // const obj = {};
  const obj = new Object();
  let max_freq = 0;
  let max_freq_char = "";

  for (let item of arr) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] >= max_freq) {
      max_freq = obj[key];
      max_freq_char = key;
    }
  }
  console.log(`character: ${max_freq_char}, max occurence : ${max_freq} `);
  console.log(obj);
}
const arr = [1, 1, 2, 2, 1, 3, 4, 5];
const str = "Bhavesh Wagh";
maxOccurence(str);
maxOccurence(arr);
