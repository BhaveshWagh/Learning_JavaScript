//  const tinderUser = new Object() // This is singleton object
const tinderUser = {}  // {}  non-singleton object

tinderUser.id = "123ab"
tinderUser.name = "Jakky"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123ab', name: 'Jakky', isLoggedIn: false }

const regularUser = {
    email:"same@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname:"wagh"
        }
    }
}

// console.log(regularUser.fullname); //{ userfullname: { firstname: 'hitesh', lastname: 'wagh' } }
// console.log(regularUser.fullname.userfullname); //{ firstname: 'hitesh', lastname: 'wagh' }
// console.log(regularUser.fullname.userfullname.firstname); //{ firstname: 'hitesh'}

/* Optional Chaining:The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. */


// console.log(regularUser.fullname?.userfullname.firstname); //{ firstname: 'hitesh'}


const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

// const obj3 = {obj1, obj2} /* { obj1: { '1': 'a', '2': 'b', '3': 'c' },  obj2: { '4': 'd', '5': 'e', '6': 'f' }} */
// const obj3 = Object.assign(obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const obj3 = Object.assign({}, obj1, obj2)  // optional but it is good practice 
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123ab', 'Jakky', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123ab' ], [ 'name', 'Jakky' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// Object de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

// console.log(course.courseinstructor);

// Object de-structured
const {courseinstructor : instructor} = course 
// console.log(instructor); // hitesh

// JSON Formate

// {
//     "name" : "bhavesh",
//     "courseName" : "react",
//     "price" : "free"
// }


[
    {},
    {},
    {}
]