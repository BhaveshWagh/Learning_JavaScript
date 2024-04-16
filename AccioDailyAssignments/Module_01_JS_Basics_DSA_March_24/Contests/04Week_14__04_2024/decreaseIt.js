function decreaseIt(arr, n) {
  const freq = {};
  let totalCoins = 0;
  for (let num of arr) {
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      let coinsNeeded = 0;
      while (freq[num]) {
        num--;

        coinsNeeded++;
      }
      freq[num] = 1;
      totalCoins += coinsNeeded;
    }
  }
  return totalCoins;
}

const arr = [1, 1, 1];
const n = 3;
const res = decreaseIt(arr, n);
console.log(res);
