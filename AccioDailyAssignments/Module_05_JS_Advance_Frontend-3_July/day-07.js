// 17 July 24
// Basic intro about inheritance 
// explain extends keyword and super is used to called parent constructor


// static variable and method 
// Question Design a a Blueprint name classRoom
// Add these properties - noOfStudentsInClass, sectionName, studentName, noOfSubjects, studentAge,
                          // uniformColor, schoolName,CGPA(of a student),Gender
// use static methods for which properties are in static
// Out of this classRoom make 5 students out of it.
// add a custome fn to print all the common properties.

class ClassRoom {
    // static varibles that are common for all students.
    static schoolName = "Don Bosco School Pune";
    static noOfSubjects = 6;
    static uniformColor = "White&Black";
    static sectionName = "A";
    static noOfStudentsInClass = 88;
    
    constructor(studentName,studentAge,CGPA,Gender){
      this.studentName = studentName;
      this.studentAge = studentAge;
      this.CGPA = CGPA;
      this.Gender = Gender;
    }
    // printing the Common Information 
    static printCommonDetails(){
      console.log(`Common Information: 
      School Name : ${ClassRoom.schoolName},
      No of Subjects : ${ClassRoom.noOfSubjects},
      Uniform Color : ${ClassRoom.uniformColor},
      Section Name : ${ClassRoom.sectionName},
      No od Students: ${ClassRoom.noOfStudentsInClass}`)
      console.log('-------------------------')
    }
    
    printDetails() {
          console.log(`Student Name: ${this.studentName},
          Student Age: ${this.studentAge},
          CGPA: ${this.CGPA},
          Gender: ${this.Gender}`);
          console.log('-------------------------')
    }
  }
  
  const student1 = new ClassRoom("Gimmy",   14, 3.8, "Female");
  const student2 = new ClassRoom("Mohit",   15, 3.6, "Male");
  const student3 = new ClassRoom("Hitesh",  14, 3.9, "Male");
  const student4 = new ClassRoom("Sonu",    13, 4.0, "Female");
  const student5 = new ClassRoom("Daniyal",  15, 3.7, "Male");
  
  ClassRoom.printCommonDetails()
  
  const arrOfObj = [student1,student2,student3,student4,student5]
  
  arrOfObj.forEach((item)=>{
    item.printDetails()
  })
  
  // or you can do this
  // student1.printStudentDetails();
  // student2.printStudentDetails();
  // student3.printStudentDetails();
  // student4.printStudentDetails();
  // student5.printStudentDetails();
  
  
  
  
  // !static properties/variable belongs to class not to object 
  
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