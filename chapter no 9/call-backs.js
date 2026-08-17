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

// function getStudentData(stdID, callBack) {
//     setTimeout(() => {
//         console.log(`data is ${stdID}`);

//         if(callBack) {
//             callBack();
//         }
//     }, 2000);
// }

// getStudentData(100, () => {
//     getStudentData(200, () => {
//         getStudentData(300)
//     })
// });

// promises

// simplest promise by myself;

// try {
//   let promise = new Promise((resolve, reject) => {
//     console.log("Hello! I am promise");
//     resolve("Finally Success");
//   });
// } catch (err) {
//   console.log(err.message);
// }

// let promise = new Promise((resolve, reject) => {
//   console.log("Data fetched and returned");
//   // resolve("promise successful");
//   // reject("data fetch request failed");
// });

function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`you data is ${dataID}`);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

