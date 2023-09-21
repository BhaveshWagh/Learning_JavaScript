// Scope 
// var c = 300
let a = 200
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER", a);
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30

// console.log(a); // INNER 10 200



function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    } 
    // console.log(website);
    two()
}
// one()

// So here, the child function can access the variable of the parent function  

if(true){
    const username = "bhavesh"
    if(username === "bhavesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++ interesting +++++++++++++++++++++++

// console.log(addone(5)) // 6
function addone(num){
    return num + 1
}
// Hoisting
addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}