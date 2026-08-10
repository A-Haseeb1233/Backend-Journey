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

// today session

// class Toyota {
//     constructor (brand, mileage) {
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start () {
//         console.log(`start`);
//     }

//     stop () {
//         console.log(`stop`);
//     }

// //     setBrand (brand) {
// //         this.brandName = this.brand;
// //     }
// }

// let fortuner = new Toyota("fortuner", 10);
// console.log(fortuner);
// let vigo = new Toyota("vigo" , 30);
// console.log(vigo);

// class parents {
//    dynamicHello (name) {
//         console.log(`Hello, ${this.name}`);
//     }

// }

// let hello = new parents("Haseeb");

// class person {
//   constructor() {
//     this.spices = "Homo Sapiens"
//   }

//   sleep() {
//     console.log("sleep");
//   }

//   eat() {
//     console.log("eat");
//   }

//   work() {
//     console.log("work nothing");
//   }
// }

// class engineer extends person {
//     work () {
//         console.log("solve problem and build something");
//     }
// }

// class doctor extends person {
//     work () {
//         console.log("to treat people");
//     }
// }

// Q you are creating a website for your college create a class user with 2 properties name and email it also
// has method called viewData() that allows user to view website data

// solution

// class user {
//   name(name) {
//     this.name = name;
//   }

//   email(email) {
//     this.email = email;
//   }

//   viewData() {
//     console.log(`name = ${name}`);
//     console.log(`email = ${email}`);
//   }

// }

// let obj = new user ("Haseeb", "email");

// Q1 — Basic Class + Object + new

// Ek Car class banao jisme constructor mein brand aur year properties set hon. Fir
// uska ek object myCar banao new keyword use karke, aur uski properties console mein print karo.

// Q2 — Methods aur this

// Same Car class mein ek method add karo describe() naam ka jo return kare ek string jaise:
// "This car is a 2025 Toyota" (using this.brand and this.year).

// Fir do objects banao (car1, car2) different brands/years ke sath, aur dono pe describe() call karo.

// Sochne wali baat: jab tum car1.describe() call karte ho, this kis object ko refer karega us waqt? Aur
// jab car2.describe() call hota hai?

// solution

// class car {
//     constructor (brand, year) {
//         this.brand = brand;
//         this.year = year;
//     }

//     describe () {
//         return `this car is a ${this.year} ${this.brand}`;
//     }
// }

// // let newObj = new car("toyota", 2025);
// // console.log(newObj);

// // let brand = prompt("Enter your car brand: ");
// // let year = Number(prompt("Enter your car year: "));

// let car1 = new car("toyota", 2025);
// let car2 = new car("corolla", 2000);

// console.log(car1.describe());
// console.log(car2.describe());

// class device {
//   constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }

//   describe() {
//     return `This Device is a ${this.brand} Costing ${this.price}`;
//   }
// }

// class smartPhone extends device {
//     constructor(brand, price, storage) {
//         super(brand, price)
//         this.storage = storage
//     // }
//     // describe() {
//     //     return `This Device is a ${this.brand} Costing ${this.price} with ${this.storage}`
//     // }

//     super.describe(storage) 
//         this.storage = storage;
// }
// }

// let myPhone = new smartPhone("samsung", 12000, 128);
// console.log(myPhone.describe());

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello my name is ${this.name}`);
    }
}

// class GradeStudent extends Student{
//     constructor(name, age, thisIsTitle) {
//         super(name, age);
//         this.thisIsTitle = thisIsTitle;
//     }

//     sayHello() {
//         console.log(`Hello i am grad student my name is ${this.name}`);
//     }

//     viewDetails() {
//         console.log(`my name is ${this.name} age is ${this.age} and the title is ${this.thisIsTitle}`);
//     }
// }

// let newObj = new GradeStudent("Ali Raza", 45, "node.js");
// newObj.viewDetails();
// newObj.sayHello();
// let p1 = new Student("Ali", 25);
// console.log(p1.age);
// p1.sayHello();
// let p2 = new Student("Sara", 23);
// console.log(p2.age);

// class Book {
//     constructor(title, pages = 0) {
//         this.title = title;
//         this.pages = pages;
//     }
// }

// let b1 = new Book("node.js", 500);
// console.log(b1);
// let b2 = new Book("Backend Dev");
// console.log(b2);