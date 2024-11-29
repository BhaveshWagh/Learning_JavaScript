let arr = [
  { id: 1, age: 12, name: "Manu" },
  { id: 2, age: 24, name: "Quincy" },
  { id: 3, age: 22, name: "Abbey" },
];

// The .map() method
// The .map() methods iterates over an array, computes whatever logic you write inside the map body, and returns a NEW array.

const names = arr.map((item)=>item.name)
console.log(names) // ['Manu', 'Quincy', 'Abbey']

// The .forEach() method
// ForEach is similar to .map() but it DOES NOT return an array.
let arr0 = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]
arr0.forEach((el) => el.age+=10);
console.log(arr0);

// Output: 22 32 44

// The .filter() method
// The filter method, as the name suggests, helps in filtering out the values inside of an array based on a Boolean condition.

// If the boolean condition is true, the result will be returned and added in the final array. If not, it will be skipped. Filter also returns an array, just like the .map() method.
let arr1 = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let tooYoung = arr1.filter((el)=> el.age <= 14)
console.log(tooYoung)

// The .reduce() method
// In simple terms, the .reduce() method takes into account a previous value , current value and an accumulator.

// The return type of the .reduce() method is always a single value. It is useful when you want to process all the values of the array and want to derive some accumulated result.


let arr2 = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let totalAge = arr.reduce((acc,curr) => acc + curr.age,0)
console.log(totalAge)