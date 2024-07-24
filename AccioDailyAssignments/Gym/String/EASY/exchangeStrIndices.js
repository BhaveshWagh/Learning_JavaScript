const str = "abcd";

const indices = [4,1,2,0,3]

const arr = new Array(indices.length).fill('')

for(let i = 0; i <str.length; i++){
  const pos = indices[i];
  arr[pos] = str[i];a
}
console.log(arr.join(''))