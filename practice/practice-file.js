// my practice file 
// 21 june 2026

// Q1 Ek variable banao jisme tumhara naam ho, aur console mein print karo:
// Q1 Create a variable that stores your name and print it to the console like this:

// solution

// let name = "Abdul Haseeb";
// console.log(`my nanme is ${name}`);

// Q2. Take two numbers — a = 15, b = 4 — and print their remainder using the modulus operator.

// solution

// let a = 15;
// let b = 4;
// console.log(`Modulues of ${a} & ${b} = ${a % b}`);

// Take a number. If it is greater than 0, print "Positive". If it is less than 0, print "Negative". If it equals 0, print "Zero".

// solution

// let num = Number(prompt("Enter your number: "));

// if (num > 0){
//     console.log(`Positve`);
// } else if (num < 0){
//     console.log("Negative");
// } else if (num === 0){
//     console.log("Zero");
// } else {
//     // for a save side
//     console.log("Enter your output in numbers\nThank you :)");
//}

// Q4. Print only the even numbers from 1 to 10 using a loop.

// solution

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(`${i}`);
//     }
// }

// Q5. Take the string "hello world" and print it in uppercase.

// solution

// let str = "hello world";
// console.log(str.toUpperCase());

// Q6. Use a loop to print this pattern:
/*1
2
3
4
5*/

// solution 

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// Q7. Take the string "  FalconH  " and remove the extra spaces from both sides, then print it. (Hint: there's a string method for this!)

// solution

// let str1 = "  FalconH    ";
// console.log(str1.trim());

// Q8. Set age = 17. If age is 18 or above, print "Can vote". Otherwise print "Cannot vote".

// let age = 17;

// if (age >= 18){
//     console.log("Can Vote");
// } else if (age <= 17){
//     console.log("Cannot Vote");
// } else {
//     // for safe side
//     console.log("Please enter your age in number");
// }

// Q9. Take the string "Backend Journey" and print how many characters it contains.

// solution

// let str2 = "Bankend Journey";
// console.log(str2.length);

// Q10. Print all multiples of 5 from 1 to 100.\

// solution

// for(let i = 1; i >= 100; i++){
//     if (i % 5 === 0){
//         console.log(i);
//     }
// }

// Q11 . Create two variables — one storing your first name, one storing your last name. Print them together like: "Full name: Abdul Haseeb"

// solution

// let firstName = "Abdul";
// let lastName = " Haseeb";

// let fullName = firstName + lastName;
// console.log(`my full name is ${fullName}`);

// second method

// console.log(firstName.concat(lastName));

// Q 12. Take a = 255 and b = 8. Print how many times b fits completely into a.

// solution

// let a = 255;
// let b = 8;
// console.log(Math.floor(a/b)); 

// Q13. Take a number from the user. Print the result of dividing it by 6 — but only the whole number part (no decimals).

// solution

// let userNum = Number(prompt("Enter your number: "));
// let div = Math.floor(userNum / 6);
// console.log(div);

// Q14. Take total = 500 and people = 3. Print how many each person gets as a whole number (no decimals).

// solution

// let total = 500;
// let people = 3;
// let whole = Math.floor(total/people);
// console.log(whole);

/* Q15. Take a number from the user. If it is divisible by both 3 and 5, print "FizzBuzz". If only by 3, 
print "Fizz". If only by 5, print "Buzz". Otherwise print the number itself. */

// solution

// let userNumber = Number(prompt("Enter your number: "));

// if (userNumber % 3 === 0 && userNumber % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (userNumber % 3 === 0) {
//     console.log("Fizz");
// } else if (userNumber % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(userNumber);
// }

// Q16. Print all numbers from 50 to 60 using a loop.

// solution

// for (let i = 50; i <= 60; i++){
//     console.log(i)
// }

/* Q17. Take the string "falconh studio" and capitalize the first letter of each 
word. (Hint: split, map... or think creatively!) */

// solution

// let sttr = "falconh studio";
// let stt2 = "";

// for (let val of sttr){
//     if (val === "f"){
//         val.toUpperCase();
//     }
//     if (val === "s"){
//         val.toUpperCase();
//     }
//     stt2 = stt2 + val;
// }

// console.log(stt2);

// pending

// Q18. Use a loop to print the multiplication table of 7 (from 7x1 to 7x10).

// solution

// for (let i = 1; i <= 10; i++){
//     console.log(`7 * ${i} = ${i * 7}`);
// }

// /* Q19. Take a string from the user and check if it contains the 
// word "backend". Print "Found!" or "Not Found!". */

// // solution

// let stttr = prompt("Enter your string: ");

// if (stttr.includes("Backend") || stttr.includes("backend")){
//     console.log("Found!");
// } else {
//     console.log("Not Found!");
// }

/* Q20. Take price = 1500 and discount = 10. 
Calculate the final price after applying the discount percentage and print it. */

// solution

// let price = 1500;
// let discount = (1500/100)*10;
// console.log(discount);

// Q21. Use a loop to print the sum of all numbers from 1 to 50.

// solution

// let sum = 0;
// for(let i = 1; i <= 50; i++){
//     sum = sum + i;
// }
// console.log(sum);

// Q22. Take a string "  Hello World  " — trim it, convert to lowercase, and print it.

// solution

// let string = "    Hello World   ";
// string = string.trim();
// string = string.toLowerCase();

// console.log(string);

// from i will solve questionn date wise per day /date ten  question;

// 23 june 2026

/* Q1. Create a variable temperature = 38. If it is above 37.5, print "Fever". If it is between 36 
and 37.5, print "Normal". Otherwise print "Low Temperature". */

// solution

// let temperature = 38;

// if (temperature > 37.5) {
//     console.log("Fever");
// } else if (temperature >= 36 && temperature <= 37.5) {
//     console.log("Normal");
// } else {
//     console.log("Low temperature");
// }

/* Q2. Take two strings from the user — first name and 
last name. Print them together in uppercase like: "ABDUL HASEEB" */

// solution

// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");

// let fullName = firstName + " " + lastName;
// fullName = fullName.toUpperCase();
// console.log(fullName);

// Q3. Print all numbers from 1 to 100 that are divisible by both 2 and 3.

// solution

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0 && i % 3 === 0) {
//         console.log(i);
//     }
// }

// Q4. Take a string "javascript is awesome" and count how many times the letter "a" appears in it.

// solution

// let str = "javascript is awesome";
// let count = 0;
// for (let val of str) {
//     if(val === "a") {
//         count = count + 1;
//     }
// }

// console.log(count);


// Q5. Take principal = 5000, rate = 8, time = 3. Calculate and print the simple interest.

// (Formula: SI = principal * rate * time / 100)

// solution

// let principal = 5000;
// let rate = 8;
// let time = 3;
// let si = (principal * rate * time / 100);
// console.log(Math.floor(si));

// Q6. Take a number from the user. Print its multiplication table from 1 to 10.

// solution

// let num = Number(prompt("Enter your number (1-100): "));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }

// Q7. Take a string from the user and print it reversed.

// (Hint: loop from last character to first)

// solution

// let struser = prompt("Enter your string: ");

// for (let i = struser.length - 1; i >= 0; i--){
//     console.log(struser[i])
// }
 

// Q8. Take num = 9. Print its square and cube.

// solution

// let num = 9;
// let square = 9 ** 2;
// let cube = 9 ** 3;

// console.log(`square of ${num} is = ${square}\ncube of ${num} is = ${cube}`);

// Q9. Use a loop to print only numbers from 1 to 50 that end with digit 3.

// (like 3, 13, 23, 33, 43)

// solution

// for (let i = 1; i <= 50; i++) {
//     if (i % 10 === 3) {
//         console.log(i)
//     }
// }



/* Q10. Take a string from the user. Print "Long string" if it has 
more than 10 characters, otherwise print "Short string". */

// solution

// let string = prompt("Enter your string: ");
// let strlen = string.length;

// if (strlen > 10) {
//     console.log("Long String");
// } else {
//     console.log("Short string")
// }

// 24 june 2026

// Q1. Take num = 144. Check if it is a perfect square. Print "Perfect Square" or "Not a Perfect Square".

// (Hint: Math.sqrt)

// solution

// let num = Number(prompt("Enter your number: "));
// let check = Math.sqrt(num);
// if(check % 1 === 0) {
//     console.log("Perfect Square");
// } else {
//     console.log("Not a perfect square");
// }

// Q2. Take a string from the user. Count how many vowels are in it. (vowels: a, e, i, o, u)

// solution

// let str = prompt("Enter your string: ");
// let count = 0;
// for (let val of str) {
//     if("aeiou".includes(val.toLowerCase())){
//         count += 1;
//     }
// }

// console.log(count);

// Q3. Take a = 56 and b = 98. Print the larger number without using Math.max.

// solution

// let a = 56;
// let b = 98;

// if(a > b){
//     console.log(a);
// } else {
//     console.log(b);
// }

// Q4. Use a loop to print all numbers from 1 to 50 that are odd and divisible by 7.

// solution

// for (let i = 1; i <= 50; i++) {
//     if(i % 7 !== 0){
//         continue;
//     }
//     console.log(i);
// }

// new apprach

// Q5. Take a string from the user. Print it without any spaces.

// (Hint: loop through each character)

// solution

// let user = prompt("Enter your string: ");

// for (let val  of user) {
//     val = val.toLowerCase();
//     if(val === " "){
//         continue;
//     }
//     console.log(val);
// }

// Q6. Take salary = 85000. If salary is above 100000, print "High". If between 
// 50000 and 100000, print "Medium". Otherwise print "Low".

// solution

// let salary = Number(prompt("Enter your Salary: "));
// if (salary > 100000) {
//     console.log("High");
// } else if (salary >= 50000 && salary <= 100000) {
//     console.log("Between");
// } else {
//     console.log("Low");
// }

// Q8. Take a string "Hello World". Replace every "o" with "0" and print it.

// (Hint: loop through each character)

// solution

// let str = "Hello World";
// str = str.replaceAll("o", 0);
// console.log(str);

// for question request we use loop

// let str = "Hello World";
 
// for (let val of str) {
//     if(val === "o"){
//         console.log(val.replace("o", 0));
//     }
// }

// we dont need to use replaceall because loop check each character on every iteration

// Q9. Take num = 25. Print "Perfect Square" if it is, otherwise "Not".

// (Bonus: can you solve both Q1 and Q9 with the same logic?)

// solution

// let num = 25;
// num = Math.sqrt(num);
// if(num % 1 === 0){
//     console.log("Perfect square");
// } else {
//     console.log("Not")
// }

// Q10. Take two numbers from the user. Print their sum, difference, product, and quotient — all in one go.

// solution

// let num1 = Number(prompt("Enter your first number: "));
// let num2 = Number(prompt("Enter your second number: "));

// console.log(`sum of two number ${num1 + num2}\ndifference of two number ${num1 - num2}\n
// product of two numbers ${num1 * num2} quotient of two number is ${num1 / num2}`);

// 25 june 2026

// Q1. Take a string from the user. Print "Palindrome" if it reads the same forwards and 
// backwards, otherwise "Not Palindrome".

// (Example: "madam" → Palindrome)

// solution

// let str = prompt("Enter your string: ");
// let reversed = "";
// for(let i = str.length - 1; i >= 0; i--){
//     reversed += str[i]
//     if(str === reversed) {
//         console.log("Palindrome")
//     } else {
//         console.log("Not Palindrome");
//     }

// }

// correct solution

// let str = prompt("Enter your string: ");
// let reversed = "";

// for(let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// if (str === reversed) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

// Q2 ready hai:
// Take num = 1234. Extract and print the last two digits.

// (Hint: % 100)

// solution

// let num = 1234;
// console.log(num % 100);

// Q3 Take a string from the user. Count how many uppercase letters are in it.

// solution

// let str = prompt("Enter your string: ");
// let uppercase = "";
// let count = 0;
// for(let val of str){
//     if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(val)){
//         uppercase += val;
//         count++;
//     }
// }

// console.log(`this string contain ${count} uppercase this letters are ${uppercase}`);

// new method

// let str = prompt("Enter your string: ");

// for(let i = 0; i <= str.length - 1; i++){
//     if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(str[i])){
//         let uppercase = "";
//         uppercase += str[i];
//         console.log(`uppercase at index ${i} ${uppercase}`);
//     }    
// }

// Q6 karo:
// Take a string "Hello World 123". Count how many digits are in it.

// solution

// let str = "Hello World 123";
// let count = 0;

// for(val of str) {
//     if("0123456789".includes(val)){
//         count++;
//     }
// }

// console.log(count);

// new method

// for(let i = 0; i <= str.length - 1; i++){
//     if("0123456789".includes(str[i])){
//         console.log(`val at index ${i} = ${str[i]}`);
//     }
// }

// Q7 Take year = 2024. Check if it is a leap year.
// (Divisible by 4, but not 100, unless also divisible by 400)

// let user = Number(prompt("Enter year (e.g: 1999 2000, 2009): "));

// if(user % 400 === 0) {
//     console.log("Leap Year");
// } else if (user % 100 === 0) {
//     console.log("Not a leap year");
// } else if (user % 4 === 0) {
//     console.log("Leap year");
// } else {
//     console.log("Not a leap year");
// }

// console.log("Thank you :)");

// Q8 Take two numbers from the user. Print the larger one — but if they are equal, print "Equal".

// solution

// let num1 = Number(prompt("Enter your num1: "));
// let num2 = Number(prompt("Enter your num2: "));

// if(num1 === num2){
//     console.log("Both are Equal");
// } else if(num1 > num2) {
//     console.log("num1 is greater than num2");
// } else {
//     console.log("num2 is greater than num1");
// }


// Q9 Take a string from the user. Print it with all spaces removed and in uppercase.

// let str = prompt("Enter your string: ");
// str = str.toUpperCase();
// let str2 = "";
// for(let val of str) {
//     if(" ".includes(val)) {
//         continue;
//     }
//     str2 += val;
// }
// console.log(str2);

// Q11 ready (Arrays):
// Create an array of 5 numbers. Print each element using a loop.

// solution

// let num = [1, 2, 3, 4, 5];

// for(let val of num){
//     console.log(val);
// }

// Q12 ready:
// Create an array of 5 numbers. Print the first and last element.

// solution

// let num = [1, 2, 3, 4, 5];

// console.log(`first element ${num[0]} and the last element is ${num[4]}`);

// Q13 ready:
// Create an array [10, 20, 30, 40, 50]. Print its length.

// solution

// let array = [10, 20, 30, 40, 50];
// console.log(array.length);