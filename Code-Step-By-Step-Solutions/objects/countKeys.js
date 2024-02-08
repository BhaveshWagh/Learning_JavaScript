function countKeys(count) {
  return Object.keys(count).length;
}
counts = { i: 1, j: 2, k: 0 };
console.log(countKeys(counts));
