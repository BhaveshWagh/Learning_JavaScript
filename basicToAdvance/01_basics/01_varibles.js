/*
The word const stands for constant. It defines a constant binding, which
points at the same value for as long as it lives.
*/ 
const accountID = 12342       

/**
 The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
 **/
let accountName = "Sanjay" 

/**
Prefer not to use var 
because of issue in block scope & functional scope
**/
let accountStatus;
console.log(accountStatus)   // O/p: undefine
var accountPassword = "san12322" 


accountEmail = "Sanjay123@gmail.com"

console.log(accountEmail)


console.table([accountID,accountName,accountPassword,accountEmail,accountStatus])