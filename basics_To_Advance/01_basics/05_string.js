const name = "Daniyal";
const repoCount = 20;

// old way
// console.log(name + repoCount + " value")

// New Way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('bhavesh-tgr-com')
// console.log(gameName)  //[String: 'bhavesh-tgr-com']
// console.log(gameName.toString()) // bhavesh-tgr-com

// console.log(gameName[0]); // b
// console.log(gameName.__proto__) // {}

// console.log(gameName.length) // 15
// console.log(gameName.toUpperCase()) // BHAVESH-TGR-COM


// console.log(gameName.replace("-"," ")) //bhavesh tgr-com
// console.log(gameName.charAt(3)) // v
// console.log(gameName.indexOf('s'))  // 5

// const newString = gameName.substring(0,7) //bhavesh

// console.log(newString)  //bhavesh

// const anotherString = gameName.slice(-8,2)
// console.log(anotherString)
// Daniyal except last one : -1
// console.log("**",name.slice(-5,-3)); //ni


const newStringOne = "   Dhanesh    " 
// console.log(newStringOne); //    Dhanesh    
// console.log(newStringOne.trim()); // Dhanesh

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

// console.log(url.includes('sundar')) // false

// console.log(gameName.split('-')); //['bhavesh', 'tgr', 'com']