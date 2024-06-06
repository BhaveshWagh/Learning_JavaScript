// Student Records - 1
// https://course.acciojob.com/idle?question=3ca56dea-1a86-430d-bc5e-546f5f380125
function StudentRecords(Data) {
    return Data.map(student => student.name.toUpperCase());
  }
  
  
  const rl = require("readline");
  
  const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  reader.on("line", (line) => {
    let str = line;
    str = str.replace(/\\/g, "");
    const A = JSON.parse(str);
  
    console.log(StudentRecords(A));
  });
  
  