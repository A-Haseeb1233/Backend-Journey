// function myFunction() {
//     console.log("Welcome FalconH")
//     console.log("FalconH The Great Backend Engineer");
// }

// myFunction();

// function takeParameter(msg) {
//     console.log(msg);
// }

// takeParameter("I Love Backend Development");

// function sum(a, b) {
//     console.log(a + b);
// }

// function Mul (x, y) {
//     x * y;
//     return x*y;
// }

// let val = Mul(3, 8);
// console.log(val);

// function myfunction(str) {
//     let lowercase = str.toLowerCase(str);
//     let count = 0;
//     for(let val of lowercase) {
//         if("a,e,i,o,u".includes(val)){
//             count ++;
//         }
//     }
//     console.log(`This string contain ${count} vowels`);
// }

// myfunction("Abdul Haseeb");

// function myfunction(str) {
//     let lowercase = str.toLowerCase(str);

//     for(let i = 0; i >= lowercase.length - 1; i++){

//         if("aeiou".inclcudes(lowercase[i])){
//             return i;
//         }
//     }
// }

// myfunction("Abdul Haseeb");

// const myfunction = (str) => {
//   let lowercase = str.toLowerCase();
//   let count = 0;
//   for (let val of lowercase) {
//     if ("aeiou".includes(val)) {
//       count++;
//     }
//   }
//   return count;
// };

// let val = myfunction("Abdul Haseeb");
// console.log(`In this string ${val} vowels are present`);

// const  printHello = (msg) => {
//   return msg;
// }

// console.log(printHello("Hello World"));

// const squareNum = (a, b) => a ** b;

// console.log(squareNum(4,2));

// const strcontcat = (str1,str2) => str1.concat(str2);
// console.log(strcontcat("Hello ","FalconH"));

// function abc () {
//     console.log("Abdul Haseeb");
// }

// const abcd = () => {
//     // do some work 
//     // return or console.log
// }

// // same 
// const abd = (a , b) => a * b;
// let print = abd(3, 4);
// console.log(print);


// let numbers = [2, 3, 4, 5];

// numbers.forEach(function(number){
//     console.log(`${number*number}`)
// })

// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function(number){
//     if(number % 2 === 0){
//         console.log(number);
//     }
// })

// let names = ["Ali", "Haseeb", "Zara", "Muhammad", "Sara"];

// names.forEach(function(name, index){
//     if(index % 2 !== 0) {
//         console.log(name)
//     }
// })


// let names = ["Ali", "Haseeb", "Zara", "Muhammad", "Sara", "Abdullah"];

// names.forEach(function(name){
//     if(name.length > 5){
//         console.log(name)
//     }
// })

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(function(number){
//     sum += number;
// })

// console.log(sum);

// const student = {
//     name: "Student",
//     // more 
// }

// let students = [
//     {name: "Ali", marks: 45},
//     {name: "Haseeb", marks: 80},
//     {name: "Zara", marks: 55},
//     {name: "Sara", marks: 30},
//     {name: "Muhammad", marks: 90}
// ];


// students.forEach(function(student){
//     if(student.marks >= 80){
//         console.log(`${student.name} - A`);
//     } else if (student.marks >= 60 && student.marks <= 79) {
//         console.log(`${student.name} - B`);
//     } else if (student.marks >= 50 && student.marks <= 59){
//         console.log(`${student.name} - C`);
//     } else {
//         console.log(`${student.name} - Fail`)
//     }
// })






// students.forEach(function(student){
//     if(student.marks > 50) {
//         console.log(student.name)
//     }
// })



// let students = [
//     {name: "Ali", marks1: 45, marks2: 60, marks3: 70},
//     {name: "Haseeb", marks1: 80, marks2: 90, marks3: 85},
//     {name: "Zara", marks1: 55, marks2: 40, marks3: 60},
// ];

// students.forEach(function(student){
//     console.log(`${student.name} - ${student.marks1 + student.marks2 + student.marks3}`);
// })


// Level 1: Basic Arrow Functions

// Q1. Ek arrow function banao jo do numbers ko add kare.

// const add = (a, b) => a + b; 


// const numberChecker = (num) => {
//   let val = true;
//   if(num % 2 === 0){
//   console.log(val)
//   } else {
//   val = false
//   console.log(val)
//   }
// }

// console.log(numberChecker(78));

// let arr = [2, 3, 4, 5, 6];
// let funct = (val) => {
//     console.log(val * val);
// }


// arr.forEach(funct);

// let marks = [56, 90, 98, 67, 96];


// let userarr = [];

// for(let i = 0; i <= userarr; i++){
//     let mark = Number(prompt("Enter your n: "));
//     userarr.push(mark);
// }

// function greetuser(name) {
//     console.log(`Hello, ${name}! Welcome.`);
// }

// greetuser("Haseeb");

// const greetuser = (name) => {
//     console.log(`Hello, ${name}! Welcome.`)
// }

// greetuser("Haseeb");

// const multiplyNumbers = (a, b) => a * b; 

// // another way to right the same thing
// // const multiplyNumbers = (a, b) => {
// //     return a * b;    
// // }

// let result = multiplyNumbers(3, 3);
// console.log(result);


// const numbers = [1, 2, 3, 4, 5];

//     // numbers.forEach(function(val){
//     //     console.log(val * val);
//     //     // another method that is we can also return value
//     // });

// numbers.forEach((val) => {
//     console.log(val * val);
// });

// const students = ["Ali", "Sara", "Haseeb", "Zara", "Bilal"];

// students.forEach((name) => {
//     if(name.length > 4){
//         console.log(name);
//     }
// })

// const students = ["Ali", "Sara", "Haseeb", "Zara", "Bilal"];

// let finalNames = students.filter((name) => {
//     return name.length > 4;
// });

// console.log(finalNames);


// const numbers = [10, 25, 32, 47, 58, 63, 71, 80];

// let evenarray = numbers.filter((isEven) => isEven % 2 === 0);

// evenarray.forEach((val) => {
//     console.log(val);
// });

// const products = [
//   { name: "Laptop", price: 150000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Monitor", price: 45000 },
//   { name: "Keyboard", price: 3000 },
//   { name: "Headphones", price: 8000 },
// ];

// let expensive = products.filter((prices) => prices.price > 5000);
// expensive.forEach((val) => {
//     console.log(`${val.name} - ${val.price}`)
// })

// const students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 78 },
//   { name: "Haseeb", marks: 90 },
//   { name: "Zara", marks: 33 },
//   { name: "Bilal", marks: 65 },
// ];

// let greatermark = students.filter((val) => val.marks > 60);
// greatermark.forEach((val) => console.log(`${val.name} - ${val.marks}`))

// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.reduce((pre, curr) => {
//    return  pre + curr;

// })

// console.log(result)


// const numbers = [10, 25, 32, 47, 58];

// let max = numbers.reduce((pre, curr) => {
//     if(pre < curr){
//         return curr;
//     } else {
//         return pre
//     }
// }, 0);

// console.log(max)


const products = [
  { name: "Laptop", price: 150000 },
  { name: "Mouse", price: 1500 },
  { name: "Monitor", price: 45000 },
  { name: "Keyboard", price: 3000 },
  { name: "Headphones", price: 8000 },
];

let totalPrice = products.reduce((pre, curr) => {
    return pre + curr.price
},0)

console.log(totalPrice)