// setTimeout(() => {
//     console.log("Hello FalconH")
// }, 2000);

// console.log("a");
// console.log("b");

// try {
//   setTimeout(function () {
//     console.log("c");
//   }, 2000);
// } catch (err) {
//   console.log(err);
// }

// console.log("d");
// console.log("e");


// function sum (a, b) {
//     console.log(a + b);
// }

// function calculation (a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculation(1, 2, sum);

// const sum = (a, b) => console.log(`${a+b}`);

// const calculation = (a, b, sumCallBack) => {
//     sumCallBack(a, b);
// }

// calculation(1, 2, (a, b) => {
//     console.log(`${a + b}`)
// })

// const sayHello = (name) => {
//     console.log(`Hello! ${name}`);
// }

// const processUser = (name, callBack) => {
//     sayHello(name);
//     callBack();
// }

// processUser("FalconH", () => {
//     console.log(`Welcome! FalconH`);
// })

// function getData (dataId, getNextData) {
//     setTimeout(() => {
//         console.log(`data is ${dataId}`);
//     }, 2000);

//     getNextData();
// }

// getData(100, () => {
//     getData(200, () => {
//         getData(300);
//     })
// });