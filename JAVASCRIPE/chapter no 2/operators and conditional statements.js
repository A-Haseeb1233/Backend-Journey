// arthematic operators
// let a = 5;
// let b = 2;

// console.log("a = ", a, ", b = ", b);

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a ** b = ", a ** b);  // 5^2  exponentiation

// unary operator
// let a = 5;
// let b = 2;
// increment
// post increment
// post increment mean first print then add 1
// for exammple

// console.log("a++ = ", a++);
// console.log("a++ = ", a);

// pre incrmnet

// console.log("++a = ", a);
// console.log("++a = ", ++a);

//dcrement
//post decrement
// first print then subtract 1
// for exammple

// console.log("a-- = ", a--);
// console.log("a-- = ", a);

// pre decrement
// first subtract 1 then print

// console.log("--a = ", a);
// console.log("--a = ", --a);

// assignement operators

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b =", b);
// console.log("a+= : ", a += 2);
// console.log("a-= : ", a -= 2);
// console.log("a*= : ", a *= 5);
// console.log("a /= : ", a /= 5);
// console.log("a**= : ", a **= 5); // a **= 5 = a = a(5) ** 5

// let a = 5;
// let b = 2;

// let c = a == b;

// console.log(c);

// let a = 5;
// let b = 2;

// console.log("a >= b = ", a >= b); // true a is greater than or equal to  b
// console.log("a <= b = ", a <= b); // false a is less than or equal to b
// console.log("a > b = ", a > b); // a is greater than b
// console.log("a < b = ", a < b); // a is less than b
// console.log("equal to and not equal to check!");
// console.log("a == b = ", a == b); // false
// console.log("a != b = ", a != b); // true

// let x = 5;
// let y = "5";
// let z = 5;
// let m = 4;

// console.log("x == y = ", x == y); // true
// console.log("x === y = ",  x === y); // false
// console.log("x != y = ", x != y); // false
// console.log("x !== y = ", x !== y); // true

// console.log(!((5 == 4) || (4 == 4)));

// let a = 5;
// let b = 2;

// let cond1 = a > b;  // true
// let cond2 = a === "5";  // false

// let result = cond1 && cond2; // false

// console.log("cond1 && cond2 = ", result);

// let age = 3;

// if(age >= 18){
//     console.log("you can carry gun with license");
// } else {
//     console.log("you are not eligible for carry weopon");
// }

// ternary operator

// let age = 32;
// age >= 18 ? console.log("adult") : console.log("not adult")
// console.log(result)

// let mode = "dark";
// let color = "black";

// if(mode === "dark"){
//     console.log(color);
// } else {
//     console.log("theme is not dark");
// }

// let num = prompt("Enter you number = ");

// if(num % 5 === 0){
//     console.log(num ," is a multiple of 5");
// } else {
//     console.log(num , "is not a multiple of 5");
// }

// let username = prompt("Enter your Username : ");

// if (username === "falconh16") {
//   console.log("your username is correct");

//   let password = prompt("Enter your password : ");

//   if (password === 1234) {
//     console.log("your password is correct!");
//     console.log("congratulations!");
//   } else {
//     console.log("Incorrect password");
//     console.log("Try again");
//   }
// } else {
//   console.log("Your username is incorrect");
// }


// let button = prompt ("Button is on or off : ");

// if(button === "on"){
//     console.log("fan is on");
// } else {
//     console.log("fan is off");
// }


// let result = prompt ("Enter your result : ");

// if(result === "pass"){
//     console.log("congratulattions!")
//     console.log("Succcess is a luxury")
// } else {
//     console.log("one peace of paper can not decide my future :)");
// }

// let age = number(prompt("Enter your age : "))

// if(age >= 18){
//     console.log("your can vote");
// } else if (age >= 1 && age <= 17){
//     console.log("you cannot vote");
// } else {
//     console.log("Enter correct age ");
// }

// let temp = Number(prompt("Enter temperature : "));

// if (temp >= 35){
//     console.log("It's too hot");
// } else if (temp >= 20 && temp >= 35){
//     console.log("It's pleasant");
// } else if (temp >= 10 && temp <= 20){
//     console.log("It's cold");
// } else if (temp <= 10){
//     console.log("It's freezing")
// } else {
//     console.log("Enter temperator in digit (donot use special character or alphabet)!")
// }


let salary = Number(prompt("Enter your Salary : "));
let tax = (10/100) * salary;

if (salary >= 0 && salary <= 50000){
    console.log("your salary is : ", salary);
    console.log("Tax : ", tax);
} else if (salary > 50000 && salary >= 100000){
    console.log("your salary is : ", salary);
    console.log("Tax : ", tax);
} else if (salary > 100000){
    console.log("your salary is : ", salary);
    console.log("Tax : ", tax);
} else {
    console.log("Please enter your salary in number")
}

console.log("Thank you for using our system! :)");