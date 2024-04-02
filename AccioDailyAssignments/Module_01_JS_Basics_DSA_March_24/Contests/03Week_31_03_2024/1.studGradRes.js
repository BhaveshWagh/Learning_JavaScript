// student Grade > thres then
// marks are greater than thres simply print pass if not failed

function studGradRes(marks, n, thres) {
    for (let i = 0; i < n; i++) {
      if (marks[i] > thres) {
        process.stdout.write("pass" + " ");
      } else {
        process.stdout.write("fail" + " ");
      }
    }
  }
  
  const marks = [10, 6, 7, 9, 8];
  // o/p: pass fail fail pass pass
  const n = 5;
  const thres = 7;
  
  studGradRes(marks, n, thres);
  