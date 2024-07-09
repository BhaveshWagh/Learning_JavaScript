// ! shallow copy and deep copy 08 july 2024

// const studentObj = {
  // name : "Akshay",
  // rollNo : 44,
//   city: "pune",
//   phone: 3214343,
//   result: "pass",
//   class: 9
// }

// // shallow copy created using spread operator
// const newObj = {...studentObj}

// newObj.name = "bhavesh"
// console.log(newObj.name) // bhavesh
// console.log(studentObj.name) // Akshay



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     city: "New York"
// };

// // shallow copy created using Object.assign({},objectName) 
// // const newObj = Object.assign({jobId:"1234"},person)
// const newObj = JSON.parse
// console.log(newObj.firstName)
// console.log(newObj.jobId)
// // console.log(newObj.jobId))

// newObj.lastName = "smith" 

// console.log(person.lastName) // Doe
// console.log(newObj.lastName) // smith



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     city: "New York"
// };

// // Deep copy created using Object.assign({},objectName) 

// const newObj = JSON.parse(JSON.stringify(person,{}))

// newObj.age = 25
// console.log(newObj.jobId)
// console.log(newObj.age) // 25
// console.log(person.age) // 30


const personDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address:{
    city: "New York",
    zip:34223,
    landMark: {
      nearTothe:"wdc college"
    }
}
}

const newObj = {...personDetails}
newObj.firstName = "James"
console.log(newObj.firstName) // James
console.log(personDetails.firstName) // John

newObj.address.city = "Delhi"
console.log(newObj.address.city) // 
console.log(personDetails.address.city)



