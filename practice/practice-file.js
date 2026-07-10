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

// 26 june 2026

// Q1. Take a string from the user. Check if it starts with "Hello". Print "Greeting!" or "Not a Greeting".

// (Hint: startsWith)

// solution

// let str = prompt("Enter your string: ");
// str = str.toLowerCase();
// if(str.startsWith("hello")) {
//     console.log("Greeting!");
// } else {
//     console.log("Not a Greeting");
// }

// Q2. Take num = 87654. Print the first two digits only.

// (Hint: think opposite of % trick)

// solution

// let num = 87654;
// console.log(Math.floor(num / 1000));

// Q3. Take a number from the user. Print "Even" if even, "Odd" if odd. But if it is 0, print "Zero".

// let num = Number(prompt("Enter your number: "));

// if (num === 0) {
//     console.log("Zero");
// } else if (num % 2 === 0){
//     console.log("even");
// } else {
//     console.log("odd");
// }

// Q4. Take a string from the user. Replace all vowels with "*" and print it.

// solution

// let str = prompt("Enter your string: ");
// str = str.toLowerCase();
// let vowelsreturn = "";

// for (let val of str) {
//     if("aeiou".includes(val)) {
//         vowelsreturn += "*";
//     } else {
//         vowelsreturn += val;
//     }
// }

// Q6 Take a string from the user. Print how many words are in it.

// (Hint: count spaces + 1);

// let str = prompt("Enter a string: ");
// let str1 = str.trim();
// let count = 1;

// for (let val of str1) {
//     if(val === " "){
//         count++;
//     }
// }

// console.log(count);

// Q7. Take a number from the user. Print "Positive Even", "Positive Odd", "Negative Even", "Negative Odd", or "Zero".

// let num = Number(prompt("Enter number: "));

// if (num === 0) {
//     console.log("zero");
// } else if (num % 2 === 0 && num > 0) {
//     console.log("Positive even");
// } else if (num % 2 !== 0 && num > 0) {
//     console.log("Postive odd");
// } else if (num % 2 === 0 && num < 0) {
//     console.log("Negative even");
// } else {
//     console.log("Negative odd");
// }

// Q8. Use a loop to print the sum of all odd numbers from 1 to 100.

// solution

// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//     if(i % 2 !== 0) {
//         sum += i;
//     }
// }

// console.log(sum);

// Q9. Take a string from the user. Print the middle character.

// (Hint: Math.floor(str.length / 2))

// let str = prompt("Enter your string: ");
// let middlechar = (Math.floor(str.length/2));
// console.log(str[middlechar])

// Q10 ready:
// Take num = 56789. Print each digit separately using a loop.

// let num = 56789;
// let num2  = num.toString();
// for(let val of num2) {
//     console.log(val);
// }

// Q11 ready (Arrays):
// Create an array of 5 names. Print each name using a loop with its index number.

// (like: 0: Abdul, 1: Haseeb)

// solutions

// let array1 = ["Abdul", "Haseeb", "FalconH", "Taha", "Osman"];

// for (let i = 0; i <= array1.length - 1; i++) {
//     console.log(`${i}: ${array1[i]}`);
// }

// Q12 ready:
// Create an array [5, 10, 15, 20, 25]. Print the sum of all elements using a loop.

// solution

// let num = [5, 10, 15, 20, 25];
// let sum = 0;

// for(let val of num) {
//     sum += val;
// }

// console.log(sum);

// Q13 ready (last question!):
// Create an array of 5 numbers. Find and print the largest number without using Math.max.

// solution

// let num = [89, 98, 78, 67, 37];
// let largest = num[0];

// for (let val of num) {
//     if(val > largest) {
//         largest = val;
//     }
// }

// console.log(largest);

// 27 june 2026

// Q1. Create an array of 5 numbers. Print only the even numbers from it using a loop.

// let num = [76, 89, 34, 90, 23];

// for(let val of num) {
//     if (val % 2 === 0){
//         console.log(val);
//     }
// }

// second method

// let num = [89, 67, 56, 34, 90];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//         console.log(num[i]);
//     }
// }

// Q2. Take a string from the user. Count how many consonants are in it.

// (consonants = letters that are NOT vowels)

// solution

// let str = prompt("Enter your string: ");
// str = str.toLowerCase();
// let str2 = "";
// for(let val of str) {
//     if ("aeiou".includes(val)){
//         continue;
//     } else {
//         str2 += val;
//     }
// }

// console.log(str2);

// let str = prompt("Enter your string: ");
// str = str.toLowerCase();
// let str2 = "";
// for (let i = 0; i < str.length; i++) {
//     if ("aeiou ".includes(str[i])) {
//         continue;
//     } else {
//         str2 += str[i];
//     }
// }

// console.log(str2);

// Q3. Create an array of 5 numbers. Find and print the smallest number without using Math.min.

// solution

// let num = [34, 78, 98, 76, 86];
// let smallest = num[0];

// for (let val of num) {
//     if (val < smallest) {
//         smallest = val;
//     }
// }

// console.log(smallest);

// second method

// let num = [34, 78, 98, 76, 86];
// let smallest = num[0];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] < smallest) {
//         smallest = num[i];
//     }
// }

// console.log(smallest);

// Take num = 1234567. Print the middle digit.

// solution

// let num = 1234567;
// num = num.toString().length;

// console.log(`${(num + 1)/2}`);

// correct method

// let num = 1234567;
// let str = num.toString();
// let middleIdex = str.length/2;
// console.log(str[middleIndex])

// Q5. Create an array ["apple", "banana", "mango", "grape", "kiwi"]. Print only fruits that
// have more than 5 letters.

// solution

// let fruits = ["apple", "banana", "mango", "grape", "kiwi"];

// for (let val of fruits) {
//     if (val.length > 5) {
//         console.log(val);
//     }
// }

// Q7. Take a string from the user. Print each word on a separate line.

// solutionn

// let str = prompt("Enter your string: ");
// let word = "";
// for (let val of str) {
//    if(val === " ") {
//     console.log(word); // word print karo
//     word = "";         // reset karo
// } else {
//     word += val;
// }
// }

// Q8 ready:
// Create an array of 5 numbers. Print sum and average.

// solution

// let num = [23, 79, 90, 76, 46];

// let sum = 0;
// let average;
// for (let i = 0; i < num.length; i++) {
//     // calculate sum
//     sum += num[i];
// }
// console.log(sum);

// average = sum / num.length ;
// console.log(average);

// Q9 ready:
// Take two strings from the user. Print the longer one. If equal length, print "Same Length".

// solution

// let str1 = prompt ("Enter first string: ");
// let str2 = prompt ("Enter second string: ");

// if (str1.length === str2.length) {
//     console.log("Same lenght");
// } else if (str1.length > str2.length) {
//     console.log("first string is longer one");
// } else {
//     console.log("Second string is longer one");
// }

//     Q10 ready:
// Take a string from the user. Print "Starts and Ends Same" if first
// and last character are same, otherwise "Different".

// solution

// let str = prompt("Enter string: ");
// for(let val of str) {
//     if("abcdefghijklmnopqrstvwxyz".includes(val)){
//         // pending solve later
//     }
// }

// 28 june 2026

// Q1. Create an array of 5 numbers. Print them in reverse order using a loop.

// solution

// let num = [1, 2, 3, 4, 5];

// for (let i = num.length; i >= 0; i--) {
//     console.log(num[i]);
// }

// Q2. Take a string from the user. Print "All Uppercase" if every
// letter is uppercase, otherwise "Not All Uppercase".

// solution

// let str = prompt("Enter your string: ");
// let allUper = true;
// for (let val of str) {
//   if ("abcdefghijklmnopqrstvwxyz".includes(val)) {
//     alluper = false;
//   }
// }

// if(alluper) {
//     console.log("All Uppercase");
// } else {
//     console.log("Not All uppercase");
// }

// yesterday pending one

// Take a string from the user. Print "Starts and Ends Same" if
//  first and last character are same, otherwise "Different".

// solution

// let str = prompt("Enter your string");
// let strInLower = str.toLowerCase();

// if (strInLower[0] === strInLower[strInLower.length -1]){
//     console.log(`Starts and Ends Same`)
// } else {
//     console.log(`Different`);
// }

// Q3 ready:
// Create an array [10, 20, 30, 40, 50]. Multiply every element by 2 and print each result.

// solution

// let num = [10, 20, 30, 40, 50];

// for(let i = 0; i < num.length; i++) {
//     let multiRes = num[i] * 2;
//     console.log(multiRes);
// }

// Q5 ready:
// Take a string from the user. Print only the unique characters (no repeats).

// solution

// let str = prompt("Enter your string: ");
// str = str.toLowerCase();
// let result = "";

// for (let val of str) {
//     if(result.includes(val)){
//         continue;
//     } else {
//         result += val;
//     }
// }

// console.log(result);

// Q6 ready:
// Create an array of 5 numbers. Print how many numbers are greater than 50.

// solution

// let num = [98, 34, 78, 56, 23];
// let count = 0;
// for(let val of num) {
//     if (val > 50) {
//         count++;
//     }
// }

// console.log(count);

// let num = [98, 34, 78, 56, 23];

// for(let i = 0; i < num.length; i++) {
//     if (num[0] > 50) {
//         i++
//     }
// }

// Q7 ready:
// Take a string from the user. Count how many words start with a vowel.

// solution

// let str = prompt("Enter string: "); // user enter string here
// str = str.toLowerCase();
// let count = 0; // trace vowels words
// let word = ""; // add letter and make word complete

// for(let val of str) {
//     if(val === " ") {
//         if("aeiou".includes(word[0])){
//             count++;
//         }
//         word ="";
//     } else {
//         word += val;
//     }
// }

// if("aeiou".includes(word[0])){
//     count++;
// }

// console.log(count);

// Q8 ready:
// Create an array ["JS", "Python", "Java", "C++", "Rust"]. Print only languages that start with "J".

// solution

// let lang = ["JS", "Python", "Java", "C++", "Rust"];
// for(let val of lang) {
//     if(val[0] === "J") {
//         console.log(val);
//     }
// }

// Q10 ready:
// Create an array of 5 numbers. Print the second largest number.

// let arr = [34, 56, 90, 98, 40];
// let largest = arr[0];
// for(let val of arr) {
//     if(val > largest) {
//         largest = val;
//     }
// }

// console.log(largest);

// let = second_largest = -Infinity;
// for(let val of arr) {
//     if(val > second_largest && val < largest) {
//         second_largest = val
//     }
// }

// console.log(second_largest)

// 29 june 2026

// Q1. Create an array of 5 numbers. Print only numbers that are between 20 and 80.

// solution

// let arr = [23, 12, 87, 10, 45];
// arr.forEach(function(array){
// 	if(array > 20 && array < 80){
// 	console.log(array);
// 	}
// })

// second method

// let arr = [23, 12, 87, 10, 45];
// for(let val of arr) {
// 	if(val > 20 && val < 80) {
// 	console.log(val);
// 	}
// }

// third method

// let arr = [23, 12, 87, 10, 45];
// for(let i = 0; i < arr.length; i++) {
// 	if(arr[i] > 20 && arr[i] < 80) {
// 	console.log(arr[i]);
// 	}
// }

// this question also solve using filter method but i dont comfortable in that method right now

// Q2. Take a string from the user. Print "Contains Number" if it has any digit, otherwise "No Number".

// solution

// let str = prompt("Enter string: ");
// let found = false;
// for(let val of str) {
// 	if("0123456789".includes(val)){
// 	 found = true
// 	}
// }

// console.log(found ? "Contain number" : "not contain number")

// Q3. Create an array ["cat", "dog", "elephant", "ant", "tiger"]. Print only animals whose name has odd number of letters.

// solution

// let animals = ["cat", "dog", "elephant", "ant", "tiger"];
// for(let val of animals) {
// 	if(val.length % 2 !== 0){
// 	console.log(val);
// 	}
// }

// second method

// let animals = ["cat", "dog", "elephant", "ant", "tiger"];
// // this line is issue
// for(let i = 0; i < animals.length; i++) {
// 	if(animals[i].lenght % 2 !== 0){
// 	console.log(animals[i])
// 	}
// }

// Q4. Take a string from the user. Print how many times the letter "e" appears in it.

// solution

// let str = prompt("Enter string");
// str = str.toLowerCase();
// let count = 0;
// for(let val of str) {
// 	if(val === "e"){
// 	count ++;
// 	}
// }

// console.log(count);

//second method

// let str = prompt("Enter string: ");
// str = str.toLowerCase();
// let count = 0;
// for(let i = 0; i < str.length; i++){
// 	if(str[i] === "e"){
// 	count ++;
// 	}
// }

// console.log(count);

// Q5. Create an array of 5 numbers. Print all numbers that are divisible by both 2 and 4.

// solution

// let arr = [23, 89, 56, 40, 36];
// for(let val of arr) {
// 	if(val % 4 === 0 && val % 2 === 0){
// 	console.log(val);
// 	}
// }

// second mehtod

// let arr = [23, 89, 56, 40, 36];
// for(let i = 0; i < arr.length; i++) {
// 	if(arr[i] % 4 === 0 && arr[i] % 2 === 0){
// 	console.log(arr[i]);
// 	}
// }

// third mehtod

// let arr = [23, 89, 56, 40, 36];
// arr.forEach(function(arrs){
// 	if(arrs % 2 === 0 && arrs % 4 === 0){
// 	console.log(arrs)
// 	}
// })

// Q6. Take a string from the user. Print "All Vowels" if every character is a vowel, otherwise "Not All Vowels".

// solution

// let str = prompt("Enter string: ");
// str = str.toLowerCase();
// let allvowel = true;
// for(let val of str) {
// 	if("aeiou".includes(val)){
// 	allvowel = false;
// 	}
// }

// console.log(allvowel ? "all vowels" : "not all vowels");
// Q7. Create an array [5, 10, 15, 20, 25]. Print the product of all elements.

// solution

// let arr = [5, 10,  15, 20, 25];
// let product = 1;
// for(let val of arr){
// 	product = product * val;
// }

// console.log(product);

// Q8. Take a number from the user. Print all numbers from 1 to that number that are not divisible by 3.

// solution

// let num = Number(prompt("Enter number: "));

// for(let i = 0; i <= num; i++){
// 	if(i % 3 === 0) {
// 	continue;
// 	} else{
// 	console.log(i);
// 	}
// }

// Q9. Create an array of 5 strings. Print the longest string.

// solution

// let strarr = ["cat", "honey badger", "tiger", "wolf", "Falcon"];
// let longest = "";
// for(let val of strarr) {
// 	if(val.length > longest.length){
// 	longest = val;
// 	}
// }

// console.log(longest);
// Q10. Take a string from the user. Print "Pangram" if it contains every letter of
// the alphabet at least once, otherwise "Not Pangram".

// solution

// let str = prompt("Enter string: ");
// str = str.toLowerCase();
// let allLetterContain = true;
// for(let val of "abcdefghijklmnopqrstuvwxyz") {
//
//         if(!str.inlcudes(val)){
//      allLetterContain = true;
//
//     }
// }

// console.log(allLetterContain ? "All letter contain" : "not contain");

// 30 june 2026

// Q1. Write a function square(num) that returns the square of a number. Call it with 5.

// solution

// function square(num) {
// 	return num * num
// }

// let result = square(5);
// console.log(result)

// second method

// const square = (num) => console.log(num*num);
// square(5);

// Q2. Write an arrow function isEven(num) that returns true/false. Test with 7.

// solution

// const isEven = (num) => num % 2 === 0 ? true : false

// console.log(isEven(7))

// Q3. Create an array [10, 20, 30, 40, 50]. Use map() to create a new array with each number multiplied by 3.

// solution

// let arr = [10, 20, 30, 40, 50];

// let newArr = arr.map((val) => {
// 	return val * 3
// })

// console.log(newArr)

// Q4. Create an array [5, 12, 8, 19, 3]. Use filter() to get only numbers greater than 10.

// solution

// let arr = [5, 12, 8, 19, 3]

// let newArr = arr.filter((val) => {
// 	return val > 10
// })

// console.log(newArr);

// Q5. Create an array [1, 2, 3, 4, 5]. Use reduce() to find the sum of all elements.

// solution

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((pre , curr) => {
// 	return pre + curr
// })

// console.log(sum);

// Q6. Write a function greet(name) that returns "Hello, [name]!". Call it with your name.

// solution

// function greet(name) {
// 	return `Hello, ${name}!`;
// }

// console.log(greet("Haseeb"))

// Q7. Create an array of 5 strings. Use filter() to get only strings with more than 4 characters.

// solution

// let arr = ["cat", "tiger", "Falcon", "Lion", "Dog"];

// let newArr = arr.filter((val) => {
// 	return val.length > 4
// })

// console.log(newArr);

// Q8. Write an arrow function cube(num) that returns the cube of a number. Test with 4.

// solution

// const cube = (num) => {
// 	return num ** 3;
// }

// console.log(cube(4));

// Q9. Create an array [2, 4, 6, 8, 10]. Use map() to create a new array where each number is divided by 2.

// solution

// let arr = [2, 4, 6, 8, 10];

// let newArr = arr.map((val) => {
// 	return val / 2
// })

// console.log(newArr)

// Q10. Create an array [10, 20, 30, 40, 50]. Use reduce() to find the largest number (without Math.max).

// solution

// let arr = [10, 20, 30, 40, 50];

// let newArr = arr.reduce((pre, curr) => {
// 	if(pre < curr) {
// 	return curr
// 	} else {
// 	return pre
// 	}
// }, 0)

// 1 july 2026

// Q1. Write a function isOdd(num) that returns true if number is odd. Use it to filter odd numbers from [1, 2, 3, 4, 5, 6, 7, 8, // 9, 10].

// solution

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isOdd (num) {
// 	if(num % 2 !== 0){
// 	return true;
// 	} else {
// 	return false;
// 	}
// }

// let finalArr = arr.filter((val) => isOdd(val));
// console.log(finalArr);

// Q2. Take a string from the user. Write an arrow function countVowels(str) that returns the count of vowels in it.

// solution

// let str = prompt("Enter string: ");
// str = str.toLowerCase();
// const vowelCount = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//       count++;
//     }
//   }
//   return count
// };

// console.log(vowelCount(str))

// Q3. Create an array [15, 22, 8, 41, 36, 73, 19]. Use filter() to get numbers greater than 20, then use map() to multiply
// each by 2.

// solution

// let arr = [15, 22, 8, 41, 36, 73, 19]

// let filterArr = arr.filter((val) => val > 20)

// let mulNum = filterArr.map((val) => val * 2)
// console.log(mulNum);

// Q4. Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit.

// solution

// function celsiusToFahrenheit (c) {
// 	let fahrenheit = (c * 9/5) + 32;
// 	return fahrenheit
// }

// console.log(celsiusToFahrenheit(100));

// (Formula: F = C * 9/5 + 32). Call it with 100.
// Q5. Create an array [3, 7, 2, 9, 1, 5]. Use reduce() to find the product of all elements.

// solution

// let arr = [3, 7, 2, 9, 1, 5];

// let newArr = arr.reduce((pre, curr) => {
// 	return pre * curr
// }, 1)

// console.log(newArr);

// Q6. Write an arrow function isPalindrome(str) that returns true if string is palindrome. Test with "madam".

// let str = prompt("Enter string: ");
// str = str.toLowerCase();
// const isPalindrome = (str) => {
// 	let reversed = "";
// 	for(let i = str.length - 1; i >= 0; i--) {
// 	reversed += str[i];
// 	}
//     if(str === reversed) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome(str));
// Q7. Create an array ["apple", "banana", "kiwi", "mango", "strawberry"]. Use map() to create a new array with each fruit namein // upper case.

// solution
// let arr = ["apple", "banana", "kiwi", "mango", "strawberry"];

// let newArr = arr.map((val) => {
// 	return val.toUpperCase();
// });

// console.log(newArr);

// Q8. Write a function sumOfDigits(num) that returns the sum of all digits of a number.

// solution

// function sumOfDigits(num) {
// 	let sum = 0;
// 	num = num.toString();
// 	for(let val of num) {
// 	let nums = Number(val)
// 	sum += nums
// 	}
// return sum
// }

// console.log(sumOfDigits(1234))

// (Example: 123 → 1+2+3 = 6)
// Q9. Create an array [10, 25, 33, 48, 52, 67]. Use filter() to get only odd numbers, then use reduce() to find their sum.

// solution

// let arr = [10, 25, 33, 48, 52, 67];

// let oddArr = arr.filter((val) => val % 2 !== 0)
// let sumOfOdd = oddArr.reduce((pre, curr) => {
// 	return pre + curr
// }, 0)

// console.log(sumOfOdd);

// Q10. Write an arrow function repeatString(str, n) that returns the string repeated n times.
// (Example: repeatString("ha", 3) → "hahaha")

// const repeatString = (str, n) => {
// let result = "";
// for(let i = 1; i <= n; i++) {
// 	result += str
// }
// return result;
// }

// console.log(repeatString("ha", 3));

// Q1. Write an arrow function multiply(a, b) that returns the product of two numbers. Call it with 6 and 7.

// solution

// const multiply = (a, b) => a * b;
// let result = multiply(6 , 7);
// console.log(result);

// console.log(multiply(6, 7);)

// Q2. Create an array [1, 2, 3, 4, 5]. Use map() to create a new array where each number is squared.

// solution

// let arr = [1, 2, 3, 4, 5];
// let squared = arr.map((val) => val * val);
// console.log(squared);

// Q3. Write a function isPositive(num) that returns true if number is positive. Use it with
// filter() on [-3, 5, -1, 8, -2, 4].

// solution

// let arr = [-3, 5, -1, 8, -2, 4];

// function isPositive(num) {
//     return num >= 0;
// }

// let newArr = arr.filter(isPositive)
// console.log(newArr);

// Q4. Create an array ["hello", "world", "js", "code"]. Use filter() to get words with more
// than 3 characters, then map() to uppercase them.

// solution

// let arr = ["hello", "world", "js", "code"];
// let more3Char = arr.filter((val) => val.length > 3);
// let finalArr = more3Char.map((val) => val.toUpperCase())
// console.log(finalArr);

// Q5. Create an array [10, 20, 30, 40, 50]. Use reduce() to find the average.

// solution

// let arr = [10, 20, 30, 40, 50];

// let sum = arr.reduce((pre, curr) => {
//     return pre + curr;
// })

// let average = sum / arr.length;
// console.log(average);

// 2 july 2026

// Q1. Write an arrow function isVowel(char) that returns true if character is a vowel.
// Use it with filter() on ["a", "b", "e", "k", "i", "o", "z"].

// solution

// let arr = ["a", "b", "e", "k", "i", "o", "z"];

// const isVowel = (char) => {
//     return "aeiou".includes(char);
// }

// let vowelArr = arr.filter((val) => isVowel(val));
// console.log(vowelArr);

// Q2. Create an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use filter() to get even numbers,
// then reduce() to find their sum.

// solution

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter((val) => val % 2 === 0);

// let sumOfEven = evenArr.reduce((prev, curr) => prev + curr)

// console.log(sumOfEven);

// Q3. Write a function reverseString(str) that returns a string reversed. Call it with "FalconH".

// solution

// let str = "FalconH";

// function reverseString (str) {
//     let reverseStr = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }

// console.log(reverseString(str));

// Q4. Create an array [5, 10, 15, 20, 25]. Use map() to create a new array where each
// number is converted to a string like "Value: 5", "Value: 10" etc.

// solution

// let arr = [5, 10, 15, 20, 25];

// let arrToStr = arr.map((val) => {
//     let convert = val.toString();
//     return "value: " + val;
// });

// console.log(arrToStr);

// Q5. Write an arrow function findMax(arr) that takes an array and returns the largest number.

// solution
// const findMax = (arr) => {
//   let maxNum = arr[0];
//   for (let val of arr) {
//     if (val > maxNum) {
//       maxNum = val;
//     }
//   }
//   return maxNum;
// };

// let arr = [24, 78, 93, 34, 21];
// console.log(findMax(arr));
// Q6. Take a string from the user. Write a function countWords(str) that returns the number of words in it.

// solution

// let str = prompt("Enter string: ");

// function countWords(str) {
//   let count = 0;
//   let word = "";
//   for (let val of str) {
//     if (" ".includes(val)) {
//       count++;
//     }
//   }
//   return count+1;
// }

// console.log(countWords(str));

// Q7. Create an array [1, 2, 3, 4, 5]. Use reduce() to create a single string "1-2-3-4-5".

// solution

// let arr = [1, 2, 3, 4, 5];
// let str = arr.reduce((pre, curr) => {
//     return pre + "-" + curr
// });

// console.log(str);

// Q8. Write a function isLeapYear(year) that returns true if leap year. Test with 2024.

// solution

// function isLeapYear(year) {
//     if(year % 400 === 0) {
//         return true;
//     } else if (year % 100 === 0) {
//         return false;
//     } else if (year % 4 === 0){
//         return true;
//     } else {
//           return false;
//     }
// }

// console.log(isLeapYear(2024));

// Q9. Create an array of 5 numbers. Use map() to return a new array where each
// number is "even" or "odd" as a string.

// solution

// let arr = [1, 2, 3, 4, 5];

// let evenOddStr = arr.map((val) => {
//     if(val % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// });

// console.log(evenOddStr);

// Q10. Write an arrow function calculateArea(length, width) that returns area of a
// rectangle. Call it with 8 and 5.

// solution

// const calculateArea = (len, width) => len * width;

// console.log(calculateArea(8, 5));

// 3 july 2026

// Q1. Write an arrow function double(num) that returns a number doubled. Use map() on [1, 2, 3, 4, 5].

// solution

// let arr = [1, 2, 3, 4, 5];

// const double = (num) => num * 2;
// let result = arr.map((val) => double(val));
// console.log(result);

// Q2. Create an array ["cat", "dog", "elephant", "ant", "tiger"]. Use filter() to get animals with more
// than 3 letters, then map() to reverse each name.

// let animals = ["cat", "dog", "elephant", "ant", "tiger"];

// let filter = animals.filter((animal) => animal.length > 3);
// let finalArr = filter.map((val) => {
//     let reversed = "";
//     for(let i=val.length-1; i>=0; i--){
//         reversed += val[i];
//     }
//     return reversed;
// });

// console.log(finalArr);

// Q3. Write a function sumArray(arr) that takes an array and returns the sum using reduce().

// function sumArray (arr) {
//    return arr.reduce((pre, curr) => {
//         return pre + curr
//     }, 0);
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(sumArray(arr));

// Q4. Take a string from the user. Write an arrow function removeSpaces(str) that
// returns the string without spaces.

// let str = prompt("Enter string: ");

// const removeSpace = (str) => {
//   let word = "";
//   for (let val of str) {
//     if (" ".includes(val)) {
//       continue;
//     } else {
//       word += val;
//     }
//   }
//   return word;
// }

// console.log(removeSpace(str));

// Q5. Create an array [10, 20, 30, 40, 50]. Use reduce() to find the second largest number.

// Q6. Write a function isPrime(num) that returns true if number is prime. Use it
// with filter() on [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// pending

// Q7. Create an array [1, 2, 3, 4, 5]. Use map() to create a new array where each number is num * num - 1.

// let arr = [1, 2, 3, 4, 5];

// let finalArr = arr.map((val) => val*val-1);
// console.log(finalArr);

// Q8. Write an arrow function longestWord(str) that returns the longest word in a string.
// // Test with "I love backend development".
// let str = "I love backend development";
// let word = "";
// let longest = "";

// for (let val of str) {
//   if (val === " ") {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//     word = "";
//   } else {
//     word += val; // letter add karo
//   }
// }

// if (word.length > longest.length) {
//   longest = word;
// }

// console.log(longest);
// last word bhi check karo!
// Q9. Create an array [5, 3, 8, 1, 9, 2]. Use reduce() to find the minimum number.

// solution

// let arr = [5, 3, 8, 1, 9, 2];

// let minimum = arr.reduce((pre, curr) => {
//     if(curr < pre){
//          return curr
//     }
//     return pre
// }, Infinity)

// console.log(minimum)

// Q10. Write a function titleCase(str) that capitalizes first letter of every word.
// Test with "hello world from falconh".

// 4 july 2026

// Q1. Take a number from the user. Write a function isArmstrong(num) that returns true if it is an Armstrong number.
// (Example: 153 → 1³ + 5³ + 3³ = 153 ✅)

// pending

// Q2. Create an array [1, 2, 3, 4, 5]. Use map() to square each number, then
// filter() to get only squares greater than 5.

// solution

// let arr = [1, 2, 3, 4, 5];

// let square = arr.map((sq) => sq * sq);
// let filterGreater5 = square.filter((val) => val > 5);
// console.log(filterGreater5);

// Q3. Take a string from the user. Count how many words have more than 4 characters.

// solution

// let str = prompt("Enter your String: ");

// let count = 0;
// let word = "";

// for (let val of str) {
//   if (val === " ") {
//     if (word.length > 4) {
//       count++;
//     }
//     word = "";
//   } else {
//     word += val;
//   }
// }

// if (word.length > 4) {
//   count++;
// }

// console.log(count);

// Q4. Write an arrow function factorial(n) that returns the factorial of a number using a loop.
// (Example: 5! = 120)

// pending

// Q5. Create an array of 5 numbers. Print the sum of even numbers using filter() and reduce().

// solution

// let arr = [5, 10, 15, 20, 25];
// let evenArr = arr.filter((even) => even % 2 === 0);
// let sumOfEvenArr = evenArr.reduce((pre, curr) => {
//   return pre + curr;
// });
// console.log(sumOfEvenArr);

// Q6. Take a string from the user. Print "Strong Password" if it has: more than 8
// characters, at least one number, at least one uppercase letter. Otherwise "Weak Password".

// // solution
// let passwordStrengthChecker = prompt("Enter your string: ");
// let hesUpper = false;
// let hesNumber = false;
// let hesSpecialChar = false;
// for (let val of passwordStrengthChecker) {
//   if ("0123456789".includes(val)) {
//     hesNumber = true;
//   }
//   if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(val)) {
//     hesUpper = true;
//   }
//   if("!@#$%^&*()/|+=_-:;".includes(val)){
//     hesSpecialChar = true;
//   }
// }

// if (passwordStrengthChecker.length > 8 && hesNumber && hesUpper && hesSpecialChar) {
//   console.log("Strong Password");
// } else {
//   console.log("Weak Password");
// }

// Q7. Create an array ["JS", "Python", "Java", "C++", "Rust"]. Use map() to
// add " language" to each, then filter() to get only those longer than 10 characters.

// solution

// let techLangArr = ["JS", "Python", "Java", "C++", "Rust"];
// let addWordLang = techLangArr.map((val) => {
//     return val + " Language";
// });

// let filter = addWordLang.filter((val) => {
//     return val.length > 10
// });
// console.log(filter);

// Q8. Write a function findMin(arr) that returns the minimum number from an array without using Math.min.

// solution

// let arr = [11, 56, 21, 10, 44];
// let minArr = Infinity;
// for (let val of arr) {
//     if(val < minArr) {
//         minArr = val;
//     }
// }
// console.log(minArr)

// function findMin (arr) {
//     let minArr = Infinity;
//     for(let val of arr){
//         if(val < minArr){
//             minArr = val;
//         }
//     }
//     return minArr;
// }

// let arr = [23, 10, 45, 7, 98];
// console.log(findMin(arr));

// Q9. Take a number from the user. Use a loop to print all its prime factors.
// (Example: 12 → 2, 2, 3)

// pending

// Q10. Create an array of 5 strings. Use reduce() to find the longest string.

// solution

// let str = ["mouse", "keyboard", "laptop", "monitor", "cpu"];
// let valLeng = " ";
// for(let val of str) {
//     if(val.length > valLeng.length){
//         valLeng = val;
//     }
// }

// console.log(valLeng)

// let str2 = ["mouse", "keyboard", "laptop", "monitor", "cpu"];

// let longStr = str2.reduce ((pre, curr) => {
//     if(pre.length > curr.length){
//         return pre;
//     } else {
//         return curr;
//     }
// });

// console.log(longStr)f

// 5 july 2026

// i took a break for some personal reasons

// 6 july 2026

// Q1. Write a function countOccurrences(str, char) that returns how many times
// a character appears in a string.
// (Example: "hello", "l" → 2)

// solution

// function countOccurrences(str, char) {
//   let count = 0;
//   for (let val of str) {
//     if (val === char) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurrences("Hello", "l"));

// Q2. Create an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use filter() to get numbers divisible
// by 3, then map() to multiply each by 10.

// solution

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filterArr = arr.filter((val) => val % 3 === 0);
// let finalArr = filterArr.map((val) => val * 10);
// console.log(finalArr);

// Q3. Take a string from the user. Print each character and its index.
// (Example: "hi" → "0: h", "1: i")

// solution

// let str = prompt("Enter String: ");
// let idx = 0;
// for(let val of str) {
//     console.log(`${idx+1}: ${val}`);
//     idx++;
// }

// for (let i = 0; i < str.length; i++) {
//   console.log(`${i}: ${str[i]}`);
// }

// Q4. Write an arrow function isValidAge(age) that returns "Minor" if age < 18, "Adult" if
// 18-60, "Senior" if above 60.

// solution

// const isValidAge = (age) => {
//     let status = "";
//   if (age < 18) {
//     status = "Minor";
//   } else if (age >= 18 && age <= 60) {
//     status = "Adult";
//   } else {
//     status = "Senior";
//   }
//   return status;
// };

// console.log(isValidAge(18));

// Q5. Create an array of 5 numbers. Use reduce() to find the difference of all elements left to right.
// (Example: [10, 3, 2, 1] → 10-3-2-1 = 4)

// solution

// let arr = [30, 5, 4, 3, 1];

// let finalArr = arr.reduce((pre, curr) => {
//   return pre - curr;
// });

// console.log(finalArr);

// Q6. Take a string from the user. Print "Valid Name" if it contains only letters and spaces,
// otherwise "Invalid Name".

// solution

// let str = prompt("Enter string: ");
// let specialChar = false;
// for (let val of str) {
//   if ("!@#$%^&*1234567890".includes(val)) {
//     specialChar = true;
//   }
// }

// if (specialChar === false) {
//   console.log("Valid Name");
// } else {
//   console.log("Invalid Name");
// }

// Q7. Create an array ["apple", "banana", "cherry"]. Use map() to return each
// fruit with its index like "1. apple", "2. banana".

// solution

// let arr = ["apple", "banana", "cherry"];

// let idxArr = arr.map((val, idx) => `${idx + 1}. ${val}`);

// console.log(idxArr);

// Q8. Write a function flattenString(arr) that takes an array of strings and returns them
// all joined with " | ".
// (Example: ["JS", "Python"] → "JS | Python")

// solution

// function flattenString(arr) {
//   let finalArr = arr.reduce((pre, curr) => {
//     return pre + " | " + curr;
//   });
//   return finalArr;
// }

// let arr = ["JS", "Python", "C++", "Java", "Go"];

// console.log(flattenString(arr));

// Q9. Create an array of 5 numbers. Use map() to return "positive", "negative", or "zero" for each.

// solution

// let arr = [0, 2, 3, 4, 5];

// let finalArr = arr.map((val) => {
//   let result = "";
//   if (val === 0) {
//     result = "Zero";
//   } else if (val > 0) {
//     result = "Positive";
//   } else {
//     result = "Negative";
//   }
//   return result;
// });

// console.log(finalArr);

// Q10. Write an arrow function clamp(num, min, max) that returns min if num is too small, max if too big, otherwise num itself.
// (Example: clamp(5, 1, 10) → 5, clamp(15, 1, 10) → 10)

// solution

// const clamp =(num, min, max) => {
//     if(num < min) {
//         return min;
//     } else if (num > max) {
//         return max;
//     } else {
//         return num;
//     }
// }

// console.log(clamp(10, 11, 90));

// 7 july 2026

// Q2. Create an array [1, 2, 3, 4, 5]. Use map() to return each number as "odd" or "even", then
// filter() to get only "even" ones.

// solution

// let arr = [1, 2, 3, 4, 5];

// let retOddEven = arr.map((val) => {
//   if (val % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// });

// let onlyEven = retOddEven.filter((val) => {
//   if (val === "Even") {
//     return val;
//   }
// });

// console.log(onlyEven);

// Q3. Take a string from the user. Print "Pangram" if it contains every letter of the alphabet,
// otherwise "Not Pangram".

// solution

// let str = prompt("Ënter your string: ");
// str = str.toLowerCase();
// let allContains = true;

// for(let val of "abcdefghijklmnopqrstuvwxyz") {
//     if(!str.includes(val)){
//         allContains = false;
//     }
// }

// if(allContains === true) {
//     console.log("Pangram");
// } else {
//     console.log("Not Pangram");
// }

// Q4. Write an arrow function BMI(weight, height) that calculates BMI and returns "Underweight",
// "Normal", "Overweight", or "Obese".
// (Formula: BMI = weight / height²)

// solution

// const BMI = (w, h) => {
//     let BMIs = w / (h * h);
//     result = "";
//     if(BMIs < 18.5){
//         result = "UnderWeight";
//     } else if (BMIs >= 18.5 && BMIs < 25){
//         result = "Normal";
//     } else if (BMIs >= 25 && BMIs < 30) {
//         result = "OverWieght";
//     } else {
//         result = "Obese"
//     }
//     return result;
// }

// console.log(BMI(25, 5.9));

// Q5. Create an array ["apple", "banana", "cherry", "date", "elderberry"]. Use filter() to get
// fruits starting with a vowel, then map() to uppercase them.

// solution

// let arr = ["apple", "banana", "cherry", "date", "elderberry"];
// let filterArr = arr.filter((val) => {
//     return "aeiou".includes(val[0]);
// });

// let finalArr = filterArr.map((val) => val.toUpperCase());
// console.log(finalArr);

// Q6. Write a function truncate(str, maxLength) that returns the string cut to maxLength characters,
// with "..." added at the end if it was cut.
// (Example: truncate("Hello World", 5) → "Hello...")

// solution

// Q7. Create an array of 5 numbers. Use map() to return each number's absolute value.
// (Hint: Math.abs)

// solution

// let arr = [1, 2, -3, 4, -5];

// let finalArr = arr.map((val) => {
//   return Math.abs(val);
// });

// console.log(finalArr);

// Q8. Take two numbers from the user. Write a function power(base, exp) that returns base to
// the power of exp without using ** operator — use a loop!

// solution

// let base = Number(prompt("Enter base: "));
// let exp = Number(prompt("Enter exp: "));

// function power(base, exp) {
//   let result = 1;
//   for (let i = 1; i < exp; i++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(base, exp));

// Q9. Create an array [5, 3, 8, 1, 9, 2, 7]. Use filter() to get numbers greater than 4,
// then reduce() to find their product.

// solution

// let arr = [5, 3, 8, 1, 9, 2, 7];
// let filterArr = arr.filter((val) => val > 4);
// let final = filterArr.reduce((pre, curr) => {
//     return pre * curr
// }, 1);

// console.log(final)

// Q10. Write an arrow function initials(fullName) that returns the initials of a full name.
// (Example: "Abdul Haseeb Khan" → "A.H.K")

// solution

// let fullName = prompt("Enter you name: ")

// const initials = (fullName) => {
//     let word = "";
//     let firstLetter = "";
//     for(let val of fullName){
//         if(val === " "){
//             firstLetter += word[0] + "."
//             word = "";
//         } else {
//             word += val;
//         }
//     }
//     if(word){
//         firstLetter += word[0]
//     }
//     return firstLetter;
// }

// console.log(initials(fullName));

// 9 july 2026

// Q1. Write a function reverseWords(str) that reverses the order of words in a string.
// (Example: "Hello World" → "World Hello")

// solution

// let str = prompt("Enter string: ");
// let words = [];
// let word = "";

// for (let val of str) {
//   if (val === " ") {
//     words.push(word);
//     word = "";
//   } else {
//     word += val;
//   }
// }
// words.push(word);
// let final = [];

// for (let i = words.length - 1; i >= 0; i--) {
//   final.push(words[i]);
// }

// let str2 = final.reduce((pre, curr) => {
//   return pre + ", " + curr;
// });

// console.log(str2);

// by using fuction as per question;

// let str = prompt("Enter string: ");
// function reverseword(str) {
//   let words = [];
//   let word = "";

//   for (let val of str) {
//     if (val === " ") {
//       words.push(word);
//       word = "";
//     } else {
//       word += val;
//     }
//   }
//   words.push(word);
//   let final = [];

//   for (let i = words.length - 1; i >= 0; i--) {
//     final.push(words[i]);
//   }

//   let str2 = final.reduce((pre, curr) => {
//     return pre + ", " + curr;
//   });

//   return str2;
// }

// console.log(reverseword(str));

// Q2. Create an array [1, 2, 3, 4, 5]. Use map() to cube each number, then filter() to get
// only cubes greater than 50.

// solution

// let arr = [1, 2, 3, 4, 5];

// let finalArr = arr.map((val) => val ** 3).filter((val) => val > 50);
// console.log(finalArr);

// Q3. Take a string from the user. Print how many unique characters it has.

// solution

// let str = prompt("Enter string: ");
// str = str.toLowerCase()
// let result = "";
// for(let val of str) {
//     if(!result.includes(val)){
//         result += val;
//     }
// }

// console.log(`this are unique char ${result}\n the count of unique char is ${result.length}`)



// Q4. Write an arrow function isAnagram(str1, str2) that returns true if two strings are anagrams.
// (Example: "listen" and "silent" → true)

// solution


// Q5. Create an array ["js", "python", "java", "rust", "go"]. Use filter() to get languages with more
// than 2 characters, then reduce() to join them with " | ".

// solution

// let arr = ["js", "python", "java", "rust", "go"];
// let filArr = arr.filter(function (val) {
//     return val.length > 2;
// }).join(" | ")

// console.log(filArr)

// Q6. Take a number from the user. Write a function digitSum(num) that returns the sum of its digits.
// (Example: 1234 → 10)

// solution

// let num = Number(prompt("Enter numbers: "));
// num = num.toString();
// let sum = 0;
// for(let val of num){
//     let finalNum = Number(val);
//     sum+=finalNum;

// }

// console.log(sum)



// Q7. Create an array of 5 numbers. Use map() to return each number rounded to nearest 10.
// (Example: 14 → 10, 17 → 20 — Hint: Math.round)

// solution

// let arr = [3, 89, 45, 98, 9];

// let round = arr.map((val) => Math.round(val / 10) * 10);
// console.log(round)


// Q8. Write a function removeVowels(str) that returns a string with all vowels removed.
// (Example: "Hello World" → "Hll Wrld")

// solution

// let str = "Hello World";
// let word = "";
// for(let val of str) {
//     if("aeiou".includes(val)){
//         continue;
//     } else{
//         word += val;
//     }
// }
// console.log(word);

// using function

// function removevowels(str) {
//     let word = "";
// for(let val of str) {
//     if("aeiou".includes(val)){
//         continue;
//     } else{
//         word += val;
//     }
// }
// return word;
// }

// console.log(removevowels("Hello world"))

// Q9. Create an array [10, 20, 30, 40, 50]. Use reduce() to find the average.

// solution

// let arr = [10, 20, 30, 40, 50];

// let sum = arr.reduce((pre, curr) => pre + curr, 0);

// let average = sum / arr.length;
// console.log(average)





// Q10. Write an arrow function isPerfectSquare(num) that returns true if number is a perfect square.
// (Example: 16 → true, 15 → false)

// solution

// let num = Number(prompt("Enter Number: "));

// let result = Math.sqrt(num);
// console.log(result % 1 === 0)

// let num = Number(prompt("Enter numbrer: "));

// const isPerfectSquare = (num) => {
//     let result = Math.sqrt(num);
//     return result % 1 === 0;
// }

// console.log(isPerfectSquare(num))