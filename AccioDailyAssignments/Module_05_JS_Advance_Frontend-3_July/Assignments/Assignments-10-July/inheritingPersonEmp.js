// Inheriting Person for Employee Jobs
// https://course.acciojob.com/open-web-editor?question=94b56653-2db0-4122-86f7-e075339d061a
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age);
      this.jobTitle = jobTitle;
    }
  
    jobGreet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
  }
  
  // Example test cases
  const person = new Person("Alice", 25);
  person.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  
  const employee = new Employee("Bob", 30, "Manager");
  employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
  
  // Do not change the code below this line
  window.Person = Person;
  window.Employee = Employee;
  