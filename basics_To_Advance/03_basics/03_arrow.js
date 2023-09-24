
const user = {
    username: "bhavesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}
// user.welcomeMessage() // bhavesh , welcome to website
// user.username = "sam"
// user.welcomeMessage()

// Note: The output of the "this" keyword will be different in the web browser console 
// console.log(this); // {} 

/*
function chai(){
    let username = "bhavesh"
    console.log(this.username);
} 
*/

// chai() // undefined

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// Arrow functions

const chai = () => {
    let username = "bhavesh"
    console.log(this);
}

// chai() // {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"bhavesh"})
// console.log(addTwo(3,5));



const myArray = [2, 5, 3, 7, 8]

myArray.forEach( (element) => console.log(element) )