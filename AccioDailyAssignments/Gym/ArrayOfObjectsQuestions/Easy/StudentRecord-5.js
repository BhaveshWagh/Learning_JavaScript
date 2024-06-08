// Student Records - 5
// https://course.acciojob.com/idle?question=7254da76-885a-4e17-9f8a-75b497fe58e8
function StudentRecords(Data){
   const filteredData = Data.filter(student => student.marks > 50)
 return filteredName = filteredData.map(studentName => studentName.name)
}

const rl = require('readline')


const reader = rl.createInterface({
 input: process.stdin,
 output: process.stdout
})


reader.on('line', (line) => {
 let str=line
str = str.replace(/\\/g, '');
const A=JSON.parse(str)

console.log(StudentRecords(A))

})


