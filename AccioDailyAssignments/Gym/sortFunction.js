// sort()

// let arr = ["mango", "apple", "gauava", "banana", "lichi", "cherry"]

// arr.sort()

// let arr = [10,12] // ["1", "10", "2"]

// arr.sort((a,b)=>b-a)

// // + ve means interchange
// // - ve means no interchange

// console.log(arr);

// let items = [
//     { name: "Banana", price: 50 }, // a
//     { name: "Apple", price: 20 }, // b
//     { name: "Orange", price: 30 }
// ];

// // sort it according to price in ascending order

// items.sort((a,b) =>  a.price - b.price)

// console.log(items);

// let employees = [
//         { name: "Hannah", department: "Finance" },
//         { name: "Sarah", department: "IT" },
//         { name: "Zryan", department: "Finance" },
//         { name: "Mike", department: "IT" },
//         { name: "Yshley", department: "Finance" },
//         { name: "Jeff", department: "IT" }
// ];

// sort it in asceding order based on department
// if department is same sort in descending order based on name
// employees.sort((a,b) =>{
//     if(a.department > b.department){
//          return 1
//     }
//     else if(a.department < b.department){
//         return -1
//     }
//     else if(a.department == b.department){
//           if(a.name > b.name){
//                  return -1
//           }
//           else if(a.name < b.name){
//               return  1
//           }
//     }
// })

// console.log(employees);

let books = [
  { title: "Book B", author: { firstName: "John", lastName: "Doe" } },
  { title: "Book A", author: { firstName: "Jane", lastName: "Doe" } },
  { title: "Book C", author: { firstName: "Alice", lastName: "Johnson" } },
  { title: "Book D", author: { firstName: "Mike", lastName: "Smith" } },
];

// sort it in  descending order based on author's last name
// if last name is same,  sort in ascending order based on author's first name

books.sort((a, b) => {
  if (a.author.lastName > b.author.lastName) {
    return -1;
  } else if (a.author.lastName < b.author.lastName) {
    return 1;
  }
  if (a.author.firstName > b.author.firstName) {
    return 1;
  } else if (a.author.firstName < b.author.firstName) {
    return -1;
  }
});

console.log(books);
