// Student Record -2
// https://course.acciojob.com/idle?question=b325ed1d-81b1-4e4f-acd2-5e801154531f
function StudentRecords(Data) {
    //return using return method
   // do not console.log here
      return Data.filter(student => student.marks > 50)
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
  
  