// if (!Array.prototype.sort) {
//   Array.prototype.sort = function (compareFunction) {
//     for (let i = 0; i < this.length - 1; i++) {
//       for (let j = 0; j < this.length - i - 1; j++) {
//         if (
//           compareFunction
//         //    ? compareFunction(this[j], this[j + 1]) > 0
//             : this[j] > this[j + 1]
//         ) {
//           const temp = this[j];
//           this[j] = this[j + 1];
//           this[j + 1] = temp;
//           console.log("*",arr);
//         }
//         console.log("**",arr);
//       }
//     }
//     return this;
//   };
// }
var arr = [3, 2, 5,0, -1,4];
// Array.prototype.sort
arr.sort();
console.log(arr);
