let myName = "hitesh     "
let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


Object.prototype.bhavesh = function() {
    console.log(`Bhavesh is present in all objects`)
}

Array.prototype.heyBhavesh = function(){
    console.log(`Bhavesh says hello`)
}

// heroPower.bhavesh()
// myHeros.bhavesh()

// myHeros.heyBhavesh()
// heroPower.heyBhavesh()


// inheritance

const User = {
    name: "chai",
    email: "chai@chaipecharch.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
"Bhavesh".trueLength()