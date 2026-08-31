// let btn = document.querySelector("button");

// const { createElement } = require("react");

// // styling

// btn.style.padding = "20px";
// btn.style.color = "red";
// btn.style.backgroundColor = "black";
// btn.style.border = "none";

// // handler

// btn.addEventListener("click", () => {
//   console.log("button clicked - Handler1");
// });

// btn.addEventListener("click", () => {
//   console.log("button clicked - Handler2");
// });

// let handler3 = () => {
//   console.log("button clicked - Handler3");
// }
// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//   console.log("button clicked - Handler4");
// });

// btn.removeEventListener("click", handler3)

let btn = document.createElement("button");
btn.innerText = "Toggle";
document.querySelector("body").prepend(btn);

// style

btn.style.padding = "10px 30px";
btn.style.fontFamily = "arial";
btn.style.fontSize = "20px";

let currMode = "Light";

btn.addEventListener("click", () => {
  if (currMode === "Light") {
    currMode = "Dark";
    document.body.style.backgroundColor = "black";
  } else {
    currMode = "Light";
    document.body.style.backgroundColor = "white"
  }
  console.log(currMode);
});
