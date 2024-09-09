// Anagram Strings
// https://course.acciojob.com/idle?question=355be88d-024b-45a4-babd-fd26ea66df81
const AnagramStrings = (N, StringArray, Q, queries) => {
  // do not return
  // console.log here
  // Create a hashmap to store sorted strings as keys and their anagrams as values
  const anagramMap = new Map();

  // Populate the hashmap with the input strings
  for (const str of StringArray) {
    const sortedStr = str.split("").sort().join("");
    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, []);
    }
    anagramMap.get(sortedStr).push(str);
  }

  // For each query, find the anagrams
  for (const query of queries) {
    const sortedQuery = query.split("").sort().join("");
    if (anagramMap.has(sortedQuery)) {
      const anagrams = anagramMap.get(sortedQuery);
      console.log(anagrams.sort().join(" "));
    } else {
      console.log("-1");
    }
  }
};

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var query = 100000;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber === 2) {
    query = parseInt(inputArr[2]);
  }

  if (lineNumber === 2 + query) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  const StrArray = inputArr[1].split(" ");
  const q = query;
  inputArr.shift();
  inputArr.shift();
  inputArr.shift();

  //console.log(N,StrArray,q,inputArr);

  AnagramStrings(N, StrArray, q, inputArr);
}
