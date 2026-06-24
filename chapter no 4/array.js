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

// let hero = ["Ironman", "Spiderman", "Superman", "Hulk", "Dr Strange"];

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


// let prices = [250, 645, 300, 900, 50];
// let dis;
// for(let price of prices){
//     dis = (price * 10) /100;
//     let final_price = Math.floor(price - dis);
//     console.log(final_price);
// }

// let items = [250, 645, 300, 900, 50]
// let i = 0;
// for(let val of items) {
//     console.log(`value of at index ${i} = ${val}`);
//     i++;
//     let offer = (val * 10) / 100;
//     items[i] = items[i] - offer;
//     console.log(`after applying offer = ${items[i]}`)
// }

// for a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// all items hava an offer of 10% off on them change the array to store 
// final price after applying offer.


// this si final answer which i want to write my self
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items) {
//     console.log(`value at index ${i}  = ${val}`);
//     let offer = (val * 10) / 100;
//     items[i] = items[i] - offer;
//     console.log(`value after offer ${items[i]}`);
//     i++;
// }

// console.log(items)

// second to solve the same question

// solution

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items) {
//     let offer = (val * 10) / 100;
//     items[i] = Math.floor(items[i] - offer);
//     i++;
// }

// console.log(`${items}`);


// another method to write the solution of the same question

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++) {
//     let offer = (items[i] * 10) / 100;
//     items[i] -= offer;
// }

// console.log(items);

// push
// pop
// tostring

// let schoolItems = ["bag", "pencil box", "uniform", "shoes"];
// let caps = schoolItems.toString().toUpperCase();
// console.log(schoolItems);
// schoolItems.push("Water bottle", "wrist watch", "belt", "books", "copies");
// console.log(schoolItems); 

// let marks = [87, 98, 90, 79];

// console.log(marks.toString());

// let deleted = marks.pop();
// console.log(`deleted ${deleted}`);
// console.log(marks); 


// // concat
// let dyLang = ["Js", "py", "ruby", "php"];
// let staLang = ["c", "c++", "java"];
// staLang.push("typescript");
// console.log(dyLang.concat(staLang));

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// remove the first company from the array
// method 1

// companies.shift("Bloomberg");
// console.log(companies);

// method 2
// companies.splice(0,1);
// console.log(companies);

// remove uber and ola in its place

// companies.splice(2,1,"Ola");
// console.log(companies);

// add amazon at the end

// method 1

// companies.push("amazon");
// console.log(companies);

// method 2

// companies.splice(6,0,"Amazon");
// console.log(companies);

