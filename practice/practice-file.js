// my practice file 
// 21 june 2026

// Q1 Ek variable banao jisme tumhara naam ho, aur console mein print karo:
// Q1 Create a variable that stores your name and print it to the console like this:

// solution

let name = "Abdul Haseeb";
console.log(`my nanme is ${name}`);

// Q2. Take two numbers — a = 15, b = 4 — and print their remainder using the modulus operator.

// solution

let a = 15;
let b = 4;
console.log(`Modulues of ${a} & ${b} = ${a % b}`);

// Take a number. If it is greater than 0, print "Positive". If it is less than 0, print "Negative". If it equals 0, print "Zero".

// solution

let num = Number(prompt("Enter your number: "));

if (num > 0){
    console.log(`Positve`);
} else if (num < 0){
    console.log("Negative");
} else if (num === 0){
    console.log("Zero");
} else {
    // for a save side
    console.log("Enter your output in numbers\nThank you :)");
}

// Q4. Print only the even numbers from 1 to 10 using a loop.

// solution

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(`${i}`);
    }
}

// Q5. Take the string "hello world" and print it in uppercase.

// solution

let str = "hello world";
console.log(str.toUpperCase());

// Q6. Use a loop to print this pattern:
/*1
2
3
4
5*/

// solution 

for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Q7. Take the string "  FalconH  " and remove the extra spaces from both sides, then print it. (Hint: there's a string method for this!)

// solution

let str1 = "  FalconH    ";
console.log(str1.trim());

// Q8. Set age = 17. If age is 18 or above, print "Can vote". Otherwise print "Cannot vote".

let age = 17;

if (age >= 18){
    console.log("Can Vote");
} else if (age <= 17){
    console.log("Cannot Vote");
} else {
    // for safe side
    console.log("Please enter your age in number");
}

// Q9. Take the string "Backend Journey" and print how many characters it contains.

// solution

let str2 = "Bankend Journey";
console.log(str2.length);

// Q10. Print all multiples of 5 from 1 to 100.\

// solution

for(let i = 1; i >= 100; i++){
    if (i % 5 === 0){
        console.log(i);
    }
}