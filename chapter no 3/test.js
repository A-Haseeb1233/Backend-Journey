// level one

// 1 se 10 tak numbers print karo.

for (let i = 1; i <= 10; i++){
    console.log(i);
};

// 10 se 1 tak reverse counting print karo.

for (let i = 10; i >= 1; i--){
    console.log(i);
}

// 1 se 100 tak sirf even numbers print karo.
// method one

for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        continue;
    };
    console.log(i);
}

// method two

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    };
};

// 1 se 100 tak sirf odd numbers print karo.
// method one

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        continue;
    };
    console.log(i);
};

// method two

for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    };
};

//  User se ek number lo aur uska table print karo.

let userNum = Number(prompt("Enter your number : "));

for(let i = 1; i <= 10; i++){
    console.log(`${userNum} * ${i} = ${i * userNum}`);
};

// level two

// 1 se 100 tak sab numbers ka sum nikaalo.

let sum = 0;

for(let i = 1; i <= 100; i++){
    sum += i;
}

console.log(`sum = ${sum}`);

// other question 

// 1. 1 se 50 tak jitne numbers 3 se divide hote hain unka sum nikaalo.

let sum = 0;

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        sum += i;
    }
}

console.log(sum);

// User se start range aur end range lo.

let start = Number(prompt("Enter your starting number: "));
let end = Number(prompt("Enter your ending number: "))

for(let i = start; i <= end; i++){
    console.log(i);
}

// User se ek number lo. Aur 1 se us number tak sirf EVEN numbers print karo.

let no = Number(prompt("Enter your ending range: "));

for(let i = 2; i <= no; i += 2){
    console.log(i);
};

// optional if statement
