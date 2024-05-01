// GFG special Matrix Problem unsolved 
function aMaze(n, m, blocked_cells) {
  const MOD = 1000000007;
  // 1. fill array with 0
  const newArr = new Array(n);
  for (let i = 0; i < n; i++) {
    newArr[i] = new Array(m).fill(0);
  }

  // fill blocked cells

  for (let i = 0; i < blocked_cells.length; i++) {
    const cell = blocked_cells[i];
    const r = cell[0];
    const c = cell[1];
    newArr[r - 1][c - 1] = -1;
  }
  // for right move
  for (let i = 0; i < n; i++) {
    // Stop when encountering blocked cell
    if (newArr[i][0] === -1) break;
    //  Mark reachable cells in the first column as 1
    newArr[i][0] = 1;
  }
  // for down move
  for (let j = 0; j < m; j++) {
    // Stop when encountering blocked cell
    if (newArr[0][j] === -1) break;
    //  Mark reachable cells in the first column as 1
    newArr[0][j] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (newArr[i][j] !== -1) {
        newArr[i][j] = 0;
        if (newArr[i - 1][j] !== -1) newArr[i][j] += newArr[i - 1][j] % MOD;
        if (newArr[i][j - 1] !== -1) newArr[i][j] += newArr[i][j - 1] % MOD;
      }
    }
  }
  const result = newArr[n - 1][m - 1] % MOD;
  if (result === -1) {
    return 0;
  } else {
    return result;
  }
}

const n = 3;
const m = 3;
const k = 2;

const blocked_cells = [
  [1, 3],
  [3, 2],
];
const res = aMaze(n, m, blocked_cells);
console.log(res);
