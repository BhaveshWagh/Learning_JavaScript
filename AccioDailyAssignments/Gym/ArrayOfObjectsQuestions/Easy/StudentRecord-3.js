// Student Records - 3
// https://course.acciojob.com/idle?question=97ed6325-976e-4ede-9f9e-78ec82626b7d
const rl = require('readline');

const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  try {
    let str = line;
    str = str.replace(/\\/g, '');
    const data = JSON.parse(str);
    console.log(StudentRecords(data));
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});
function StudentRecords(Data) {
    return Data.filter(student => student.marks > 50 && student.id > 120)
}