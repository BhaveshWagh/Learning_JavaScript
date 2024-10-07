// ! using Map
// Print Counts
// https://course.acciojob.com/idle?question=5fcf3a1e-cb02-41aa-a68a-65b5ae159d1c

function PrintCharFreq(myStr) {
  const charCountMap = new Map();
  for (let char of myStr) {
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char) + 1);
    } else {
      charCountMap.set(char, 1);
    }
  }
  //we convert the map keys into array and then
  // sort that keys in ascending order.
  const sortedKeys = Array.from(charCountMap.keys()).sort();
  let result = "";
  for (let key of sortedKeys) {
    result += `${key} = ${charCountMap.get(key)}\n`;
  }
  return result.trim();
  // for(let key of sortedKeys){
  //     console.log(`${key} = ${charCountMap.get(key)}`)
  // }
}
const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  let str = line;

  //  const A = JSON.parse(str);

  console.log(PrintCharFreq(str));
});
