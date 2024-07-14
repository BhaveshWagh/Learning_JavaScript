// Find Path
// https://course.acciojob.com/idle?question=389d27cb-84d1-4906-b53f-64e359e1d93c
function findPath(obj, path){
    if (!path) return undefined; // Handle empty path edge case
  const keys = path.split('.'); // Split the path into keys  keys ==> [ 'a', 'b', 'c' ]

  let current = obj;
  
  for (let key of keys) {
    console.log("**",current[key])
    if (current[key] === undefined) {
      return undefined;
    }
    current = current[key];
  }
  
  return current;
}

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

console.log(findPath(obj, 'a.b.c'));       // Output: 12
console.log(findPath(obj, 'a.b'));         // Output: {c: 12, j: false}
console.log(findPath(obj, 'a.b.d'));       // Output: undefined
console.log(findPath(obj, 'a.c'));         // Output: undefined
console.log(findPath(obj, 'a.b.c.d'));     // Output: undefined
console.log(findPath(obj, 'a.b.c.d.e'));   // Output: undefined
console.log(findPath(obj, 'a.b.j'));       // Output: false
console.log(findPath(obj, 'a.b.j.k'));     // Output: undefined
console.log(findPath(obj, 'a.k'));         // Output: null