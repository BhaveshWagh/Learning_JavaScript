// Functions

function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()        //function call || function execution 
// without parenthesis Only a function name like sayMyName is a reference to the function.

// function addTwoNumber(num1,num2){
//     const result = num1 + num2
//     return console.log(result);   
// }

// addTwoNumber()  // NaN
// addTwoNumber(5)  // NaN
// addTwoNumber(5,10)  // 15
// addTwoNumber(5,"5")  // 55
// addTwoNumber(5,"a")  // 5a

// True or false are consider Boolean values : true means 1 & false means 0
// addTwoNumber(true,false)  // 1
// addTwoNumber(true,true)  // 2
// addTwoNumber(false,false)  // 0
// addTwoNumber(4,null)  // 4
// addTwoNumber(null,null)  // NaN

// its just another way
// function addTwoNumber(num1,num2){
//          const result = num1 + num2
//          return result;   
// }

// or

function addTwoNumbers(num1,num2){
    return num1 + num2;
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// console.log(addTwoNumber(10,22));

function loginUserMessage(username){
//    if(username === undefined) // just another way to write, refactore the code.
        if(!username){
    console.log("Please enter a username");
    return
   }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Dipak")) // Dipak just logged in
// console.log(loginUserMessage("")) // just logged in
// console.log(loginUserMessage()) // undefined just logged in

function calculateCartPrice(val1,val2,...num1){
    return num1 // [ 4, 3231, 332 ] 
}

// console.log(calculateCartPrice(222,22,4,3231,332));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) // Username is hitesh and price is 199

handleObject({
    username:"sunny",
    price:999
}) // Username is sunny and price is 999

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // 200
console.log(returnSecondValue([300,400,2332,13])); // 400

