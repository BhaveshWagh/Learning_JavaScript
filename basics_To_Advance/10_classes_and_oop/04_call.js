function SetUserName(username){
    // DB calls
    this.username = username
    console.log("setUserName called")
}

function createUser(username, email, password){
    SetUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai', "chai@fb.com","12345") 
console.log(chai)


// createUser('chai', "chai@fb.com","12345") // undefined
// console.log(createUser('chai', "chai@fb.com","12345"))