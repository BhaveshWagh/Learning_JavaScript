// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

function CodelandUsernameValidation(str) {

    // Efficient Solution
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g

    return str.length >= 4 && str.length <= 25 && regex.test(str)

    // Below solution is not efficient 
    // if(str.length < 4 && str.length > 25) return false

    // it checks the username starts with string
    // if(!/^[a-zA-Z]/.test(str)) return false

    // if(!/^[a-zA-Z0-9_]+$/.test(str)) return false

    // if(str.endsWith('_')) return false
    
    // return true

}

console.log(CodelandUsernameValidation("u__hello_world123"))
console.log(CodelandUsernameValidation("_aa"))
console.log(CodelandUsernameValidation("aa_"))