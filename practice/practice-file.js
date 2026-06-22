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

let firstName = "Abdul";
let lastName = " Haseeb";

let fullName = firstName + lastName;
console.log(`my full name is ${fullName}`);

// second method

console.log(firstName.concat(lastName));

// Q 12. Take a = 255 and b = 8. Print how many times b fits completely into a.

// solution

let a = 255;
let b = 8;
console.log(Math.floor(a/b)); 

// Q13. Take a number from the user. Print the result of dividing it by 6 — but only the whole number part (no decimals).

// solution

// let userNum = Number(prompt("Enter your number: "));
// let div = Math.floor(userNum / 6);
// console.log(div);

// Q14. Take total = 500 and people = 3. Print how many each person gets as a whole number (no decimals).

// solution

let total = 500;
let people = 3;
let whole = Math.floor(total/people);
console.log(whole);

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

for (let i = 50; i <= 60; i++){
    console.log(i)
}

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

for (let i = 1; i <= 10; i++){
    console.log(`7 * ${i} = ${i * 7}`);
}

/* Q19. Take a string from the user and check if it contains the 
word "backend". Print "Found!" or "Not Found!". */

// solution

let stttr = prompt("Enter your string: ");

if (stttr.includes("Backend") || stttr.includes("backend")){
    console.log("Found!");
} else {
    console.log("Not Found!");
}

/* Q20. Take price = 1500 and discount = 10. 
Calculate the final price after applying the discount percentage and print it. */

// solution

let price = 1500;
let discount = (1500/100)*10;
console.log(discount);

// Q21. Use a loop to print the sum of all numbers from 1 to 50.

// solution

let sum = 0;
for(let i = 1; i <= 50; i++){
    sum = sum + i;
}
console.log(sum);

// Q22. Take a string "  Hello World  " — trim it, convert to lowercase, and print it.

// solution

let string = "    Hello World   ";
string = string.trim();
string = string.toLowerCase();

console.log(string);
