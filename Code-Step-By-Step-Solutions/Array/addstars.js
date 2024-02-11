// Write a function named addStars that accepts as a parameter an array of strings, and modifies the array by placing a "*" element between elements, as well as at the start and end of the array.

// For example, if the array arr contains ["the", "quick", "brown", "fox"], the call of addStars(arr) should modify it to store ["*", "the", "*", "quick", "*", "brown", "*", "fox", "*"].

// If the array passed is empty, you should add a single "*" to the array, resulting in ["*"].
function addStars(arr) {
    if (arr.length === 0) {
      arr.push("*");
    } else {
      for (let i = arr.length ; i >= 0; i -= 1) {
        arr.splice(i, 0, "*");
        // console.log("inner",array)
      }
    }
  }
 
 
  const array = ["the", "quick", "brown", "fox"];
  
  // const array = []
  addStars(array);
  console.log(array)
  