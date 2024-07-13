// 2nd question is do you know .bind method, if yes demonstrate .bind method
// =>  .bind method : returns a new function that is invoked later means I show you an coding example
// object creation
const person = {
    firstname:"Bhavesh",
    lastname:"Wagh",
    age:22
} 

const getFullName = function(param){
    console.log(`Hello, ${this.firstname} ${this.lastname} from ${param} `)
}
Function.prototype.myBind = function(...args){ //Function.prototype gices access mybind to every function
    let getData = this //this is pointing to getFullName. obj is equal to getFullName fn

    let params = args.slice(1) // slicing parameters from this.(name object)

    return function (){
        getData.apply(args[0],params) //args[0] contains name(this keyword to object)

    }
}

const callBind = getFullName.myBind(person, "Dhule")
callBind()
