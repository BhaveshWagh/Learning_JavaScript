// Dates

// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Sat Sep 16 2023 14:09:21 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Sep 16 2023
// console.log(myDate.toLocaleString()); // 9/16/2023, 2:10:16 PM
// console.log(typeof myDate); // object

// let myCreateDate = new Date(2023,0,12)  // 2023-01-11T18:30:00.000Z
// let myCreateDate = new Date(2023,0,24,5,3) // 2023-01-23T23:33:00.000Z

// let myCreateDate = new Date("2023-01-14") // 2023-01-14 T00:00:00.000Z

let myCreateDate = new Date("01-04-2023") 
// console.log(myCreateDate.toLocaleString()) // 1/4/2023, 12:00:00 AM
// console.log(myCreateDate.toLocaleDateString()) // 1/4/2023


let myTimeStamp = Date.now()
// console.log(myTimeStamp) // 1694854074121 ms
// console.log(myCreateDate.getTime()) //1672770600000 ms
// console.log(Math.floor(Date.now()/1000)) //1694854248


let newDate = new Date()
// console.log(newDate) //2023-09-16T08:52:50.713Z
// console.log(newDate.getDay()) // 6
// console.log(newDate.getFullYear()) // 2023
// console.log(newDate.getMonth() + 1)
 /* get month start from 0 so add 
1 to display current month*/


// `${newDate().getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:"long",
})


console.log(newDate)


