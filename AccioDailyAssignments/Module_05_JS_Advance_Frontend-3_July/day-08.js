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

class Vehicle {
  
    constructor(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage){
      this.tyresType = tyresType;
      this.noOfAirBags = noOfAirBags;
      this.noOfSeats = noOfSeats;
      this.engineHorsePower = engineHorsePower;
      this.lights = lights;
      this.milage = milage
    }
      printAllDetails(){
      console.log(`Car Details:
      Brand: ${this.brand}
      Type: ${this.typeOfCar}
      Diesel or Petrol: ${this.dieselOrPetrol}
      Automatic: ${this.isAutomatic}
      Sunroof: ${this.sunroof}
      Color: ${this.color}
      Tyres Type: ${this.tyresType}
      Number of Airbags: ${this.noOfAirBags}
      Number of Seats: ${this.noOfSeats}
      Engine Horse Power: ${this.engineHorsePower}
      Lights: ${this.lights}
      Fuel Efficiency: ${this.milage}`)
    }
    
  }
  
  class Car extends Vehicle {
    constructor(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage,
                brand, typeOfCar, dieselOrPetrol, isAutomatic, sunroof, color){
      
      super(tyresType, noOfAirBags, noOfSeats, engineHorsePower, lights, milage)
      
      this.brand = brand;
      this.typeOfCar = typeOfCar;
      this.dieselOrPetrol = dieselOrPetrol;
      this.isAutomatic = isAutomatic;
      this.sunroof = sunroof;
      this.color = color;
    }
    
    printDetailsOfCar(){
      console.log(`${this.brand}, ${this.typeOfCar}, ${this.dieselOrPetrol}, ${this.isAutomatic}, ${this.sunroof}, ${this.color}`)
    }
    
  }
  
  const hondaCity = new Car("Tubeless",6,  5,  120,  "LED",  "15 km/l",  "Honda",  "Sedan",  "Petrol",  true,  true, "White");
  
  const bmw = new Car("Tubeless",8,5,  300,  "LED",  "12 km/l",  "BMW",  "SUV",  "Diesel",true,  true, "Black");
  
  const scorpio = new Car("Tubeless",4,7,140,"Halogen",  "10 km/l",  "Mahindra",  "SUV",  "Diesel",  false,  false,"Red");
  
  const tata = new Car("Tubeless", 2, 5,  110,  "LED",  "18 km/l",  "TATA",  "Hatchback",  "Petrol",  false,  false,  "Blue");
  
  // Print details of car
  hondaCity.printDetailsOfCar();
  bmw.printDetailsOfCar();
  scorpio.printDetailsOfCar();
  tata.printDetailsOfCar();
  
  // All the details are print 
  hondaCity.printAllDetails()
  bmw.printAllDetails()
  scorpio.printAllDetails()
  tata.printAllDetails()
  
  
  
  
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
  