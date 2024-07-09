// Case-Specific Sorting
// https://course.acciojob.com/idle?question=32c8ae94-e33e-4a6e-970f-b64d979ef984
function sortCase(S) {
    // return the string
        let upperCaseChars = []
        let lowerCaseChars = []
    
        // separate the characters based on their case
    
        for (let char of S) {
            if (char >= "A" && char <= "Z") {
                upperCaseChars.push(char)
            }
            else if(char >= "a" && char <= "z")
                lowerCaseChars.push(char)
        }
    
        // sort the both arrays 
        upperCaseChars.sort()
        lowerCaseChars.sort()
    
        // now reconstruct sorted string
        let result = ""
        let upperCaseIndex = 0
        let lowerCaseIndex = 0
    
        for (let char of S) {
            if(char >= 'A' && char <= "Z"){
                result += upperCaseChars[upperCaseIndex++]
            }
            else if(char >= 'a' && char <= "z"){
                result += lowerCaseChars[lowerCaseIndex++]
            }
        }
        return result;
    }
    
    /*Do not change the code below */
    
    var readline = require("readline").createInterface(process.stdin);
    
    let inputArr = [];
    var lineNumber = -1;
    readline.on("line", readInputs);
    
    function readInputs(line) {
      inputArr.push(line);
      lineNumber++;
      if (lineNumber == 0) {
        //size = parseInt(inputArr[0].trim());
      }
      //Exit Condition
      if (lineNumber == 0) {
        logic("s");
        readline.close();
      }
    }
    
    function logic(input) {
      console.log(sortCase(inputArr[0].trim()));
    }
    