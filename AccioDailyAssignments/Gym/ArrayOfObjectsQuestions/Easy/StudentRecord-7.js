// Student Records - 7
// https://course.acciojob.com/idle?question=b8459211-f6a2-4aa3-9cdd-485ad8daa260

function StudentRecords(Data) {
// Add grace marks where applicable and filter students based on the criteria
  const updatedStudents = Data.map(student => {
    if (student.marks < 50) {
      student.marks += 15;
    }
    return student;
  }).filter(student => student.marks > 50);

  // Sum the marks of the filtered students
  const totalMarks = updatedStudents.reduce((sum, student) => sum + student.marks, 0);
  
  return totalMarks;
}

const rl = require("readline");

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  let str = line;
  const A = JSON.parse(str.trim());

  console.log(StudentRecords(A));
});


