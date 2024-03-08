const data = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

const myLog = data.myMap((el) => el *2)
console.log(myLog)
