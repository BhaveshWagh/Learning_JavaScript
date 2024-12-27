function findMax(obj) {
  let maxKey = null;
  let maxValue = -Infinity;

  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      // console.log(key, obj[key])
      maxKey = key;
    }
  }

  return [maxKey, maxValue];
}

const scores = { Alice: 85, Bob: 92, Charlie: 88 };
console.log(findMax(scores));
// Output: Bob
