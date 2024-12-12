function count(str) {
  // your code here
  let maxCount = 0;
  let freq = {};

  for (let char of str) {
    // freq[char] = (freq[char] || 0) + 1
    if (freq[char]) freq[char] += 1;
    else freq[char] = 1;
    //  maxCount = Math.max(maxCount, freq[char]);
    if (freq[char] > maxCount) maxCount = freq[char];
  }
  // find all characters with maximum frequency'
  let result = [];
  for (let char in freq) {
    if (freq[char] === maxCount) {
      result.push(char);
    }
  }
  return result.length === 1 ? result[0] : result;
}

console.log(count("abbccc")); // 'c'
console.log(count("abbcccddd")); // ['c', 'd']
