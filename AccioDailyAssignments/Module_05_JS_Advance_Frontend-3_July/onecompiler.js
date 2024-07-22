

// self Practice 22 July 24

// make an fn with  key values
// make method chaining functions
// instaniate the object
// call the method chaining
// Method chaining
// make a Method chaining of  5 functions. in each functions 
// ur printing something .call  them in a sequntial manner.

// function getRestaurant() {
//   this.restroName = "";
//   this.isOpen = "" // true / false;
//   this.openTiming = ""; 
// }

// // ! Don't use Fat Arrow functions bcz arrow function doesn't support "this";
// getRestaurant.prototype.getName = function (name) {
//   this.restroName = name;
//   return this;
// }

// getRestaurant.prototype.isOpened = function (openClose) {
//   this.isOpen = openClose;
//   return this;
// }

// getRestaurant.prototype.time = function (timing){
//   this.openTiming = timing;
//   return this;
// }


// getRestaurant.prototype.getRestaurantDetails = function () {
// console.log(`
//   ${this.restroName}
//   isOpen : ${this.isOpen}
//   ${this.openTiming}`)
//   return this;
// }

// const details = new getRestaurant()


// details.getName("Kormangla Restraunt").isOpened("YES").time("8 AM to 9 PM").isOpened("Not Now").time("Today is Holiday").getRestaurantDetails()

// An extra class 20 July 24
// !! imp: Question on method chainging Asked in following companies for FrontEnd interviews

// - Ola 
// - skype 
// - dropbox
// ! general questioner :  where we use method chaining

// Ans : When we have to call multiple functions together to make changes simultaneously

// Method chaining
// make a Method chaining of  5 functions. in each functions 
// ur printing something .call  them in a sequntial manner.

// function getDetails() {

//     this.firstName = '';
//     this.lastName = 'Kumar';
//     this.age = 14;
//     this.city = '';
// }

// getDetails.prototype.getFirstName = function (name){
//     this.firstName = name;
//     return this;
// }

// getDetails.prototype.getLastName = function (){
//     this.lastName;
//     return this;
// }

// getDetails.prototype.getAge = function (age){
//     this.age = age;
//     return this;
// }

// getDetails.prototype.getCity = function (){
//     this.city = "Mumbai";
//     return this;
// }

// getDetails.prototype.getAllDetails = function (){
//     console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.city}`)
//     return this;
// }

// let details = new getDetails()

// details.getFirstName("Akshay").getLastName().getAge(13).getCity().getAllDetails()



// Question make an object you have to use Getters to log the Array.
// and initalize a key value pairs. values as Array.
// array should consist of  7 elements, push them using setters fn, and log the last 3 elements (SubArr) of array

// demonstrate same thing inside a class based  


// const obj = {
//   arr: [],

//   get printArr() {
//     // this.arr.slice(4);
//     return this.arr.slice(this.arr.length - 3);
//   },
//   set setData(data) {
//     this.arr.push(data);
//   },
// };

// function pushData (n) {
//     for(let i = 0; i < n; i++){
//         obj.setData = i
//     }
// }
// pushData(7)


// obj.setData = 1;
// obj.setData = 2;
// obj.setData = 3;
// obj.setData = 4;
// obj.setData = 5;
// obj.setData = 6;
// obj.setData = 7;

// console.log(obj.printArr);

// class Array {
//   constructor() {
//     this.arr = [];
//   }

//   get printArr() {
//     return this.arr.slice(this.arr.length - 3);
//   }

//   set setData(data) {
//     this.arr.push(data);
//   }

//   pushData(n) {
//     for (let i = 1; i <= n; i++) {
//       this.setData = i;
//     }
//   }
// }

// const obj = new Array();
// obj.pushData(7);

// console.log(obj.printArr);


// Question
// const obj = {
//     arr : [1,2,3,4,5,6,7],
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// console.log(obj.getSubArray)

// demonstrate the same thing in a class while making an object.
// Make that setter fn inside class. and access it through object.


// class Array {
//     constructor(){
//         this.arr = [1,2,3,4,5,6,7]
//     }
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// const resultantArr = new Array()

// console.log(resultantArr.getSubArray)




// Practice Question

// const obj = {
//     arr : [1,2,3,4,5,6,7],
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// console.log(obj.getSubArray)






// 19 July 24

// Getters and setters
// Question 5 for make a class


//   stringArr : ["Hello", "Mr", "Som", "Jaina"],
  
//   get getCumulativeString(){
  
//     wholeString = ""
  
//     for(let str of this.stringArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
// }

// console.log(object.getCumulativeString)


// class LanguageClass {
//   constructor() {
//     this.log = [];
//   }

//   set current(name) {
//     this.log.push(name);
//   }
// }

// const myLanguage = new LanguageClass();
// myLanguage.current = 'EN';
// myLanguage.current = 'HN';
// myLanguage.current = 'MR';
// console.log(myLanguage.log);  // Output: ['EN']

// class Language {
//   constructor(){
//     this.arr = []
//     // this.arr = arr;
//   }
//   set setLanguages(name){
//     this.arr.push(name)
//   }
// }

// const lang1 = 

// const Language = {
//   set current(name){
//     this.log.push(name)
//   },
//   log: []
// }

// Language.current = 'EN'

// Question 4
// const Person = {
//   str1 : "I",
//   str2 : "am not",
//   str3 : "IronMan",
  
//   get fullStrings(){
//     return `${this.str1} ${this.str2} ${this.str3}`
//   },
  
//   set fullStrings(stringArr){
//     const parts = stringArr.split(' ')
//     this.str1 = parts[0];
//     this.str2 = parts[1];
//     this.str3 = parts[2];
//   }
// }

// console.log(Person.fullStrings)
// Person.fullStrings = "I am batman"
// // console.log(`${Person.str1} ${Person.str2} ${Person.str3}`)
// console.log(Person.fullStrings)

// console.log(Person.str1)
// console.log(Person.str2)
// console.log(Person.str3)

// Question 2 :
 // const object = {
//   stringArr : ["Hello", "Mr", "Som", "Jaina"],
  
//   get getCumulativeString(){
  
//     wholeString = ""
  
//     for(let str of this.stringArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
// }

// console.log(object.getCumulativeString)




// Question 3 from the above
// demonstrate  same thing in a class and call the getter by making an object of class
// class PrintString {
   
//   constructor(strArr) {
//     this.strArr = strArr;
//     // this.strArr = ["Hello", "Mr", "Som", "Jaina"];
//   }
   
//     get getCumulativeString(){
  
//     let wholeString = ""
  
//     for(let str of this.strArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
  
// }
 
// const getString = new PrintString(["Hello", "Mr", "Som", "Jaina"]) // new PrintString()
// console.log(getString.getCumulativeString)
 
 
// const object = {
//   stringArr : ["Hello", "Mr", "Som", "Jaina"],
  
//   get getCumulativeString(){
  
//     wholeString = ""
  
//     for(let str of this.stringArr){
//       wholeString += str + " "
//     }
//     return wholeString
//   }
// }

// console.log(object.getCumulativeString)



// Practice Question : make an object object of 2 key value pairs, make sure to pass values as integer. 
// make a getter method/ function. Do multiply those numbers return it and print it outside object

// const object = {
//   a : 10,
//   b : 20,
//   get getMultiplication(){
//     return this.a * this.b
//   }
// }

// console.log(object.getMultiplication)

// ! classical inheritance + static members
// Practice Question
  // parent class movie
  /**
  - Type
  - noOfSongs (put 0 if no songs are there)
  - TotalNoOfCasts(no of actors)
  - mainProtagonist means (hero name)
  - languagesDubbed
  - climaxScenes
  
  child class
  specificMovie Blueprint
  - movieName
  - relaeseDate
  - duration
  - rating
  - Hollywood/Bollywood
  
  
  you have to make 5 movies.
  and dont forgot to use "static" keyword for common properties (atleast one static property) 
  you have to think which properties are lie inside static properties
  make a static fn in specificMovie to access all the properties of movie.
  use inheritance to access properties of Movie class inside specificMovie class
  */
  
  
// class Movie {
    
//   static languagesDubbed = "Hindi, English";

//   constructor(type, noOfSongs = 0, totalNoOfCasts, mainProtagonist, climaxScenes) {
//     this.type = type;
//     this.noOfSongs = noOfSongs;
//     this.totalNoOfCasts = totalNoOfCasts;
//     this.mainProtagonist = mainProtagonist;
//     this.climaxScenes = climaxScenes;
//   }
// }


// class SpecificMovie extends Movie {
//   constructor(type, noOfSongs, totalNoOfCasts, mainProtagonist, climaxScenes, movieName, releaseDate, duration, rating, hollywoodOrBollywood) {
//     super(type, noOfSongs, totalNoOfCasts, mainProtagonist, climaxScenes);
//     this.movieName = movieName;
//     this.releaseDate = releaseDate;
//     this.duration = duration;
//     this.rating = rating;
//     this.hollywoodOrBollywood = hollywoodOrBollywood;
//   }

//   static printCommonDetails() {
//     console.log(`Languages Dubbed: ${Movie.languagesDubbed}`);
//   }

//   printMovieDetails() {
//     console.log(`Movie Name: ${this.movieName}`);
//     console.log(`Type: ${this.type}`);
//     console.log(`Number of Songs: ${this.noOfSongs}`);
//     console.log(`Total Number of Casts: ${this.totalNoOfCasts}`);
//     console.log(`Main Protagonist: ${this.mainProtagonist}`);
//     console.log(`Climax Scenes: ${this.climaxScenes}`);
//     console.log(`Release Date: ${this.releaseDate}`);
//     console.log(`Duration: ${this.duration}`);
//     console.log(`Rating: ${this.rating}`);
//     console.log(`Hollywood or Bollywood: ${this.hollywoodOrBollywood}`);
//     console.log("------------------------------------------")
//   }
// }

// // instance is created for SpecificMovie 
// const movie1 = new SpecificMovie("Feature Film", 5, 20, "Aamir Khan", "Final Battle, Resolution", "3 Idiots", "2009-12-25", "170 minutes", 8.4, "Bollywood");
// const movie2 = new SpecificMovie("Feature Film", 4, 15, "Aamir Khan", "Final Exam, Reunion", "3 Idiots", "2009-12-25", "170 minutes", 8.4, "Bollywood");
// const movie3 = new SpecificMovie("Feature Film", 6, 25, "Christian Bale", "Joker Capture, Bat Signal", "The Dark Knight", "2008-07-18", "152 minutes", 9.0, "Hollywood");
// const movie4 = new SpecificMovie("Feature Film", 3, 18, "Aamir Khan", "Wrestling Match, Victory", "Dangal", "2016-12-23", "161 minutes", 8.4, "Bollywood");
// const movie5 = new SpecificMovie("Feature Film", 5, 20, "Leonardo DiCaprio", "Final Battle, Resolution", "Inception", "2010-07-16", "148 minutes", 8.8, "Hollywood");

// // Printing common details
// SpecificMovie.printCommonDetails();

// // Printing specific movie details
// movie1.printMovieDetails();
// movie2.printMovieDetails();
// movie3.printMovieDetails();
// movie4.printMovieDetails();
// movie5.printMovieDetails();
  
  
  
// class Movie {
  
//   static languagesDubbed = "Hindi, English";
  
//   constructor(type,noOfSongs = 0,TotalNoOfCasts,mainProtagonist,climaxScenes){
//     this.type = type;
//     this.noOfSongs = noOfSongs;
//     this.TotalNoOfCasts = TotalNoOfCasts;
//     this.mainProtagonist = mainProtagonist;
//     this.climaxScenes = climaxScenes;
//   }
  
 
// }

// class specificMovie extends Movie{
//   constructor(type, noOfSongs, TotalNoOfCasts,
//   mainProtagonist, climaxScenes, movieName, relaeseDate, duration, rating, hollywoodOrBollywood){
    
//     super(type, noOfSongs, TotalNoOfCasts, mainProtagonist,climaxScenes)
  
//   this.movieName = movieName;
//   this.relaeseDate = relaeseDate;
//   this.duration = duration;
//   this.rating = rating;
//   this,hollywoodOrBollywood = hollywoodOrBollywood;
  
//   }
 
 
//   static printCommonDetails () {
//     console.log(`${Movie.type}, ${Movie.noOfSongs}, ${Movie.TotalNoOfCasts}, ${Movie.languagesDubbed}`)
//   }
  
//   printMovieDetails(){
//     console.log(`${this.movieName}, ${this.mainProtagonist}, ${this.climaxScenes}, ${this.relaeseDate}, ${this.duration}, ${this.rating}, ${this.hollywoodOrBollywood} `)
//   }
// }

// const movie1 = new specificMovie("4 Idiots", "2009-12-25", "170 minutes", 8.4, "Bollywood", "Aamir Khan");

// specificMovie.printCommonDetails()

// movie1.printMovieDetails()

// 20 July 2024



// ! Method chaining
// make a Method chaining of  5 functions. in each functions 
// ur printing something .call  them in a sequntial manner.

// function getDetails() {

//     this.firstName = '';
//     this.lastName = 'Kumar';
//     this.age = 14;
//     this.city = '';
// }

// getDetails.prototype.getFirstName = function (name){
//     this.firstName = name;
//     return this;
// }

// getDetails.prototype.getLastName = function (){
//     this.lastName;
//     return this;
// }

// getDetails.prototype.getAge = function (age){
//     this.age = age;
//     return this;
// }

// getDetails.prototype.getCity = function (){
//     this.city = "Mumbai";
//     return this;
// }

// getDetails.prototype.getAllDetails = function (){
//     console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.city}`)
//     return this;
// }

// let details = new getDetails()

// details.getFirstName("Akshay").getLastName().getAge(13).getCity().getAllDetails()




// const obj = {
//   arr: [],

//   get printArr() {
//     // this.arr.slice(4);
//     return this.arr.slice(this.arr.length - 3);
//   },
//   set setData(data) {
//     this.arr.push(data);
//   },
// };

// function pushData (n) {
//     for(let i = 0; i < n; i++){
//         obj.setData = i
//     }
// }
// pushData(7)

// // obj.setData = 1;
// // obj.setData = 2;
// // obj.setData = 3;
// // obj.setData = 4;
// // obj.setData = 5;
// // obj.setData = 6;
// // obj.setData = 7;

// console.log(obj.printArr);

// const obj = {
//     arr : [1,2,3,4,5,6,7],
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// console.log(obj.getSubArray)

// demonstrate the same thing in a class while making an object.
// Make that setter fn inside class. and access it through object.

// class Array {
//     constructor(){
//         this.arr = [1,2,3,4,5,6,7]
//     }
//     get getSubArray(){
//         return this.arr.slice(4)
//     }
// }

// const resultantArr = new Array()

// console.log(resultantArr.getSubArray)





// 19 July 24
// 
// class Vehicle {
//   constructor(tyresType, noofairBags, noofSeats, engineHorsePower, lights) {
//     this.tyresType = tyresType;
//     this.noofairBags = noofairBags;
//     this.noofSeats = noofSeats;
//     this.engineHorsePower = engineHorsePower;
//     this.lights = lights;
//   }
//   printVehicleDetails = () => {
//     console.log(
//       `${this.tyresType},${this.noofairBags},${this.noofSeats},${this.engineHorsePower},${this.lights}`
//     );
//   };
// }
// class Car extends Vehicle {
//   constructor(
//     tyresType,
//     noofairBags,
//     noofSeats,
//     EngineHorsePower,
//     lights,
//     brand,
//     typeofCar,
//     diselOrPetrol,
//     automatic,
//     sunroof,
//     color
//   ) {
//     super(tyresType, noofairBags, noofSeats, EngineHorsePower, lights);
//     this.brand = brand;
//     this.typeofCar = typeofCar;
//     this.diselOrPetrol = diselOrPetrol;
//     this.automatic = automatic;
//     this.sunroof = sunroof;
//     this.color = color;
//   }

//   printCarDetails = () => {
//     // Mistakes : you written only
//     // printVehicleDetails(); this is needed for reference
//     this.printVehicleDetails();
//     // Mistaked :in console log you miss the back ticks => ` ` for both consoles
//     console.log(
//       `${this.brand},${this.typeofCar},${this.diselOrPetrol},${this.automatic},${this.sunroof},${this.color}`
//     );
//   };
// }
// // Mistakes : Here while you instantiate a class you have to try instantiate a Vehical class not a car class
// const hondacity = new Car(
//   "Tubeless",
//   6,
//   5,
//   123,
//   "LED",
//   "15km",
//   "HondaCity",
//   "Sedan",
//   "Petrol",
//   true,
//   true,
//   "white"
// );
// const bmw = new Car(
//   "Tubeless",
//   8,
//   5,
//   300,
//   "LED",
//   "12km",
//   "BMW",
//   "SUV",
//   "diesel",
//   true,
//   true,
//   "red"
// );
// const Scorpio = new Car(
//   "Tubeless",
//   4,
//   7,
//   140,
//   "Halogen",
//   "10km",
//   "Mahindra",
//   "SUV",
//   "diesel",
//   true,
//   true,
//   "black"
// );
// const tata = new Car(
//   "Tubeless",
//   4,
//   7,
//   140,
//   "LED",
//   "10km",
//   "TATA",
//   "hatchback",
//   "diesel",
//   true,
//   true,
//   "black"
// );

// hondacity.printCarDetails();


// self practice 

// Make a class of vehical add the following properties
/**
 * - noOfAirbag - 6
 * - noOfSeats - 4
 * - isAutomatic - True/False
 * - carsType - Sedan
 */

// Make a blueprint child car add the following properties
/**
 * - brand
 * - fuelType
 * - milage
 * - price
 *
 */

// Make a custom function to print all the details of the vehical and car class

// class Vehical {
//   // Make a constructor to initialize an object
//   constructor(carsType, noOfAirbags, noOfSeats, isAutomatic) {
//     this.carsType = carsType;
//     this.noOfAirbags = noOfAirbags;
//     this.noOfSeats = noOfSeats;
//     this.isAutomatic = isAutomatic;
//   }

//   // make a custome function to print all the details of vehical clss
//   printVehicalDetails = () => {
//     console.log(
//       `${this.carsType},${this.noOfAirbags},${this.noOfSeats},${this.isAutomatic}`
//     );
//   };
// }

// // child class
// class Car extends Vehical {
//   constructor(
//     carsType,
//     noOfAirbags,
//     noOfSeats,
//     isAutomatic,
//     brand,
//     fuelType,
//     milage,
//     price
//   ) {
//     super(carsType, noOfAirbags, noOfSeats, isAutomatic);
//     this.brand = brand;
//     this.fuelType = fuelType;
//     this.milage = milage;
//     this.price = price;
//   }
//   printCarDetails = () => {
//     this.printVehicalDetails();
//     console.log(
//       `${this.brand}, ${this.fuelType}, ${this.milage} Km/l, ${this.price} Million`
//     );
//   };
// }
// const bmw = new Car("Sedan", 6, 5, true, "BMW", "Petrol", 8, 6);
// bmw.printCarDetails()

// const vehical = new  Vehical('Sedan', 6, 5, true)

// vehical.printVehicalDetails()

// 18 July 24


// Inheritance 
// Practice Question: There is a parent called Vehicle having properties:
// - tyresType(Tubles / not)
// - NoOfAirbags
// - noofseats
// - EngineHorsePower
// - lights (LED, etc)
  // +1 property of your choice here.

// there is a child called Car
// - brand, -typeOfCar(SUV, hatchback, sedan), 
// - DieselorPetrol, - Automatic, sunroof, Color
// make a method to print all the details of car 

// you have  to design 4 cars - hondaCity, BMW, Scorpio, TATA out of CAR Blueprint

// Make desired Blueprint to deign this problem

// class Vehicle {
  
//   constructor(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage){
//     this.tyresType = tyresType;
//     this.noOfAirBags = noOfAirBags;
//     this.noOfSeats = noOfSeats;
//     this.engineHorsePower = engineHorsePower;
//     this.lights = lights;
//     this.milage = milage
//   }
//     printAllDetails(){
//     console.log(`Car Details:
//     Brand: ${this.brand}
//     Type: ${this.typeOfCar}
//     Diesel or Petrol: ${this.dieselOrPetrol}
//     Automatic: ${this.isAutomatic}
//     Sunroof: ${this.sunroof}
//     Color: ${this.color}
//     Tyres Type: ${this.tyresType}
//     Number of Airbags: ${this.noOfAirBags}
//     Number of Seats: ${this.noOfSeats}
//     Engine Horse Power: ${this.engineHorsePower}
//     Lights: ${this.lights}
//     Fuel Efficiency: ${this.milage}`)
//   }
  
// }

// class Car extends Vehicle {
//   constructor(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage,
//               brand, typeOfCar, dieselOrPetrol, isAutomatic, sunroof, color){
    
//     super(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage)
    
//     this.brand = brand;
//     this.typeOfCar = typeOfCar;
//     this.dieselOrPetrol = dieselOrPetrol;
//     this.isAutomatic = isAutomatic;
//     this.sunroof = sunroof;
//     this.color = color;
//   }
  
//   printDetailsOfCar(){
//     console.log(`${this.brand}, ${this.typeOfCar}, ${this.dieselOrPetrol}, ${this.isAutomatic}, ${this.sunroof}, ${this.color}`)
//   }
  
// }

// const hondaCity = new Car("Tubeless",6,  5,  120,  "LED",  "15 km/l",  "Honda",  "Sedan",  "Petrol",  true,  true, "White");

// const bmw = new Car("Tubeless",8,5,  300,  "LED",  "12 km/l",  "BMW",  "SUV",  "Diesel",true,  true, "Black");

// const scorpio = new Car("Tubeless",4,7,140,"Halogen",  "10 km/l",  "Mahindra",  "SUV",  "Diesel",  false,  false,"Red");

// const tata = new Car("Tubeless", 2, 5,  110,  "LED",  "18 km/l",  "TATA",  "Hatchback",  "Petrol",  false,  false,  "Blue");

// // Print details of car
// hondaCity.printDetailsOfCar();
// bmw.printDetailsOfCar();
// scorpio.printDetailsOfCar();
// tata.printDetailsOfCar();

// // All the details are print 
// hondaCity.printAllDetails()
// bmw.printAllDetails()
// scorpio.printAllDetails()
// tata.printAllDetails()




// Quick Practice Question

// Design a hospital. include  properties of NoOfPatients, patientName, patientWardNo, patientAge,
// totalDoctors, totalStaff, totalBeds, pharamacyAvailable, surgeriesPending, OPD Timings, patientWeight, hospitalMobile
// admit atleast 4 new patients in hospital
// make custome fn to print all details of a patients inside Blueprint
// use static methods for which properties are in static

// class Hospital {
//   static hospitalName = "J J Hospital"
//   static totalDoctors = 50;
//   static totalStaff = 150;
//   static totalBeds = 220;
//   static pharamacyAvailable = true;
//   static surgeriesPending = 10;
//   static opdTimings = "8 AM - 2 PM";
//   static hospitalMobile = "1234567890";
  
//   constructor(patientName, patientWardNo, patientAge, patientWeight){
//     this.patientName = patientName;
//     this.patientWardNo = patientWardNo;
//     this.patientAge = patientAge;
//     this.patientWeight = patientWeight;
//   }
  
//   static DisplayInformation() {
    
//     console.log(`
//     Hospital Name: ${Hospital.hospitalName}, 
//     Total Doctors : ${Hospital.totalDoctors},
//     Total No of Beds : ${Hospital.totalBeds},
//     Total Staff : ${Hospital.totalStaff},
//     Pharamacy Available : ${Hospital.pharamacyAvailable},
//     Surgeries Pending : ${Hospital.surgeriesPending},
//     OPD Timing : ${Hospital.opdTimings},
//     Hospital Phone : ${Hospital.hospitalMobile}
//       `)
//   }
  
//   admitPatientDetails(){
//     console.log(`${this.patientName}, ${this.patientWardNo}, ${this.patientAge} Years Old, ${this.patientWeight} KG `)
//   }
  
// }


// const admitPatient1 = new Hospital("John Doe", 101, 45, 70);
// const admitPatient2 = new Hospital("Jane Smith", 102, 30, 60);
// const admitPatient3 = new Hospital("Alice Johnson", 103, 25, 55);
// const admitPatient4 = new Hospital("Bob Brown", 104, 50, 80);


// Hospital.DisplayInformation()

// admitPatient1.admitPatientDetails()
// admitPatient2.admitPatientDetails()
// admitPatient3.admitPatientDetails()
// admitPatient4.admitPatientDetails()














// 17 July 24
//! Basic intro about inheritance 
// !explain extends keyword and super is used to called parent constructor


// static variable and method 
// Question Design a a Blueprint name classRoom
// Add these properties - noOfStudentsInClass, sectionName, studentName, noOfSubjects, studentAge,
                          // uniformColor, schoolName,CGPA(of a student),Gender
// use static methods for which properties are in static
// Out of this classRoom make 5 students out of it.
// add a custome fn to print all the common properties.

// class ClassRoom {
//   // static varibles that are common for all students.
//   static schoolName = "Don Bosco School Pune";
//   static noOfSubjects = 6;
//   static uniformColor = "White&Black";
//   static sectionName = "A";
//   static noOfStudentsInClass = 88;
  
//   constructor(studentName,studentAge,CGPA,Gender){
//     this.studentName = studentName;
//     this.studentAge = studentAge;
//     this.CGPA = CGPA;
//     this.Gender = Gender;
//   }
//   // printing the Common Information 
//   static printCommonDetails(){
//     console.log(`Common Information: 
//     School Name : ${ClassRoom.schoolName},
//     No of Subjects : ${ClassRoom.noOfSubjects},
//     Uniform Color : ${ClassRoom.uniformColor},
//     Section Name : ${ClassRoom.sectionName},
//     No od Students: ${ClassRoom.noOfStudentsInClass}`)
//     console.log('-------------------------')
//   }
  
//   printDetails() {
//         console.log(`Student Name: ${this.studentName},
//         Student Age: ${this.studentAge},
//         CGPA: ${this.CGPA},
//         Gender: ${this.Gender}`);
//         console.log('-------------------------')
//   }
// }

// const student1 = new ClassRoom("Gimmy",   14, 3.8, "Female");
// const student2 = new ClassRoom("Mohit",   15, 3.6, "Male");
// const student3 = new ClassRoom("Hitesh",  14, 3.9, "Male");
// const student4 = new ClassRoom("Sonu",    13, 4.0, "Female");
// const student5 = new ClassRoom("Daniyal",  15, 3.7, "Male");

// ClassRoom.printCommonDetails()

// const arrOfObj = [student1,student2,student3,student4,student5]

// arrOfObj.forEach((item)=>{
//   item.printDetails()
// })

// or you can do this
// student1.printStudentDetails();
// student2.printStudentDetails();
// student3.printStudentDetails();
// student4.printStudentDetails();
// student5.printStudentDetails();


// !static properties(methods/functions)/variables belongs to class not to object 

// class Car {
//   static air = "bags"
//   constructor(brand){
//     this.brand = brand;
//   }
//   static hello(){
//     return 'hello!!!!'
//   }
// }
// const newCar = new Car("ford")

// // Note : ! Static properties belongs to class not object

// // static function called
// console.log(Car.hello())

// // static varibale called
// console.log(Car.air)


// yesterday
// Practice Question
// Make a Blueprint mobilePhone
// Have properties like screensize (0-15), camera(megapixel), charginPort, color, 
// water resistent, os- Operating system, storage, +1 more property of your choice
// make a custome function in that  Blueprint to print all the properties of the object.
// make atleast 4 mobilePhones from Blueprint

// class mobilePhone {
// constructor(screenSize, camera, charginPort, color, 
//               waterResistent, OperatingSystem, storage, price){
//                 this.screenSize = screenSize;
//                 this.camera = camera;
//                 this.charginPort = charginPort;
//                 this.color = color;
//                 this.waterResistent = waterResistent;
//                 this.OperatingSystem = OperatingSystem;
//                 this.storage = storage;
//                 this.price = price;
//               }
              
//   printDetails = () => {
//     console.log(`Mobile phone details:
//       Screen Size: ${this.screenSize} inches
//       Camera: ${this.camera} MP
//       Charging Port: ${this.charginPort}
//       Color: ${this.color}
//       Water Resistant: ${this.waterResistent}
//       Operating System: ${this.OperatingSystem}
//       Storage: ${this.storage} GB
//       Price: ${this.price} K
//     `);
//   }
// }

// const IphoneX  = new mobilePhone(6.1, 12, 'USB-C', 'Black', true, 'iOS', 64, 35) 
// const SamsungGalaxy = new mobilePhone(6.1, 12, 'USB-C', 'Black', false, 'Android', 64, 25) 
// const SamsungS21 = new mobilePhone(6.1, 12, 'USB-C', 'Black', true, 'Android', 64, 55) 
// const Iphone15 = new mobilePhone(6.1, 12, 'USB-C', 'Black', true, 'iOS', 64, 60) 

// IphoneX.printDetails()
// SamsungGalaxy.printDetails()
// SamsungS21.printDetails()
// Iphone15.printDetails()


// 16 July 24
// OOPs started : 
//  Class is a Blueprint to make an object.
// ! constructor is a function which is used to initalize the object. 
// ! new is operator lets developers create an instance of a user-defined object type.

// Task : Make a Blueprint Name "SuperHero"


// class SuperHero {
  
// // created a constructor for all the properties name, strength....

//   constructor(name, strength, health, canFly, canTeleport, stardom, speed, intelligence, agility){
//     this._name = name
//     this._strength = strength
//     this._health = health
//     this._canFly = canFly
//     this._canTeleport = canTeleport
//     this._stardom = stardom
//     this._speed = speed
//     this._intelligence = intelligence
//     this._agility = agility 
//   }
  
//   // custome function to print all details
//   printAllDetails() {
//     console.log(`Name: ${this._name}`);
//     console.log(`Strength: ${this._strength}`);
//     console.log(`Health: ${this._health}`);
//     console.log(`Can Fly: ${this._canFly}`);
//     console.log(`Can Teleport: ${this._canTeleport}`);
//     console.log(`Stardom: ${this._stardom}`);
//     console.log(`Speed: ${this._speed}`);
//     console.log(`Intelligence: ${this._intelligence}`);
//     console.log(`Agility: ${this._agility}`);
   
//   }
  
  
//   // print sum of all integers 
//   getSumOfIntegers() {
//     let sum = this._strength + this._health + this._stardom +  this._speed + this._intelligence + this._agility
//     console.log(`Sum of All integer properties for ${this._name} : ${sum}`)
//     console.log('--------*****--------')
//   }
  
// }

// // 5 superhero's

// const hero1 = new SuperHero("Captain Marvel", 500, 100, true, false, 90, 85, 95, 80);
// const hero2 = new SuperHero("Spider-Man", 300, 90, false, false, 80, 75, 90, 95);
// const hero3 = new SuperHero("Iron Man", 400, 85, true, false, 95, 80, 100, 70);
// const hero4 = new SuperHero("Thor", 500, 100, true, true, 95, 70, 85, 90);
// const hero5 = new SuperHero("Black Panther", 350, 95, false, false, 85, 90, 85, 100);

// // Printing details of each superhero

// hero1.printAllDetails();
// hero1.getSumOfIntegers();

// hero2.printAllDetails();
// hero2.getSumOfIntegers();


// hero3.printAllDetails();
// hero3.getSumOfIntegers();

// hero4.printAllDetails();
// hero4.getSumOfIntegers();

// hero5.printAllDetails();
// hero5.getSumOfIntegers();







// 13 && 14 Weekend --> 15 July 24
// bind map reduce filter polyfills

// bind ---> function(applies). (Function.prototype)

// map, reduce, filter applies on ----> Array (Applies)


// bind -----> return a new function that can be invoked later.

// map ------> return a new Array (Array.prototype)

// reduce ---> return single value (Array.prototype)

// filter ---> returns A new array (Array.prototype)

// deep clone shallow clone
// deep Object 
// slice

// .call(this(reference), parameters)
// .apply(this(reference), parameters list of Array)
// .bind(this(reference), parameters)

// applies on a function
// Polyfill of filter 

// Array.prototype.myFilter = function(callback){
//   let resultantArr = []
//   for(let i = 0; i < this.length; i++){
//     if(callback.call(this,this[i])){ // if(callback(this[i])) it also works fine  
//       resultantArr.push(this[i])
//     }
//   }
//   return resultantArr
// }
// 

// Array.prototype.myFilter = function(callback){
//   let arr = []
//   for(let i = 0; i< this.length; i++){
//     if(callback.call(this,this[i])){
//       arr.push(this[i])
//     }
//   }
//   return arr
// }

// const arr = [77,66,89,93,32,33,13,61,15,3,1323]
// const resultantArr = arr.myFilter(num => num % 10 === 3) //[ 93, 33, 13, 3, 1323 ]

// console.log(resultantArr)

// 3. Question task find even length strings

// const arr = ["one","two","three","four", "five","six","seven","eight", "nine","ten"]
// const filteredArr = arr.myFilter((ele) => ele.length % 2 === 0)
// console.log(filteredArr)

// const data = [10,11,22,20,30,200,550,21,65,89]
// const filterLog = data.myFilter((el) => el % 5 === 0)
// console.log(filterLog)

// 3.Question task
// const arr = [10,11,22,20,30,200,550,21,65,89]
// const filterLog = arr.filter((el) => el % 5 === 0) // [ 10, 20, 30, 200, 550, 65 ]
// console.log(filterLog)

// 2.Question Revise: task -> cumulative sum of array element initialValue 83 after that multiply result with 2 and print it. 

// Array.prototype.myReduce = function (callback, initialValue) { 
//     let accumulator = initialValue;
//     for(let i = 0; i < this.length; i++){
//       accumulator = callback.call(this, accumulator, this[i])
//     }
//     return accumulator
// }


// const arr = [1, 2, 3, 4, 5, 6, 7,8,9,10];
// const result = arr.myReduce((acc, curr) => acc + curr, 83) * 2
// console.log(result)


// 1.Question Revise: task -> cumulative product of array element

// Array.prototype.myReduce = function (callback, initialValue) { 
//       let accumulator = initialValue 
//       for(let i = 0; i < this.length; i++){
//         if(accumulator){
//           accumulator = callback.call(this, accumulator, this[i])
//         }
//         else{
//           accumulator = this[i]
//         }
//       }
//       return accumulator
//     } 


// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.myReduce((acc, curr) => acc * curr)
// console.log(result)









// 12 July 24
// Polyfill of .reduce for initialValue 


// const arr = [1, 2, 3, 4, 5, 6, 7];

// Array.prototype.myReduce = function (callback, initialValue) { 
//         let accumulator = initialValue; 
//         for (let i = 0; i < this.length; i++) { 
//                 accumulator = callback.call(this,  
//                     accumulator, this[i]); 
//         } 
//         return accumulator; 
//     } 

// const average = arr.myReduce((acc, curr) => acc + curr,2)   
// console.log(average);


// Polyfill of .reduce() method
// const arr = [1, 2, 3, 4, 5, 6, 7];

// Array.prototype.myReduce = function (callback, initialValue) { 
//         let accumulator = initialValue; 
//         for (let i = 0; i < this.length; i++) { 
            
//             if (accumulator) { 
//                 accumulator = callback.call(this,  
//                     accumulator, this[i]); 
//             } 
//             else { 
//                 accumulator = this[i]; 
//             } 
//         } 
//         return accumulator; 
//     } 

// const average = arr.myReduce((acc, curr) => acc + curr ) / arr.length 
// console.log(average);


// refactor the below code
// const average = arr.map((val, idx) => (val * 2 + 32) - idx).reduce((acc, curr) => acc + curr, 0) / arr.length; 

// console.log(average); // Output: 37


// const arr = [1,2,3,4,5,6,7]

// const newArr = arr.map((val,idx)=> ((val*2)+ 32) - idx) // [34, 35, 36, 37, 38, 39, 40]

// const sum = newArr.reduce((accumulator, currentValue) => (accumulator + currentValue)) // 259

// const average = sum / arr.length 

// console.log(average) // 37

// ! its not working bcz =>  Arrow Function Issue:

// Arrow functions do not have their own this context. Instead, they inherit this from the lexical scope in which they are defined.
// When you use an arrow function to define myMap, this inside myMap does not refer to the array instance arr, but to the global context or the enclosing lexical context where myMap is defined. As a result, this.length is undefined, and the loop does not execute.
// Solution:

// Use a regular function (not an arrow function) to define myMap. Regular functions have their own this context, which correctly refers to the array instance on which the method is called.

// Array.prototype.myMap = (fn) =>  {
//   let array = []
//   for(let i = 0; i < this.length; i++){
//     array.push(fn(this[i],i))
//   }
//   return array
// }

// const result = arr.myMap((value,index) => (value * 23 + index) / 3) 
// console.log(result)



// Polyfill of map
// const arr = [1,2,3,4,5,6,7]

// Array.prototype.myMap = function(fn) {
//   let array = []
//   for(let i = 0; i < this.length; i++){
//     array.push(fn(this[i],i))
//   }
//   return array
// }

// const result = arr.myMap((value,index) => (value * 23 + index) / 3) 
// console.log(result)

// const result = arr.map((ele,index) => ele - 11 + index)
// or
// const result = arr.map((ele,index) => {return ele - 11 + index})
// console.log(result)

// !RevisePollyfill of bind method 
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }
// const getData = function(place1,place2){
//   console.log(`My name is ${this.firstName} ${this.lastName} and age is ${this.age}. from ${place1} & ${place2}`)
// }

// Function.prototype.myBind = function(...args){
//   // reference to the object
//   let gettingData = this
//   const para =args.slice(1)
//   return function(){
//     gettingData.apply(args[0],para)
//   }
// }

// let getDataFromBind = getData.myBind(personDetails,"Delhi","Mumbai","Pune")
// getDataFromBind()









// 11 July 24
// namaste friend
// !! Q3. Pollyfill of
// Array.prototype.myMap = function(callback){
//     let temp=[];
//     // let callback = this
//     for(let i = 0;i < this.length; i++)
//     { 
//         temp.push(callback(this[i]*2,i))
//         // temp.push(callback(this[i]*2,i));
//         console.log(callback(this[i]*2,i))
//     }
//     return temp;
// };
// //Performing map method through custom made map called myMap
// const nums = [1,2,3,4];
// const multiply=nums.myMap((x)=>{
//     return x
// })
// console.log(multiply);

// !! Q2.make a Pollyfill for bind having functionality to pass arguments.Pass at least 2 arguments
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }
// const getData = function(place1, place2){ // function(...place) all the rest of the list is print
//   console.log(`My name is ${this.firstName} ${this.lastName} ${place1} & ${place2}, and age is ${this.age}`)
//   // console.log(`${place}`)

  
// }

// // Pollyfill of bind method 
// Function.prototype.bmbind = function(...args){
//   let gettingData = this
//   const params = args.slice(1)
//   return function(){
//     gettingData.apply(args[0],params)
//   }
// }

// let getDataFromBind = getData.bmbind(personDetails,"Delhi","Mumbai")
// getDataFromBind()

// !! Q1. Demonstrate a Pollyfill of .bind

// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }
// const getData = function(){
//   console.log(`My name is ${this.firstName} ${this.lastName} and age is ${this.age}`)
// }

// // Pollyfill of bind method 
// Function.prototype.bmbind = function(...args){
//   let gettingData = this
//   return function(){
//     gettingData.call(args[0])
    
//   }
// }

// let getDataFromBind = getData.bmbind(personDetails)
// getDataFromBind()

// .bind method
// Question  Demonstate .bind method and pass 3 parameters in the .bind method and function.
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// const getData = function(...data) {
//   console.log(`${this.firstName}, ${data}`)
// }

// let getPassedData = getData.bind(personDetails,"Delhi","Mumbai","Goa")
// getPassedData()

// ! Revision question pass the whole array in .apply method and access each element using for loop. Demonstate it.
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
//   }
// }

// // // .apply method 
// const getPlaces = function(...arrOfPlaces){
//   for(let place of arrOfPlaces) {
//   console.log(`${place}`)
//   }
// }
// getPlaces.apply(personDetails,['India','New York','USA'])

// ! Revision question demonstrate .call and .apply Method

// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
//   }
// }
  

// const getAddress = function(streetNo) {
  // console.log(`Address : streetNo. ${streetNo} ${this.address.city} zip : ${this.address.zip}`) 
// } 

// getAddress.apply(personDetails,["123"])

// const getAge = function() {
//   console.log(`Age is ${this.age}`) 
// }
// getAge.call(personDetails)










// 10 july 24.
// call Method
// 1.question
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
//   }
// }

// // // .apply method 
// const getPlaces = function(...arrOfPlaces){
//   for(let place of arrOfPlaces) {
//   console.log(`${place}`)
//   }
// }
// getPlaces.apply(personDetails,['India','New York','USA']) // "Hello from India, New York, John Doe"

// const getPlaces = function(place){

  // console.log(`Hello from ${place}, ${this.firstName} ${this.lastName} `)
// }
// getPlaces.apply(personDetails,['India','New York','USA'])

// .call method
// function printFullName(){
  // console.log(`printFullName, ${this.firstName} ${this.lastName}`)
// }

// const getFullName = function(place){
  // console.log(`Hello from ${place}, ${this.firstName} ${this.lastName} `)
// }
// getFullName.call(personDetails,"India")

// !! Note : Yes it will not work. Because we have to store a function in a variable 
// const getData = () => {
//   console.log(`getData, ${this.firstName} ${this.lastName}`)
// }

// printFullName.call(personDetails)
// getData.call(personDetails)

// question 
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const clonedArr = [...arr]
// const SubArr = clonedArr.slice(0,4)
// console.log(SubArr) // [1,2,3,4]
// const extendedArr = SubArr.concat([2,66,8,"a"])
// console.log(extendedArr) // [1, 2, 3, 4, 2, 66, 8,'a']

// Copy arr
// concatenat
// const arr = [1,2,3,4,5]
// const extendedArr = arr.concat([6,7,8])
// console.log(extendedArr) // [ 1, 2, 3, 4, 5, 6, 7, 8]

// question is to make an array of your choice and extract a subarray from index 0 to 5
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const extractedArr = arr.slice(0,6)
// console.log(extractedArr) // [ 1, 2, 3, 4, 5 ]


// const arr = [1,2,3, "hello", "a","Sam","b"]
// const clonedArr = [...arr]
// another way

// console.log(clonedArr) // [ 1, 2, 3, 'hello', 'a', 'Sam', 'b' ]




// 4 level object
// let weatherApp = { // level 1
//   user: { // level 2
//     id: 1,
//     name: "John Doe",
//     location: { // level 3
//       latitude: 40.7128,
//       longitude: -74.0060,
//       city: "New York",
//       country: "USA",
//       address: { // level 4
//         street: "5th Avenue",
//         number: 123,
//         postalCode: "10001"
//       }
//     }
//   }
// }





// Revision of shallow copy

// Asked in interivews 
// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college",
//     }
// }
// }

// // Deep copy created using spread operator
// // const newObj = {...personDetails}
// const newObj = JSON.parse(JSON.stringify(personDetails))

// newObj.firstName = "James"

// console.log(newObj.firstName) // James
// console.log(personDetails.firstName) // John

// // Deep copy is not affected for multilevel object 
// newObj.address.city = "Delhi"
// console.log(newObj.address.city) // Delhi
// console.log(personDetails.address.city) // New York


// Get Object Keys
// Create an object called student with a property called name. 
// Add a property to the Object prototype called getKeys() 
// that returns an array of all the keys in the object.

// const student = {
// 	name:"Bhavesh",
//     age:20
// }
// Object.prototype.getKeys = function(){
// 	return Object.keys(this)
// }
// const keys = student.getKeys()
// console.log(keys)

// 9 july 24
// const arr = [1,2,3,4,5]
// const clonedArr = ["a","batman",...arr,"b"]
// console.log(clonedArr) // [ 'a', 'batman', 1, 2, 3, 4, 5 ]


// 8 july 24

// const studentObj = {
//   name : "Akshay",
//   rollNo : 44,
//   city: "pune",
//   phone: 3214343,
//   result: "pass",
//   class: 9
// }

// //  shallow copy created using spread operator
// const newObj = {...studentObj}

// newObj.name = "bhavesh"
// console.log(newObj.name) // bhavesh
// console.log(studentObj.name) // Akshay



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     city: "New York"
// };

// // shallow copy created using Object.assign({},objectName) 
// // const newObj = Object.assign({jobId:"1234"},person)
// const newObj = JSON.parse
// console.log(newObj.firstName)
// console.log(newObj.jobId)
// // console.log(newObj.jobId))

// newObj.lastName = "smith" 

// console.log(person.lastName) // Doe
// console.log(newObj.lastName) // smith



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     city: "New York"
// };

// // Deep copy created using Object.assign({},objectName) 

// const newObj = JSON.parse(JSON.stringify(person,{}))

// newObj.age = 25
// console.log(newObj.jobId)
// console.log(newObj.age) // 25
// console.log(person.age) // 30


// const personDetails = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address:{
//     city: "New York",
//     zip:34223,
//     landMark: {
//       nearTothe:"wdc college"
//     }
// }
// }
// // shallow copy created using spread operator
// const newObj = {...personDetails}

// newObj.firstName = "James"

// console.log(newObj.firstName) // James
// console.log(personDetails.firstName) // John

// newObj.address.city = "Delhi"
// console.log(newObj.address.city) // Delhi
// console.log(personDetails.address.city) // Delhi



