function countUniqueCharacters(s) {
  // return the count
  let seenElemets = {};

  for (let char of s) {
    if (!seenElemets[char]) {
      seenElemets[char] = true;
    }
  }
  return Object.keys(seenElemets).length
  // do not console.log here
}

console.log(countUniqueCharacters("acciojobs"))
// function filterBands(arr, genre) {
//   //  return arr.filter(band => band.genre === genre)
//   //  return arr.filter(band => band.genre === genre) // [true, false, true]
//   return arr.map((band) => console.log(band)); //{ name: 'Band 1', genre: 'Rock' } { name: 'Band 2', genre: 'Pop' },{ name: 'Band 3', genre: 'Rock' }
// }

// const arr = [
//   { name: "Band 1", genre: "Rock" },
//   { name: "Band 2", genre: "Pop" },
//   { name: "Band 3", genre: "Rock" },
// ];
// const genre = "Rock";
// console.log(filterBands(arr, genre));
// const filteredArr = filterBands(arr,genre)

// function countVotes(votes) {
//     const voterIds = new Map();
//     const partyVotes = new Map();

//     for (const [voterId, party] of votes) {
//       if (!voterIds.has(voterId)) {
//         voterIds.set(voterId, party);
//         partyVotes.set(party, (partyVotes.get(party) || 0) + 1);
//       }
//     }

//     let maxVotes = 0;
//     for (const [party, votes] of partyVotes) {
//       if (votes > maxVotes) {
//         maxVotes = votes;
//       }
//     }

//     const winningParties = [];
//     for (const [party, votes] of partyVotes) {
//       if (votes === maxVotes) {
//         winningParties.push(party);
//       }
//     }

//     winningParties.sort().forEach(party => process.stdout.write(`${party} ${maxVotes}\n`));
//   }

// !! understand this code first then remove it
// function getUniqueCategories(exhibits) {
//     // Initialize an object to store unique categories as keys
//     const uniqueCategories = {};

//     // Iterate through each exhibit
//     for (let i = 0; i < exhibits.length; i++) {
//         // Use the category as a key in the object
//         uniqueCategories[exhibits[i][1]] = true;
//     }

//     // Extract the keys of the object to get the unique categories
//     return Object.keys(uniqueCategories);
// }

// // Example usage:
// const exhibits = [
//     ["Exhibit 1", "Category 1"],
//     ["Exhibit 2", "Category 2"],
//     ["Exhibit 3", "Category 3"],
//     ["Exhibit 4", "Category 3"]
// ];

// console.log(getUniqueCategories(exhibits));

// Output: [ 'Category 1', 'Category 2', 'Category 3' ]

// !! understand this code first then remove it
// function indexOfIgnoreCase(str, subStr) {
//     const strLower = str.toLowerCase();
//     const subStrLower = subStr.toLowerCase();

//     if (subStrLower === "") {
//         return 0; // Empty substring is always found at index 0
//     }

//     for (let i = 0; i <= str.length - subStr.length; i++) {
//         if (strLower.substring(i, i + subStr.length) === subStrLower) {
//             return i;
//         }
//     }

//     return -1; // substring not found
// }
// console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
// console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
// console.log(indexOfIgnoreCase("test", "aaa")); // Output: -1
