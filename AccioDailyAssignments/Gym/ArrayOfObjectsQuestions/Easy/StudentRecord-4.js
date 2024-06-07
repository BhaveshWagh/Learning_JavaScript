function StudentRecords(Data){
    // return using return keyword
   // do not conole.log here  
  const filteredStudents = Data.filter(student => student.marks > 50 && student.id > 120);
    
    // Sum the marks of the filtered students
    const totalMarks = filteredStudents.reduce((sum, student) => sum + student.marks, 0);
    
    return totalMarks;
   }
  
  /*Do not change the code below*/
  
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
   
   
  