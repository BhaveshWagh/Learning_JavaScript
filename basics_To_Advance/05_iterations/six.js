const map1 = new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('c',3)
// console.log(map1);

const wrongMap = new Map();   // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

// console.log(wrongMap);

// console.log(wrongMap.has("bla")); // false 


const coding = ["js", "ruby", "java", "python", "cpp"]

let value = coding.forEach(function(item){
    // console.log(item);
    return item
})

// console.log(value); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (nums) => nums > 5)
// console.log(newNums);

const newNumsArr = []

myNums.forEach( (num) => {
    if(num > 4){
        newNumsArr.push(num)
    }
})

// console.log(newNumsArr);  // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === "History" )
  
userBooks = books.filter( 
    (bk) => {
        return bk.genre === "History" && bk.publish > 1986
    })  
  console.log(userBooks);

