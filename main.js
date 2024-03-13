function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let a, operator, b;
function operate(x, operator, y) {
  switch (operator) {
    case "add":
      add(x, y);
      break;
    case "subtract":
      subtract(x, y);
      break;
    case "multiply":
      multiply(x, y);
      break;
    case "divide":
      divide(x, y);
      break;
  }
}

let displayValue = [];
let beforeOperator;

const nums = document.querySelectorAll(".num");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const display = document.querySelector(".input");
function updateDisplay() {
  display.textContent = `${displayValue.join("")}`;
}
nums.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (displayValue.length < 24 && beforeOperator === true) {
      a.push(btn.id);
      displayValue.push(btn.id);
      console.log(displayValue);
      console.log(a);
      updateDisplay();
    } else if (displayValue.length < 24 && beforeOperator === false) {
      b.push(btn.id);
      displayValue.push(btn.id);
      console.log(displayValue);
      console.log(b);
      updateDisplay();
    } else {
      alert("You have entered too many characters! Try again");
      a, b, (displayValue = []);
      updateDisplay;
    }
  });
});
clear.addEventListener("click", () => {
  displayValue = [];
  updateDisplay();
});

equal.addEventListener("click", () => {
  operator = displayValue.find(() => {
    return "+", "-", "*", "/";
  });
});
