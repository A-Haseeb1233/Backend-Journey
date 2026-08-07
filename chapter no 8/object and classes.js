// const student = {
//     name : "FalconH",
//     cgpa : 4,
//     uni : "BBSUL"
// };

// const employee = {
//     caltax () {
//         console.log("10$")
//     }
// }

// const tax = {
//     calTax () {
//         console.log(`this is the tax percentage 10`);
//     }
// };

// const employee1 = {
//     salary : 90000
// }

// const employee2 = {
//     salary : 95000
// }

// const employee3 = {
//     salary : 92000
// }

// employee1.__proto__ = tax;
// Object.setPrototypeOf(employee2, tax);

// 8 / 1 /  2026

// let employee = {
//     name : "Abdul Haseeb",
//     Designation : "Senior Backend Dev",
//     salary : 100000,
//     printSalary : function () {
//         console.log(`salary : ${this.salary}`);
//     }
// }

// note :  jo function obj ka under hota hai wo method hota hai

// Question 1 (Easy)
// Ek object banao student naam se jisme:
// name
// rollNo
// marks
// Aur ek method banao:
// printMarks()

// solution

// let student = {
//     name : "Abdul Haseeb",
//     rollNo : 2,
//     marks : 90,
//     printMark : function () {
//         console.log(`marks : ${this.marks}`);
//     }
// }

// Question 2 (Thoda Practice)
// Ek object banao car naam se.
// Properties:
// brand
// model
// price
// Method:
// showDetails()

// // solution

// let car = {
//     brand : "Toyota",
//     model : "Corolla",
//     price : 4500000,
//     showDetails : function () {
//         console.log(`brand: ${this.brand}`);
//         console.log(`model: ${this.model}`);
//         console.log(`price: ${this.price}`);
//     }
// }


// Question 3 (Challenge 🔥)
// Ek object banao mobile naam se.
// Properties:
// brand
// model
// battery
// Method:
// batteryStatus();

// // solution

// let mobile = {
//   brand: "Samsung",
//   model: "Galaxy A55",
//   battery: 78,
//   BatteryStatus : function () {
//     console.log(`battery: ${this.battery + "%"}`)
//   }
// };


// let calculateTax = {
//     cal() {
//         console.log("The tax rate is 10%");
//     }
// }

// let employee1 = {
//     name : "Ali",
//     showName () {
//         console.log(`${this.name}`);
//     }
// }

// employee1.__proto__ = calculateTax;

// 

// let personMethod = {
//     introduce() {
//         console.log(`Hello, I am a person`);
//     }
// };

// let person1 = {
//     name : "Abdul Haseeb"
// }

// person1.__proto__ = personMethod; 

// let animalMethod = {
//     sound() {
//         console.log("Animals make sounds.");
//     }
// };

// let dog = {
//     name: "Tommy",

//     bark() {
//         console.log("Woof Woof");
//     }
// };

// dog.__proto__ = animalMethod

