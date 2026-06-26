/* 
Client Requirements:
Mujhe ek program chahiye jisme:

User se student ka naam lo
User se 5 subjects ke marks lo (0-100)
Total marks calculate karo
Percentage calculate karo
Grade do is tarah:

90% ya upar → "A"
80-89% → "B"
70-79% → "C"
60-69% → "D"
60% se kam → "Fail"


Final output kuch aisa ho:

Student: Abdul Haseeb
Total Marks: 430/500
Percentage: 86%
Grade: B
*/

let stdName = prompt("Enter your name: ");
console.log(`Student: ${stdName.trim()}`);

let marks = [];
let sum = 0;
for(let i = 0; i < 5; i++) {
    let mark = Number(prompt(`Enter marks of subject ${i + 1}: `));
    console.log(`Subject ${i + 1} = ${mark}`);
    marks.push(mark);
    sum += mark;
}
console.log(`Total marks: ${sum}/500`);

let percentage = (sum/500) * 100;
console.log(`Percentage: ${Math.floor(percentage)}%`);

let grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80 && percentage <= 89) {
    grade = "B";
} else if (percentage >= 70 && percentage <= 79) {
    grade = "c";
} else if (percentage >= 60 && percentage <= 69) {
    grade = "D";
} else {
    grade = "Fail";
}
console.log(`Grade: ${grade}`);

console.log("Developed By FalconH :)");