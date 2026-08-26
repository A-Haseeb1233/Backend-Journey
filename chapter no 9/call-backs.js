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

// function getData(dataID, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`you data is ${dataID}`);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("work has been sucessfully");
//   } else {
//     reject("request failed");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const student = {
//   fullName : "FalconH",
//   cgpa : 3.4,
//   marks : 43,
//   printName : function () {
//     console.log(this.fullName)
//   },

//   printcgpa : () => {
//     console.log(this.cpga)
//   },

//   printmarks() {
//     console.log(this.marks);
//   }
// }

// const employeeSalCalTax = {
//   calTax() {
//     console.log("10% tax on every employee sal");
//   }
// }

// const emmp1 = {
//   name : "Farhan",
//   printName() {
//     console.log(this.name);
//   }
// }

// emmp1.__proto__ = employeeSalCalTax;

// let promises = new Promise((resolve, reject) => {
//   console.log("this is promise");
//   resolve("fetch data successfully");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataId);
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }

// let result = getData(1, () => {
//   getData(2);
// })

// console.log(result);

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     })
//   })
// });

const getPromise = () => {
return new Promise((resolve, reject) => {
    console.log("i am a promised");
    resolve("success")
    // reject("network error");
  });
};

let promise = getPromise()
promise.then((res) => {
  console.log("promise fullfilled", res);
});

promise.catch((err) => {
  console.log("reject", err)
})