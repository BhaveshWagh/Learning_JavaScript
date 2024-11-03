function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMult(n) {
  let multiple = 1;
  for (let i = 1; i <= n; i++) {
    multiple = lcm(multiple, i);
  }
  return multiple;
}

console.log(smallestMult(20));
