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

let operator;

function operate(x, operator, y) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
  }
}
let a = [];
let b = [];
let displayValue = [];
let containsOperator = true;

const nums = document.querySelectorAll(".num");
const opt = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const display = document.querySelector(".input");
function updateDisplay() {
  display.textContent = `${displayValue.join("")}`;
}
nums.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (displayValue.length < 24 && containsOperator === true) {
      a.push(btn.id);
      displayValue.push(btn.id);
      console.log(`displayValue: ${displayValue}`);
      console.log(`a: ${a}`);
      updateDisplay();
    } else if (displayValue.length < 24 && containsOperator === false) {
      b.push(btn.id);
      displayValue.push(btn.id);
      console.log(`displayValue: ${displayValue}`);
      console.log(`b: ${b}`);
      updateDisplay();
    } else {
      alert("You have entered too many characters! Try again");
      [a, b, displayValue] = [[], [], []]
      updateDisplay();
    }
  });
});

opt.forEach((btn) => {
  btn.addEventListener("click", () => {
    containsOperator = false;
    displayValue.push(btn.id);
    updateDisplay();
  });
});

clear.addEventListener("click", () => {
  [a, b, displayValue] = [[], [], []]
  updateDisplay();
});

equal.addEventListener("click", () => {
  containsOperator = true;
  x = parseFloat(a.join(""));
  y = parseFloat(b.join(""));
  
  console.log(operator);
  
});
