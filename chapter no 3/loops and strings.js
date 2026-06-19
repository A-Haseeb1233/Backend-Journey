// for(let i = 1; i < 5; i++){
//     console.log("The Great Backend Engineer FalconH")
// }

// let n = Number(prompt("Enter your number: "));
// let sum = 0;

// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }

// console.log("sum of n numbers is : ", sum);

// for(let i = 1; i <= 100; i++){
//     console.log("i = ",i);
// }

// let i = 1;
// while(i <= 5){
//     console.log("FalconH");
//     i++;
// }

// let i = 1;
// do{
//     console.log("Apna college");
//     i++;
// } while (i <= 0);

// let n = Number(prompt("Enter your numbers : "));
// let start = Number(prompt("Enter your starting range : "));
// let end = Number(prompt("Enter your Ending range : "));
// for (let i = start; i <= end; i++){
//     console.log(n , " * " , i , " = " , i * n)
//     if(i ===  7){
//         continue;
//     }
// }

// let string = "AbdulHaseeb";
// let length = 0;
// for (let i of string){
//     console.log("i = ",i);
//     length++;
// }

// console.log("length of strval is = ", length);


// for in loops

// const student = {
//     fullName : "Abdul Haseeb",
//     age : 22,
//     cpga : 2.5,
//     isPass : true
// };

// for(let key in student) {
//     console.log("key = ", key, "values = ", student[key]);
// }

// return indexes and keys in for in looops


// for(let i = 0; i <= 100; i++){

//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(i);
// }


// let gameNum = 25;
// let userNum = Number(prompt("Guess a game number: "));

// while(userNum !== gameNum) {
//     userNum = Number(prompt("you guess a wrong number guess again!"));
//     console.log("userNum = ", userNum);
// }

// console.log("Congratulations you entered a right number!");


// string 

// let str = "Abdul Haseeb";
// let str2 = "FalconH";

// console.log(`str = ${str}\nstr2 = ${str2}`);
// console.log(typeof str, "\n", typeof str2);
// console.log(`length of first string is = ${str.length}\nlenght of second string is = ${str2.length}`);

// console.log(str[2]);

// for(val of str){
//     console.log(i);
// }

// let str = "Abdul Haseeb";
// str = str.trim();
// console.log(str);


// let str = "Abdul";
// let str2 =  " Haseeb"
// console.log(str.concat(str2));


// let userName = promtp("Enter your username: ");
// let addFirst = "@";
// let addLast = "12";

// let res = userName.concat(addFirst.concat(addLast));

// console.log(res);

// let browsertype = "firefox";

// if(browsertype.includes("fox")){
//     console.log("fox found");
// } else {
//     console.log("fox not found");
// }


// let browsertype = "firefox";

// if(browsertype === browsertype.startsWith("fox")){
//     console.log("not start with fox");
// } else {
//     console.log("yes start with fox");
// }

// let browsertype = "mozilla"

// if(browsertype.endsWith("zilla")){
//     console.log("yes");
// } else {
//     console.log("no")
// }


//extra
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter your name: ", function(name) {
//     console.log("Hello " + name);
//     rl.close();
// });

// let cities = ["Karachi", "Lahore", "Islamabad"];

// for(let val of cities){
//     console.log(val);
// }

// let cities = ["Karachi", "Lahore", "Islamabad"];

// for(let city of cities){
//     let len = city.length;
//     if(len >= 6){
//         console.log(`${city}`);
//     }

// }


// let name = "Haseeb";

// for (let val of name){
//     console.log(val.toUpperCase());
// }

// let numbers = [10, 20, 30, 40, 50];

// for (let val of numbers){
//     if(val >= 25){
//         console.log(val);
//     }
// }


// let passwords = ["abc123", "securePass", "hello", "myPassword123"];

// for (let val of passwords){
//     let lenCheck = val.length;
//     if(lenCheck > 8){
//         console.log(val);
//     }
// }

// let emails = ["user@gmail.com", "admin@yahoo.com", "test@gmail.com", "hello@hotmail.com"];
// for...of use karo
// sirf wo emails print karo
// jo "@gmail.com" se end hoti hon

// for (let val of emails){
//     if(val.endsWith("@gmail.com")){
//         console.log(val);
//     }
// }

// let cities = ["Karachi", "Lahore", "Islamabad"];

// for (let index in cities){
//     console.log(index);
// }

    // const student = {
    //     fullName : "Abdul Haseeb",
    //     age : 21,
    //     eye : "Green"
    // }

    // for(let index in student){
    //     console.log(`${index} = ${index[student.eye]}`);
    // }
