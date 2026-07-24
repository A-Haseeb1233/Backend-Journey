// const student = {
//     name : "FalconH",
//     cgpa : 4,
//     uni : "BBSUL"
// };


// const employee = {
//     caltax () {
//         console.log("10$")
//     }
// }


const tax = {
    calTax () {
        console.log(`this is the tax percentage 10`);
    }
};

const employee1 = {
    salary : 90000
}

const employee2 = {
    salary : 95000
}

const employee3 = {
    salary : 92000
}

employee1.__proto__ = tax;
Object.setPrototypeOf(employee2, tax);
