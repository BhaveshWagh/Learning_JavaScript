// Asked In Machine Coding Round
function toGetSortedString(str) {
  let removeSpaces = str.toLowerCase().split(" ").join("");
  let uniq = "";
  for (let i = 0; i < removeSpaces.length; i++) {
    if (uniq.includes(removeSpaces[i]) === false) {
      uniq += removeSpaces[i];
    }
  }
  if (uniq.length === 26) {
    return true;
  } else {
    return false;
  }
}

//   const str = "The quick brown fox jumps over the lazy dog"
const str = "abc de fg h ijk lm n opq rs tu v x yz";
console.log(toGetSortedString(str));
