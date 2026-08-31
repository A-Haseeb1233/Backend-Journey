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

let password = prompt("Enter your string: "); // take string(password) from user
let hasUpper = false; // check uppercase letter
let hasNumber = false; // check number
let hasSpecialChar = false; // check special character
let message = []; // store msg

for (let val of password) {
  if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(val)) {
    hasUpper = true;
  }
  if ("0123456789".includes(val)) {
    hasNumber = true;
  }
  if ("!@#$%^&*".includes(val)) {
    hasSpecialChar = true;
  }
}

if (password.length <= 8) message.push("Too Short!");
if (!hasUpper) message.push("Need Upper Case!");
if (!hasNumber) message.push("Need Number!");
if (!hasSpecialChar) message.push("Need Special Character!");

if (message.length === 0) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
  message.forEach((msg) => console.log(msg));
}
