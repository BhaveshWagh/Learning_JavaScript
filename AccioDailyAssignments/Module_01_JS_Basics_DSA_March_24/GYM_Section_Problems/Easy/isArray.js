/**Complete the function isArray which takes an input which can be any data type and returns true if it's an array else false.

Input Format
Could be any datatype string number object or an array

Output Format
true or false */
const readline = require('readline');
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
 });
 

 rl.on('line', function(line){
  if(line[0] == '[' || line [0] == '{'){
  isArray(JSON.parse(line))
  }else{
  isArray(line)
  }
  })

function isArray(input){
 // write code here
    if(Array.isArray(input)){
        console.log("TRUE")
    }else{
        console.log("FALSE")
    }
 // use console.log to print the output
 }