function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
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
    };
};

let displayValue;

