let btn = document.querySelector("button");

// styling

btn.style.padding = "20px";
btn.style.color = "red";
btn.style.backgroundColor = "black";
btn.style.border = "none";

// handler

btn.addEventListener("click", () => {
  console.log("button clicked - Handler1");
});

btn.addEventListener("click", () => {
  console.log("button clicked - Handler2");
});

btn.addEventListener("click", () => {
  console.log("button clicked - Handler3");
});

btn.addEventListener("click", () => {
  console.log("button clicked - Handler4");
});
