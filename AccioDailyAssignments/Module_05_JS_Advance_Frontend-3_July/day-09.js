// 19 July 24

// Getters and setters
// Question 5 for make a class

class LanguageClass {
  constructor() {
    this.log = [];
  }

  set current(name) {
    this.log.push(name);
  }
}

const myLanguage = new LanguageClass();
myLanguage.current = "EN";
myLanguage.current = "HN";
myLanguage.current = "MR";
console.log(myLanguage.log); // Output: ['EN']

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
