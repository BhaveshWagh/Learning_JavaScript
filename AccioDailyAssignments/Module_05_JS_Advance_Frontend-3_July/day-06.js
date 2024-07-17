// 16 July 24
// OOPs started :
// ! Class is a Blueprint to make an object.
// ! constructor is a function which is used to initalize the object.
// ! new is operator lets developers create an instance of a user-defined object type.

// Task : Make a Blueprint Name "SuperHero"
//

class SuperHero {
  // created a constructor for all the properties name, strength....

  constructor(
    name,
    strength,
    health,
    canFly,
    canTeleport,
    stardom,
    speed,
    intelligence,
    agility
  ) {
    this._name = name;
    this._strength = strength;
    this._health = health;
    this._canFly = canFly;
    this._canTeleport = canTeleport;
    this._stardom = stardom;
    this._speed = speed;
    this._intelligence = intelligence;
    this._agility = agility;
  }

  // custome function to print all details
  printAllDetails() {
    console.log(`Name: ${this._name}`);
    console.log(`Strength: ${this._strength}`);
    console.log(`Health: ${this._health}`);
    console.log(`Can Fly: ${this._canFly}`);
    console.log(`Can Teleport: ${this._canTeleport}`);
    console.log(`Stardom: ${this._stardom}`);
    console.log(`Speed: ${this._speed}`);
    console.log(`Intelligence: ${this._intelligence}`);
    console.log(`Agility: ${this._agility}`);
  }

  // print sum of all integers
  getSumOfIntegers() {
    let sum =
      this._strength +
      this._health +
      this._stardom +
      this._speed +
      this._intelligence +
      this._agility;
    console.log(`Sum of All integer properties for ${this._name} : ${sum}`);
    console.log("--------*****--------");
  }
}

// 5 superhero's

const hero1 = new SuperHero(
  "Captain Marvel",
  500,
  100,
  true,
  false,
  90,
  85,
  95,
  80
);
const hero2 = new SuperHero(
  "Spider-Man",
  300,
  90,
  false,
  false,
  80,
  75,
  90,
  95
);
const hero3 = new SuperHero("Iron Man", 400, 85, true, false, 95, 80, 100, 70);
const hero4 = new SuperHero("Thor", 500, 100, true, true, 95, 70, 85, 90);
const hero5 = new SuperHero(
  "Black Panther",
  350,
  95,
  false,
  false,
  85,
  90,
  85,
  100
);

// Printing details of each superhero

hero1.printAllDetails();
hero1.getSumOfIntegers();

hero2.printAllDetails();
hero2.getSumOfIntegers();

hero3.printAllDetails();
hero3.getSumOfIntegers();

hero4.printAllDetails();
hero4.getSumOfIntegers();

hero5.printAllDetails();
hero5.getSumOfIntegers();

// Revision
// class SuperHero {
//     constructor(name, health) {
//       this.name = name;
//       this.health = health;
//       this.strength = 10;
//     }
//     getName() {
//       console.log(this.name);
//     }
//     getPower() {
//       console.log(this.health + this.strength);
//     }
//   }

//   // create instance of a class
//   const hero1 = new SuperHero("Thor", 400);
//   const hero2 = new SuperHero("captain America", 499);

//   hero1.getName();
//   hero2.getName();

//   hero1.getPower();
//   hero2.getPower();
