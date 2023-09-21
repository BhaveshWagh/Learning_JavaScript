// Objects

// There are two ways to declare objects :
// singleton
// Object.create

// Object literals
// Interview Ask to def symbol and print it : follow numbering start from 1 to 3
const mysymb = Symbol("keyS1")  // 1.Symbol declare

const JsUser = {
    name:"Akshay",
    "full Name": "Akshay Mathur",
    [mysymb]:"sykey1", // 2.Interview Ask to def symbol and print it 
    age:22,
    email:"AkshayKhanna@gimmyint.com",
    location:"Dhule",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])  // another way to access objects value

// console.log(JsUser["full Name"]) 
// console.log(typeof User.mysymb) // This is not write way to access symbol
// console.log(JsUser[mysymb]) // 3.right way to access symbol


JsUser.email = "akshaymathur@gimmyint.com"

Object.freeze(JsUser) //freeze  : A frozen object can no longer be changed

JsUser.email = "akshaymuthupandey@gimmyint.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



JsUser.greeting = function(){
    console.log("Hello Object user");
}

JsUser.greetingOne = function(){
    console.log(` Hello ${this.name}`);
}

// console.log(User.greeting);
// console.log(greetingToUser);
// console.log(User.greetingone);