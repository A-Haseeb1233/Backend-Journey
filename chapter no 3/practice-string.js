// let str = "Hello world";
// console.log(`The length of giving string is : ${str.length}`);

// let para = "Javascript in awesome";
// console.log(para.indexOf("awesome"));

// let name = "haseeb"
// console.log(name.toUpperCase());

// let str = "Hello World";
// str = str.slice(6);
// console.log(str);


// let str = "    Abdul Haseeb      ";
// str = str.trim();
// console.log(str);

// let str = "I love JavaScript"
// str = str.slice(7);
// console.log(str);

// let str2 = "My name is Haseeb";
// str2 = str2.slice(11);
// console.log(str2);

// let str = "I love Python"
// str = str.replace("Python", "JavaScript");
// console.log(str);

// let str = "My car is red"
// console.log(str.replace("red", "blue"));


// let str = "I hate Mondays. I hate traffic. I hate bugs."
// console.log(str.replaceAll("hate", "love"));

// let str = "I am learning JavaScript"
// console.log(str.includes("JavaScript"));

// let str = "My favorite language is Python"
// console.log(str.includes("JavaScript"));

// let email = "haseeb@gmail.com"
// if(email.includes("@")){
//     console.log("Valid Email");
// } else {
//     console.log("Invalid Email");
// }

// let str = "Hello World"
// console.log(str.startsWith("Hello"));

// let str = "Hello World"
// console.log(str.endsWith("World"));

// let filename = "report.pdf"

// if(filename.startsWith("report") && filename.endsWith(".pdf")){
//     console.log("Valid pdf Report");
// } else {
//     console.log("Invalid pdf report");
// }

// let str = "Good Morning Pakistan"
// str = str.indexOf("Pakistan");
// console.log(str);

// let str = "My phone number is 03001234567"
// str = str.indexOf("03001234567");
// console.log(str);

// let str = "banana"
// str = str.indexOf("an");
// console.log(str);

// let str = "hello world"
// "o" kis index pe hai? Aur kitni baar aata hai is string mein?

// let str2 = str.indexOf("o")
// console.log(str2)

// let sum;

// for(let val  of str){
//     if(val === "o"){
//         sum = sum + val;
//         console.log(val);
//          console.log(sum);
//     }
   
// }

let str = "hello world";
let count = 0;
for(let val of str){
    if(val === "o"){
        count = count + 1;
    }
}

console.log(count);