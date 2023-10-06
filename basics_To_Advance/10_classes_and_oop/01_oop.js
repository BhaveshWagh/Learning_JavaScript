const user = {
    userName :"bhavesh",
    loginCoune : 4,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.userName}`)
        console.log(this)
    }
}

// console.log(user.userName)
// console.log(user.getUserDetails());
// user.getUserDetails()
// console.log(this); // {}


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);