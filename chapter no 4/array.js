// const marks = {
//     std1 : 91,
//     std2 : 82,
//     std3 : 76,
//     std4 : 56,
//     std5 : 90
// };

// for(let key in marks){
//     console.log(`${key} : ${marks[key]} `)
// }

// arrays

// let marks = [98, 90, 97, 89, 80];
// console.log(marks);

// let heroes = ["ironman", "hulk", "Dr strange", "spiderman", "superman"];
// heroes = heroes.length;
// console.log(heroes);

// let marks = [34,45,56,87,90];

let hero = ["Ironman", "Spiderman", "Superman", "Hulk", "Dr Strange"];

// for (let val of heroes) {
//     console.log(val);
// }

// for(let idx = 0; idx < hero.length; idx++){
//     console.log(idx[hero]);
// }

// for(let i = 0; i < hero.length; i++){
//     console.log(hero[i].toLowerCase());
// }

// let marks = [87,90,76,45,89,54];
// let sum = 0;

// for(let val of marks){
//     sum = sum + val;
// }

// console.log(`the sum of marks arrays is = ${sum}\naverage is = ${Math.floor(sum / marks.length)}`);


// let marks = [89,90,76,67,45,62];
// let sum = 0;
// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
// }
// console.log(sum);


let prices = [250, 645, 300, 900, 50];
let dis;
for(let price of prices){
    dis = (price * 10) /100;
    let final_price = Math.floor(price - dis);
    console.log(final_price);
}


