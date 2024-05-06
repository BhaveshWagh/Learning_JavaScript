const obj = {};
const arr = [1, 1, 2, 2, 1, 3, 4, 5];

for (let item of arr) {
  if (obj[item]) {
    obj[item] += 1;
  } else {
    obj[item] = 1;
  }
}
console.log(obj);
