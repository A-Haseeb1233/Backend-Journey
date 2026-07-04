// Client Requirements:
// Mujhe ek program chahiye jisme:

// User se password lo
// Check karo:

// 8 se zyada characters ✅
// Kam se kam ek uppercase letter ✅
// Kam se kam ek number ✅
// Kam se kam ek special character (!@#$%^&*) ✅

// Har condition ke liye alag feedback do:

// "Too short!" — 8 se kam
// "Need uppercase letter!"
// "Need a number!"
// "Need special character!"

// Agar sab conditions pass — "Strong Password! ✅"
// Agar koi condition fail — "Weak Password ❌" + specific feedback

// solution design

let password = prompt("Enter your string: ");
let hesNumber = false;

const passwordlengthCheck = (passwordLeng) => {
  return password.length > 8;
}

const passwordNumberCheck = (passwordNum) => {
  for (let val of passwordNum) {
    if ("0123456789".includes(val)) {
      hesNumber = true;
    }
  }
}

// console.log(passwordlengthCheck(password));
let result = passwordNumberCheck(password);
console.log(result)
