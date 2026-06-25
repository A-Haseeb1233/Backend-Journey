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

//         if("a,e,i,o,u".inclcudes(lowercase[i])){
//             return i;
//         }
//     }
// }

// myfunction("Abdul Haseeb");

const myfunction = (str) => {
  let lowercase = str.toLowerCase();
  let count = 0;
  for (let val of lowercase) {
    if ("a,e,i,o,u".includes(val)) {
      count++;
    }
  }
  return count;
};

let val = myfunction("Abdul Haseeb");
console.log(`In this string ${val} vowels are present`);
